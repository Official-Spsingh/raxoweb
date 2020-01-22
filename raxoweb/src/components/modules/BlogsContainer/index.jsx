import React from "react";
import { Icon } from 'antd';
const BlogsContainer = props => {
  return (
    <div className="blogs-container">
      <div className="blog-item">
        <div className="blog-heading">
          Quantitative Data Tools For UX Designers
      </div>
        <div className="blog-content-wrapper">
          <div className="blog-title-image">
            <img src="https://www.anita.com/blog/us/wp-content/uploads/sites/3/2016/02/blog-success.jpg" />
          </div>
          <div className="blog-content-container">
            <div className="blog-author">
              <div className="author-pic">
                <Icon type="user" />
              </div>
              <div className="author-name">
                S P Singh
          </div>
            </div>
            <div className="blog-content">
              <div className="blog-date">9 hours ago </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad reiciendis nemo quia numquam eos asperiores quasi dolorum eveniet, libero sunt consequuntur quibusdam voluptas enim placeat recusandae ratione excepturi quisquam.
          <span className="loadMore">Load more...</span>
            </div>
          </div>
        </div>

      </div>
      <div className="blog-item">
        <div className="blog-heading">
         How to master coding in just a month !
      </div>
        <div className="blog-content-wrapper">
          <div className="blog-title-image">
            <img src="http://lifesafar.com/wp-content/uploads/2018/01/blog.jpg" />
          </div>
          <div className="blog-content-container">
            <div className="blog-author">
              <div className="author-pic">
                <Icon type="user" />
              </div>
              <div className="author-name">
                S P Singh
          </div>
            </div>
            <div className="blog-content">
            <div className="blog-date">January 14, 2020</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad reiciendis nemo quia numquam eos asperiores quasi dolorum eveniet, libero sunt consequuntur quibusdam voluptas enim placeat recusandae ratione excepturi quisquam.
          <span className="loadMore">Load more...</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
export default BlogsContainer;
