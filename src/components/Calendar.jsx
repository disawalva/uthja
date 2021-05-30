import React from "react";
import {Icon} from "semantic-ui-react";

export default class Calendar extends React.Component{
  constructor(props){
    super(props);
    let todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth() + 1;
    this.state = {year, month}
  }

  navigateMonth(by = 1){
    let {month, year} = this.state;
    month += by;
    if(month > 12){
      month = 1;
      year += 1;
    }
    if(month < 1){
      month = 12;
      year -= 1;
    }
    this.setState({month, year});
  }

  getFirstDayDate(month, year){
    return new Date(`${month}/1/${year}`);
  }

  getDayOfFirstOfMonth(month, year){
    let firstOfMonth = this.getFirstDayDate(month, year);
    return firstOfMonth.getDay() + 1;
  }

  getNumberOfDaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
  }

  getWeeks(){
    let days = ["S", "M", "T", "W", "T", "F", "S"];
    let weekJSX = [];
    days.forEach((d) => {
      weekJSX.push(
        <th>{d}</th>
      );
    });
    return <tr>
      {weekJSX}
    </tr>
  }

  getDays(startDay, numberOfDays){
    console.log("AAAA");
    let rows = [];
    let ptr = 1;
    let currentNum = 1;
    let currentRow = [];
    while(true){
      if(currentNum > numberOfDays){
        if(currentRow.length != 0){
          rows.push(<tr>
            {currentRow}
          </tr>);
        }
        break;
      }

      if(rows.length == 0 && ptr < startDay){
        currentRow.push(
          <td></td>
        );
        ptr = this.getNewPtr(ptr);
        continue;
      }

      currentRow.push(<td style={{textAlign: "center"}}>
        {currentNum++}
      </td>);

      if(ptr == 7){
        rows.push(<tr>
          {currentRow}
        </tr>);
        currentRow = [];
      }
      ptr = this.getNewPtr(ptr);
    }
    return rows;
  }

  getNewPtr(ptr){
    return ((ptr % 7) + 1);   
  }

  getNavigator(){
    let {month, year} = this.state;
    let firstDay = this.getFirstDayDate(month, year);
    month = firstDay.toLocaleString('default', { month: 'long' });
    year = firstDay.getFullYear();
    return <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "50px"
    }}>
      <div style={{flexBasis: "10%"}}>
        <Icon name="arrow alternate circle left outline" size="big" onClick={() => {this.navigateMonth(-1)}}/>
      </div>
      <div style={{
        flexBasis: "80%",
        textAlign: "center",
        fontSize: "xx-large"}}>
        {month} {year}
      </div>
      <div style={{flexBasis: "10%"}}>
        <Icon name="arrow alternate circle right outline" size="big" onClick={() => {this.navigateMonth(1)}}/>
      </div>
    </div>
  }

  render(){
    console.log("aaaa")
    let {month, year} = this.state;
    let startDay = this.getDayOfFirstOfMonth(month, year);
    let numberOfDays = this.getNumberOfDaysInMonth(month, year);
    return <React.Fragment>
      {this.getNavigator()}
      <table style={{
        width: "100%",
        borderSpacing: "seperate",
        borderSpacing: "0 2em",
        fontSize: "20px"
      }}>
        {this.getWeeks()}
        {this.getDays(startDay, numberOfDays)}
      </table>
    </React.Fragment>
  }
}