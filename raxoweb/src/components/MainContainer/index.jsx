import React, { useState } from 'react';
import LandingPageContainer from '@containers/LandingPageContainer';
import HeaderComponent from '@modules/HeaderComponent';
import { Route, Switch, withRouter } from "react-router";
import BlogsContainer from '@containers/BlogsContainer';
import HeaderComponentMobile from '@modules/HeaderComponentMobile';
import LoginSignupContainer from '@containers/LoginSignUpContainer';
import BootCampContainer from '@containers/BootCampContainer';
import FooterComponent from '@modules/FooterComponent';
import { useEffect } from 'react';

const MainContainer = (props) => {
    const [visible, setModalVisible] = useState(false)
    const [activeTab, setActiveTab] = useState("login");
    useEffect(() => {
        console.log(props)
        if (props.location.pathname == "/blogs") {
            document.title = "Raxoweb Blogs"
        }
        else if (props.location.pathname == "/bootcamp") {
            document.title = "Raxoweb Bootcamp"
        }
        else {
            document.title = "Raxoweb : Enhance Your Success With Us"
        }


    })
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
                    <BootCampContainer />
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
const MainContainerWrapper = withRouter(MainContainer)
export default MainContainerWrapper;