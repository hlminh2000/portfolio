'use client'
import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "geistMono"
});

// export default class Mermaid extends React.Component {
//   componentDidMount() {
//     mermaid.contentLoaded();
//   }
//   render() {
//     return <div className="mermaid">{this.props.chart}</div>;
//   }
// }
export const Mermaid = ({chart}: {chart: string}) => {
  useEffect(() => {
    console.log("chart: ", chart)
    mermaid.contentLoaded();
  }, [])
  return <div className="mermaid">{chart}</div>;
}
