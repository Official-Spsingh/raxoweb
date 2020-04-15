import React from "react";
import { Button } from "antd";
import { withRouter } from "react-router";
const BlogsComponent = props => {
  const gotoPage = link => {
    props.history.push(link);
  };
  return (
    <div className="blogs-component">
      <p>
      A blog is an online journal and a platform where a 
      writer or even a group of writers share their views on an individual subject.
      So now you can also become a blogger by reading and writing technical blogs at our platform.
      </p>
      {/* <div className="btn-container">
        <Button type="primary" shape="round" onClick={() => gotoPage("blogs")} style={{background:"#0a3d62" ,color:"#fafafa",border:"0px"}}>
          Read Blogs
        </Button>
      </div> */}
    </div>
  );
};
export default withRouter(BlogsComponent);
