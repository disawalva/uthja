import React from "react";
import { Icon } from "semantic-ui-react";

export default class Header extends React.Component{
  render(){
    return [
      this.header(),
      this.props.children,
      this.footer()
    ];
  }

  header(){
    return <div style={{
      display: "flex",
      height : "60px",
      fontSize : "xx-large",
      fontWeight: "bolder",
      background: "#333333",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "left"
    }}>
      <div style={{
        width : "40%",
        fontFamily: "Indie Flower, cursive"
      }}>
        Uthja
      </div>
    </div>;
  }

  footer(){
    return <div style={{
      position: "sticky",
      bottom: "0",
      width: "100vw",
      height: "50px",
      display: "flex",
      background: "#333333",
      justifyContent:"space-evenly",
      flexDirection: "row",
      alignItems: "center"
    }}>
        <Icon name="user" size="big"/>
        <Icon name="help" size="big"/>
        <Icon name="setting" size="big"/>
    </div>;
  }
}