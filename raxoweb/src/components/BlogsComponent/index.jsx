import React, { Component } from 'react';
import {Button} from "antd";
export default class BlogsComponent extends Component {
    render() {
        return (
            <div className="blogs-component">
                <h1 class="section-heading">Blogs</h1>
                <h3 className="blogs-message">Want to Read Some Amazing Blogs ?</h3>
                <Button>Read Here</Button>
            </div>
        )
    }
}