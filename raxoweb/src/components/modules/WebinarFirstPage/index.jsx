import React from 'react'
import { Button } from 'antd';

const WebinarFistPage = () => {
    return (
        <div className="webinar-first-page-container">
            <div className="webinar-first-page-content-box">
                <div className="webinar-content-container">
                    <div className="content-left-container">
                        <div className="left-content">
                            <h3>Raxoweb Presents</h3>
                            <h1>Webinar on Python</h1>
                            <h4>April 19 2020 @ 03:00 pm</h4>
                            <p>
                                An initiative by team <b>Raxoweb</b> to utilze your valuable time during this lock down period and enhance your technology stack, So that you can compete in this fast growing IT world.
                            </p>
                            <Button type="primary">Know More</Button>
                        </div>
                    </div>
                    <div className="content-right-container">
                        <img src={require('../../../media/webinar1.svg')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebinarFistPage
