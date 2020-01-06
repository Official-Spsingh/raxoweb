import React from 'react';
import {Icon} from 'antd';
const FooterComponent = (props) => {
    return (
        <div className="footer-component">
            
            <div className="footer">
                <div className="left-section">
                    <span>All Rights Reserved &copy; Raxoweb 2020-21</span>
                </div>
                <div className="right-section">
                    <div>
                        <div style={{background:"#3b5998"}}><Icon type="facebook" theme="filled" /></div>
                        <div style={{background:"#E1306C"}}><Icon type="instagram" theme="filled" /></div>
                        <div style={{background:"#2867B2"}}><Icon type="linkedin" theme="filled" /></div>
                        <div style={{background:"#D44638"}}><Icon type="mail" theme="filled" /></div>
                        <div style={{background:"#111111"}}><Icon type="github" theme="filled" /></div>
                    </div>
                </div>
                
                </div>

        </div>
    )
}
export default FooterComponent;