import React from "react";
import { Icon } from 'antd';
const BlogsContainer = props => {
  return (
    <div className="blogs-container">
      <div className="blog-item">

        <div className="blog-content-wrapper">
          <div className="blog-title-image">
            <img src="https://www.anita.com/blog/us/wp-content/uploads/sites/3/2016/02/blog-success.jpg" />
          </div>

          <div className="blog-content-container">
            <div className="blog-category">
              GUI DEVELOPMENT
          </div>
            <div className="blog-heading">
              Quantitative Data Tools For UX Designers
          </div>
            <div className="blog-content">

              Lorem ipsum dolor sit amet consectetur adipisicing elit.  enim placeat recusandae ratione excepturi quisquam.

            </div>

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
      <div className="blog-item">

        <div className="blog-content-wrapper">
          <div className="blog-title-image">
            <img src="https://www.anita.com/blog/us/wp-content/uploads/sites/3/2016/02/blog-success.jpg" />
          </div>

          <div className="blog-content-container">
            <div className="blog-category">
              GUI DEVELOPMENT
  </div>
            <div className="blog-heading">
              Quantitative Data Tools For UX Designers Tools For UX Designers
  </div>
            <div className="blog-content">

              Lorem ipsum dolor sit amet consectetur adipisicing elit.  enim placeLorem ipsum dolor sit amet consectetur adipisicing elit.  enim placeat recusandae ratione excepturi quisquam.
        
    </div>

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
  );
};
export default BlogsContainer;
