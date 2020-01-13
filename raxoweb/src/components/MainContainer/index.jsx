import React, { useState } from 'react';
import LandingPageContainer from '../modules/LandingPageContainer';
import HeaderComponent from '../modules/HeaderComponent';
import { Route, Switch } from "react-router";
import BlogsContainer from '../modules/BlogsContainer';
import HeaderComponentMobile from '../modules/HeaderComponentMobile';
import LoginSignupContainer from '../modules/LoginSignUpContainer';
const MainContainer = (props) => {
    const [visible, setModalVisible] = useState(false)
    return (
        <div className="main-container">
            <HeaderComponent setModalVisible={setModalVisible} />
            <HeaderComponentMobile setModalVisible={setModalVisible} />
            <Switch>
                <Route exact path="/">
                    <LandingPageContainer />
                </Route>
                <Route exact path="/blogs">
                    <BlogsContainer />
                </Route>
                <Route path="/*">
                    <LandingPageContainer />
                </Route>
            </Switch>
            <LoginSignupContainer visible={visible} setModalVisible={setModalVisible} />
        </div>
    )
}
export default MainContainer;