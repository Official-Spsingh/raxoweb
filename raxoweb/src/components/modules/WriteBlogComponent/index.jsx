import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'antd';
class WriteBlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }
    uploadImageCallBack=(file)=> {
        return new Promise(
          (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
              const response = JSON.parse(xhr.responseText);
              resolve(response);
            });
            xhr.addEventListener('error', () => {
              const error = JSON.parse(xhr.responseText);
              reject(error);
            });
          }
        );
      }
    readBlogClicked=()=>{
        
          this.props.history.push('blogs')
       
      }
      onEditorStateChange= (editorState) => {
        this.setState({
          editorState,
        },()=>{
            console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
        });
      };
    render() {
        const { editorState } = this.state;
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
                <div className="write-blog-container">
                <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
          }}
        />
       
                </div>
                <div className="post-blog">
            <Button>Post Your Blog !</Button>
        </div>
            </div>
        )
    }
}
export default withRouter(WriteBlogComponent);