import React from 'react';
import { Button } from 'antd';
import { withRouter } from "react-router";
const BootCamp = (props) => {
    const gotoPage = (link) => {
        props.history.push(link)
    }
    return (
        <div className="bootcamp-main-container">
            <div className="content-container">
                <p>Why need to be experienced to have professionalism ?</p>
                <p>Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you. Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you. Come Join us to make you battle ready. We provide you with perfect atmosphere to grow as a professional coder and someone what makes market demand from you.</p>
                <div className="btn-container">
                    <Button type="primary" shape="round" onClick={() => gotoPage('bootcamp')}>Learn More</Button>
                </div>
            </div>
            <div className="image-container">
                <img class="clip-animation" src={'https://raxowebapi.herokuapp.com/landing-page-images/bootcamp.png'}></img>
            </div>
        </div>
    )
}
export default withRouter(BootCamp)
