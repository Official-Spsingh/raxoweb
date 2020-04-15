import React from 'react';
import { Button, Row, Col } from 'antd';
import { withRouter } from "react-router";
const bootcamppage =require('@media/svg/homepagebootcamp.svg')
const BootCamp = (props) => {
    const gotoPage = (link) => {
        props.history.push(link)
    }
    return (
        <div className="bootcamp-main-container">

           <div className="img-container">
           <img src={bootcamppage}></img>
           </div>
                    
               
                    <div className="content-container">
                        <p>Spending hours in coaching still feel less confident ?<br></br>Come Join us and be battle ready. We provide you perfect atmosphere to grow as a professional coder and someone what makes market demands from you.
                        We believe in practicals rather than just theory stuff, so here you can get maximum practical exposures 
                        and you will work on multiple of real world projects. </p>
                        <div className="btn-container">
                            <Button type="primary" shape="round" onClick={() => gotoPage('bootcamp')}>Learn More</Button>
                        </div>
                    </div>
             

        </div>
    )
}
export default withRouter(BootCamp)
