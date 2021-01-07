import React from "react";

import "./Page.css";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
  }

  render() {
    return (
      <div className="A4sheet">
        <div className="aboutMeBackgroundRectangle" />
        <div className="triangleUnder" />
        <div className="triangleOver" />
        {this.children}
      </div>
    );
  }
}

export default Page;
