import React from "react";
import { Icon } from 'antd';
const BlogsContainer = props => {
  return (
    <div className="blogs-container">
      <div className="blog-item">
        <div className="blog-heading">
          Quantitative Data Tools For UX Designers
      </div>
        <div className="blog-author">
          <div className="author-pic">
            <Icon type="user" />
          </div>
          <div className="author-name">
            S P Singh
          </div>
        </div>
        <div className="blog-content">
          <span className="blog-date">January 14, 2020 - </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad reiciendis nemo quia numquam eos asperiores quasi dolorum eveniet, libero sunt consequuntur quibusdam voluptas enim placeat recusandae ratione excepturi quisquam.
          <span className="loadMore">Load more...</span>
      </div>
      </div>
      <div className="blog-item">
        <div className="blog-heading">
          Meet "WebFormics" Our New Book on Accessible Web Forms - Now Shipping! 
      </div>
        <div className="blog-author">
          <div className="author-pic">
            <Icon type="user" />
          </div>
          <div className="author-name">
            Pawan Patel
          </div>
        </div>
        <div className="blog-content">
          <span className="blog-date">January 11, 2020 - </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad reiciendis nemo quia numquam eos asperiores quasi dolorum eveniet, libero sunt consequuntur quibusdam voluptas enim placeat recusandae ratione excepturi quisquam.
          <span className="loadMore">Load more...</span>
      </div>
      </div>
      <div className="blog-item">
        <div className="blog-heading">
          Once Upon A Time: Using Story Structure For Better Engagement
      </div>
        <div className="blog-author">
          <div className="author-pic">
            <Icon type="user" />
          </div>
          <div className="author-name">
            Bipul Singh
          </div>
        </div>
        <div className="blog-content">
          <span className="blog-date">January 7, 2020 - </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad reiciendis nemo quia numquam eos asperiores quasi dolorum eveniet, libero sunt consequuntur quibusdam voluptas enim placeat recusandae ratione excepturi quisquam.
      <span className="loadMore">Load more...</span>
      </div>
      </div>

    </div>
  );
};
export default BlogsContainer;
