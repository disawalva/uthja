import React from "react";
import Tutorial from "./Tutorial";
import Calendar from "./Calendar";
import {Segment} from "semantic-ui-react";

export default class Home extends React.Component{
  render(){
    let divs = [];

    let data = [{
      header: "Balance",
      body : "₹ 250"
    },{
      header: "Temporary Losses",
      body : "- ₹ 130"
    },{
      header: "Streak",
      body : "91 Days"
    },{
      header: "Next Goal",
      body : "5 days"
    }];
    data.forEach(d => {
      divs.push(
        <div style={{
          display: "flex",
          height: "100px",
          flexBasis: "46%",
          margin: "16px 2% 16px 2%",
          flexDirection: "column",
          border: "1px solid #eee",
          borderRadius: "8px",
          padding: "8px"
        }}>
          <div style={{
            flexBasis: "25px",
            fontSize: "16px",
            fontWeight: "bold"
          }}>
            {d.header}
          </div>
          <div style={{
            flexBasis: "60px",
            fontSize: "36px",
            lineHeight: "60px",
            textAlign: "center",
            fontWeight: "bolder"
          }}>
            {d.body}
          </div>
        </div>
      );
    });
    return <React.Fragment>
        <Tutorial />
        <div style={{
          display : "flex",
          flexDirection : "column",
          width : "100%"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}>
            {divs}
          </div>
        </div>
        <Calendar></Calendar>
      </React.Fragment>
  }
}