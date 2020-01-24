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
        Blog component Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fuga minus corporis expedita et ratione eligendi animi architecto fugiat
        laudantium enim, aspernatur quis itaque consequatur assumenda deserunt
        culpa corrupti soluta molestias.
      </p>
      <div className="btn-container">
        <Button type="primary" shape="round" onClick={() => gotoPage("blogs")} style={{background:"#0a3d62" ,color:"#fafafa",border:"0px"}}>
          Read Blogs
        </Button>
      </div>
    </div>
  );
};
export default withRouter(BlogsComponent);
