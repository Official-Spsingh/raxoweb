import React, { Component } from 'react';
import axios from 'axios';
export default class BlogsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogData: []
        }
    }
    componentWillMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                console.log(res.data)
                const data = res.data;
                this.setState({
                    blogData: data
                })
            })

    }
    render() {
        return (
            <div className="blogs-container">
                {
                    this.state.blogData.map(data => {
                        return (
                            <div key={data.id}>

                                <h2>{data.title}</h2>
                                <p>{data.body}</p>

                            </div>
                        )

                    })
                }
            </div>
        )
    }
}