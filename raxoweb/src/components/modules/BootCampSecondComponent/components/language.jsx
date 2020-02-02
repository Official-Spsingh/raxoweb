import React from 'react'

function Language(props) {
    return (
        <div className="language-box-container">
            <div className="outer-circle">
                <div className="inner-circle">
                    <h2>{props.content}</h2>
                </div>
            </div>
        </div>
    )
}

export default Language
