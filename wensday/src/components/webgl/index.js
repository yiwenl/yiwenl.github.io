import React, { Component } from "react";
import WebGLAnimation from "./WebGLAnimation";

let mounted = false;

class WebGL extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate", nextProps, nextState);
  //   // if (this.props.currentPage !== nextProps.currentPage) {
  //   //   this.scene.show(nextProps.currentPage);
  //   // }
  //   return false;
  // }

  componentDidMount() {
    if (!mounted) {
      const { ref } = this;
      const webglAnim = new WebGLAnimation();
      ref.current.appendChild(webglAnim.canvas);
    }
    mounted = true;
  }

  componentWillUnmount() {
    console.log("The component is going to be unmounted");
  }

  render() {
    return <div className="webgl-container" ref={this.ref}></div>;
  }
}

export default WebGL;
