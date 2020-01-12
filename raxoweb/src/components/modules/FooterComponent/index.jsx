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
                        <a href="https://www.facebook.com/raxoweb/" target='_blank'><div style={{background:"#3b5998"}}><Icon type="facebook" theme="filled" /></div></a>
                        <a href="/" target='_blank'><div style={{background:"#E1306C"}}><Icon type="instagram" theme="filled" /></div></a>
                        <a href="https://www.linkedin.com/company/30174225/" target='_blank'><div style={{background:"#2867B2"}}><Icon type="linkedin" theme="filled" /></div></a>
                        <a href="/" target='_blank'><div style={{background:"#FF0000"}}><Icon type="youtube" theme="filled" /></div></a>
                        <a href="https://github.com/raxoweb" target='_blank'><div style={{background:"#111111"}}><Icon type="github" theme="filled" /></div></a>
                    </div>
                </div>
                
                </div>

        </div>
    )
}
export default FooterComponent;