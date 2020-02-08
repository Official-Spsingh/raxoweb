import React from 'react'

function GridComponent(props) {
    return (
        <div className="grid-item">
            {

                <div className="content-container">
                    <div className="image-container">
                        <img src={require('../../../../media/images/'+props.gridItem.image)} alt="gridImage"/>
                    </div>
                    <div className="comment-container">
                        <h2>{props.gridItem.title}</h2>
                        <p>{props.gridItem.subTitle}</p>
                        <p className="content">{props.gridItem.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default GridComponent
