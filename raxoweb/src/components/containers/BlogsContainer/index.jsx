import React from "react";
import { Icon } from 'antd';
import { isUserAuthenticated } from '@utils/auth'
import { withRouter } from 'react-router-dom'
const BlogsContainer = props => {

  const writeBlogClicked = () => {
    if (isUserAuthenticated()) {
      props.history.push('writeBlog')
    }
    else {
      setActiveModal('login')
    }
  }
  const setActiveModal = (type) => {
    props.setModalVisible(true)
    props.setActiveTab(type)
  }
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div className="header1">
          Raxoweb Blogs
        </div>
        <div className="header2">
          Read and Write Technical Blogs and Share With Your Friends
        </div>
        <button onClick={() => writeBlogClicked()}>Write Blogs</button>
      </div>
      <div className="blog-items-container">


        <div className="blog-item">

          <div className="blog-content-wrapper">
            <div className="blog-title-image">
              <img src={require('../../../media/images/whatwedo1.jpg')} />
            </div>

            <div className="blog-content-container">
              <div className="blog-category">
                GUI DEVELOPMENT
          </div>
              <div className="blog-heading">
                Quantitative Data Tools For UX Designers
          </div>
              <div className="blog-content">

                Design Thinking, Conducting User Research, Ideating & Designing, Information Architecture, Sketching & Wireframing, Prototyping & Testing
    
            </div>

            </div>
            <div className="blog-footer">
              <div className="blog-author">
                <div className="author-pic">
                  <Icon type="user" />
                </div>
                <div className="blog-details">


                  <div className="author-name">
                    S P Singh
                </div>
                  <div className="blog-date">9 hours ago </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div className="blog-item">

          <div className="blog-content-wrapper">
            <div className="blog-title-image">
              <img src={require('../../../media/images/whatwedo3.jpg')} />
            </div>

            <div className="blog-content-container">
              <div className="blog-category">
                MACHINE LEARNING
  </div>
              <div className="blog-heading">
                Quality Analysis With Machine Learning
  </div>
              <div className="blog-content">

                Machine learning in quality assurance.
    The benefits of using machine learning led quality assurance instead of traditional testing.
    </div>

            </div>
            <div className="blog-footer">


              <div className="blog-author">
                <div className="author-pic">
                  <Icon type="user" />
                </div>
                <div className="blog-details">


                  <div className="author-name">
                    Bipul Singh
</div>
                  <div className="blog-date">14 hours ago </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default withRouter(BlogsContainer);
