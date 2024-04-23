"use client";
import { Component, ReactNode } from "react";

class LifeClass extends Component {
  constructor(props: any) {
    super(props);
    console.log("constructor~");
  }

  UNSAFE_componentWillMount(): void {
    console.log("UNSAFE_componentWillMount~");
  }

  componentDidMount(): void {
    console.log("componentDidMount~");
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount~");
  }
  render(): ReactNode {
    return (
      <>
        <div>LifeClass</div>
      </>
    );
  }
}

export default LifeClass;
