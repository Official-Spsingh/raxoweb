import React from 'react';
const HomePageContentContainer = (props) => {
    return (
        <div className="home-page-content-container" style={props.title=="What We Do"?{background:"#f4f4f4"}:{}}>
            <div className="titles-container">
                <h1>{props.title}</h1>
                <div className="green-strip"></div>
                <h2>{props.subTitle}</h2>
            </div>
            <div className="content-container">
                {props.children}
            </div>
        </div>
    )
}
export default HomePageContentContainer;    