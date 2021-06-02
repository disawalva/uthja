import React from "react";
import { Button } from "semantic-ui-react";
import Tutorial from "./Tutorial";

export default class Settings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time : null,
      amount : null,
    }
  }

  render(){
    let timings = ["4:00 AM", "4:15 AM", "4:30 AM", "4:45 AM",
    "5:00 AM", "5:15 AM", "5:30 AM", "5:45 AM",
    "6:00 AM", "6:15 AM", "6:30 AM", "6:45 AM",
    "7:00 AM"];

    let amount = [100,200,300,400,500,600,700,800,900,1000];
    amount = amount.map(x => "₹ " + x);
    let arr = [{
      header : "Pick a time",
      message : <div>Allowed timings <br />(4 AM -7 AM)</div>,
      additionalChildren : () => {
        return <div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div>
              {
                this.getSlots({
                  entities : timings, 
                  key : "time",
                })
              }
            </div>
          </div>
        </div>
      },
      confirmHandler : () => {
        console.log("Final selection is " + this.state.currentlySelectedTime)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 4000);
        });
      }
    },{
      header: "₹ 0",
      message : <React.Fragment>Current Balance <br/><br/> Choose a recharge amount </React.Fragment>,
      additionalChildren : () => {
        return <div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div>
              {
                this.getSlots({
                  entities : amount, 
                  key : "amount",
                })
              }
          </div>
        </div>
      </div>
      },
      confirmHandler : () => {
        return new Promise((resolve, reject) => {
          console.log("Final selection is " + this.state.currentlySelectedDenomination)
          setTimeout(() => {
            resolve()
          }, 4000);
        });
      }
    }, {
      header: "To sum it up",
      message: "Here's your selection",
      additionalChildren: () => {
        let {amount, time} = this.state;
        let stake = "₹ " + amount.substring(2) / 20;
        let obj = {
          entities : ["Amount", amount, "Time", time, "Daily stake", stake],
          groupSize : 2,
          entityDiv : (props) => {
            return <div>{props.entity}</div>
          }
        }
        return <div>
          {
            this.getSlots(obj)
          }
        </div>
      }
    }];
    return <Tutorial tutorials={arr} redirectTo="home" onClose={() => {window.location.href="/home"}}/>;
  }

  getSlots(obj){
    let {entities, key, groupSize=4} = obj;
    let slots = [];
    let groups = [];
    entities.forEach(entity => {
      groups.push(entity);
      if(groups.length === groupSize){
        slots.push(this.getGroupSlot(groups, obj));
        groups = [];
      }
    });
    slots.push(this.getGroupSlot(groups, obj));
    return slots;
  }

  getGroupSlot(groups, obj){
    let { key = ""} = obj;
    if(groups.length == 0){
      return "";
    }
    let entitySlots = [];
    groups.forEach(entity => {
      let slot = obj.entityDiv ? obj.entityDiv({entity}) : this.generateSlot(entity, key); 
      entitySlots.push(slot);
    });
    return <div style={{
      display: "flex",
      fontSize: "large",
      justifyContent: "space-around",
      marginBottom: "8px"
    }}>
      {entitySlots}
    </div>
  }

  generateSlot(entity, key){
    let isInverted = !(this.state[key] === entity)
    return <Button basic={false} inverted={isInverted} onClick={() => {
      console.log(entity)
      this.setState({[key]: entity});
    }}>
        {entity}
    </Button>;
  }
}