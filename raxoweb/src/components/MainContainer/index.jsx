import React from 'react';
import LandingPageContainer from '../modules/LandingPageContainer';
import HeaderComponent from '../modules/HeaderComponent';
import { Route, Switch } from "react-router";
import FooterComponent from '../modules/FooterComponent';
import BlogsContainer from '../modules/BlogsContainer';
const MainContainer = (props) => {
    return (
        <div className="main-container">
            <HeaderComponent />
            <Switch>
                <Route exact path="/">
                    <LandingPageContainer />
                </Route>
                <Route exact path="/blogs">
                    <BlogsContainer/>
                </Route>
                <Route path="/*">
                    <LandingPageContainer />
                </Route>
            </Switch>
            <FooterComponent/>
            

        </div>
    )
}
export default MainContainer;