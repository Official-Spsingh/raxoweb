import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class WriteBlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    readBlogClicked=()=>{
        
          this.props.history.push('blogs')
       
      }
    render() {
        return (
            <div className="blogs-container">
                <div className="blogs-header">
                    <div className="header1">
                        Raxoweb Blogs
        </div>
                    <div className="header2">
                        Read and Write Technical Blogs and Share With Your Friends
        </div>
                    <button onClick={() => this.readBlogClicked()}>Read Blogs</button>
                </div>
            </div>
        )
    }
}
export default withRouter(WriteBlogComponent);