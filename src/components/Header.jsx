import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
  render(){
    let { isHome, pageNameText, enableBackButton } = this.props;

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
      top: "0",
      marginLeft: "-2vh",
      marginRight: "-2vh"
    }}>
      {isHome && this.getHomeHeader()}
      {pageNameText && this.getHeader(pageNameText, enableBackButton)}   
    </div>;
  }

  getHeader(text, enableBackButton){
    return <React.Fragment>
      <div style={{width : "10%", paddingLeft: "16px"}}>
        <Link to="/home" style={{color : "white"}}>
          <Icon name="left arrow" size="small"/>
        </Link>
      </div>
      <div style={{
        width : "40%"
      }}>
        {text}
      </div>
    </React.Fragment>;  
  }

  getHomeHeader(){
    return <React.Fragment>
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
        <Link to="/settings" style={{color : "white"}}>
          <Icon name="setting" />
        </Link>
        <Icon name="user" />
      </div>
    </React.Fragment>;
  }
}