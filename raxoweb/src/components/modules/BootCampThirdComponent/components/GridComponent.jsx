import React from 'react'

function GridComponent(props) {
    return (
        <div className="grid-item">
            {
                props.gridItem.image?
                <img src={require('@media/images/bootcamp.png')} alt="gridImage"/>
                :
                <div className="content-container">
                    <h2>Learn with Fun</h2>
                    <h3>Student</h3>
                    <p>This has been the best three months ever</p>
                </div>
            }
        </div>
    )
}

export default GridComponent
