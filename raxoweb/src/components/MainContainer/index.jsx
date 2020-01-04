import React from 'react';
import LandingPageContainer from '../modules/LandingPageContainer';
import HeaderComponent from '../modules/HeaderComponent';
import { Route, Switch } from "react-router";
const MainContainer = (props) => {
    return (
        <div className="main-container">
            <HeaderComponent />
            <Switch>
                <Route exact path="/">
                    <LandingPageContainer />
                </Route>
                <Route exact path="/blogs">
                    <h1>blog page</h1>
                </Route>
                <Route path="/*">
                    <LandingPageContainer />
                </Route>
            </Switch>

        </div>
    )
}
export default MainContainer;