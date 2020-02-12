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
    getResponse = (result, file) => {
        const response = {
            status: 200,
            success: true,
            data: {
                id: "8DOewXU",
                title: null,
                description: null,
                datetime: 1581524582,
                type: "image/jpeg",
                animated: false,
                width: 1024,
                height: 768,
                size: 754097,
                views: 0,
                bandwidth: 0,
                vote: null,
                favorite: false,
                nsfw: null,
                section: null,
                account_url: null,
                account_id: 0,
                is_ad: false,
                in_most_viral: false,
                has_sound: false,
                tags: [],
                ad_type: 0,
                ad_url: "",
                edited: "0",
                in_gallery: false,
                deletehash: "tYjPj7t0MFmeWZ7",
                name: "",
                url:result
            }
        }
        console.log(response)
        return response
    }
    uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                // const xhr = new XMLHttpRequest();
                // xhr.open('POST', 'https://api.imgur.com/3/image');
                // xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
                // const data = new FormData();
                // data.append('image', file);
                // xhr.send(data);
                // xhr.addEventListener('load', () => {
                //     const response = JSON.parse(xhr.responseText);
                //     resolve(response);
                // });
                // xhr.addEventListener('error', () => {
                //     const error = JSON.parse(xhr.responseText);
                //     reject(error);
                // });
                console.log(file)
                var reader = new FileReader();
                reader.onloadend = () => {
                    resolve(this.getResponse(reader.result, file))
                }
                reader.readAsDataURL(file);
            }
        );
    }
    postBlog = () => {
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
    }
    readBlogClicked = () => {
        this.props.history.push('blogs')
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
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
                    <Button onClick={this.postBlog}>Post Your Blog !</Button>
                </div>
            </div>
        )
    }
}
export default withRouter(WriteBlogComponent);