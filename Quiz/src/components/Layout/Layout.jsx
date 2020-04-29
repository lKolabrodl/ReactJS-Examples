import React from "react";
import "./Layout.css";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}
export default Layout;
