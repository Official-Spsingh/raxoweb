import React, { useState } from 'react';
import LandingPageContainer from '../modules/LandingPageContainer';
import HeaderComponent from '../modules/HeaderComponent';
import { Route, Switch } from "react-router";
import BlogsContainer from '../modules/BlogsContainer';
import HeaderComponentMobile from '../modules/HeaderComponentMobile';
import LoginSignupContainer from '../modules/LoginSignUpContainer';
import BootCampContainer from '../modules/BootCampContainer';
import FooterComponent from '../modules/FooterComponent';

const MainContainer = (props) => {
    const [visible, setModalVisible] = useState(false)
     const [activeTab, setActiveTab] = useState("login");
    return (
        <div className="main-container">
            <HeaderComponent setModalVisible={setModalVisible} setActiveTab={setActiveTab} />
            <HeaderComponentMobile setModalVisible={setModalVisible} setActiveTab={setActiveTab} />
            <Switch>
                <Route exact path="/">
                    <LandingPageContainer />
                </Route>
                <Route exact path="/blogs">
                    <BlogsContainer />
                </Route>
                <Route exact path="/bootcamp">
                  <BootCampContainer/>
                </Route>
                <Route path="*">
                    <LandingPageContainer />
                </Route>
                
            </Switch>
            <LoginSignupContainer visible={visible} setModalVisible={setModalVisible} activeTab={activeTab} setActiveTab={setActiveTab} />
            <FooterComponent />
        </div>
    )
}
export default MainContainer;