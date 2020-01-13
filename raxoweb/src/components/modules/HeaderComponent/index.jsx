import React from 'react';
import { withRouter } from "react-router";


const HeaderComponent = (props) => {
    const gotoPage = (link) => {
        props.history.push(link)
    }
    return (
        <div className="header-main-container">
            <div className="header-content-container">
                <div className="header-content-left">
                    <div className="header-logo-container" onClick={() => gotoPage('')}>
                        <img style={{ height: "40px", width: "130px" }} src={require('../../../assets/raxologo8888.png')} alt="Raxoweb" />


                    </div>
                    <div className="menu-content">
                        <div className="header-content" onClick={() => gotoPage('bootcamp')}>
                            <span>Bootcamp</span>
                        </div>
                        <div className="header-content" onClick={() => gotoPage('blogs')}>
                            <span>Blogs</span>
                        </div>
                    </div>

                </div>

                <div className="header-content-right">

                    <div className="header-content cancel" onClick={()=>props.setModalVisible(true)}>
                        <span>SignUp</span>
                    </div>
                    <div className="header-content login" onClick={()=>props.setModalVisible(true)}>
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HeaderComponent);
