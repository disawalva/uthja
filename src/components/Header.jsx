import React from "react";
import { Icon } from "semantic-ui-react";

export default class Header extends React.Component{
  render(){
    return [
      this.header(),
      this.props.children,
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
      justifyContent: "left",
      position: "sticky",
      top: "0"
    }}>
      <div style={{
        width : "40%",
        fontFamily: "Indie Flower, cursive"
      }}>
        Uthja
      </div>
      <div style={{
        width : "40%",
      }}>
      </div>
      <div style={{
        width : "40%",
        display: "flex",
        justifyContent: "space-around",
        paddingRight: "4%",
        paddingTop: "2%"
      }}>
        <Icon name="setting" />
        <Icon name="user" />
      </div>
    </div>;
  }
}