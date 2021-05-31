import React from 'react'
import { Loader, Header, Icon, Modal, Dimmer } from 'semantic-ui-react'

export default class Tutorial extends React.Component{
  constructor(props){
    super(props);
    let tutorials = [{
      header : "Waazup!",
      message : "Let's get started!",
    },{
      header : "This is how it works!",
      message : "You start by setting up your account, paying some money and configuring how much money should be deducted per day",
    },{
      header : "This is how it works", 
      message : "Each morning you either perform some tasks or some money will get dedcuted temporarily",
    },{
      header : "This is how it works",
      message : "There's never a permanent loss of money. You always have a chance of winning it back somehow",
    },{
      header : "Easy Peasy?",
      message : "",
    },{
      header : "Ready!",
      message : "",
    },{
      header : "Set!",
      message : "",
    },{
      header : "Go!",
      message : "",
    }];

    this.state = {
      tutorials,
      pointer : this.props.pointer || 0,
    }

  }

  render(){
    let isOpen = false;
    if(this.state.pointer >= this.state.tutorials.length){
      if(this.props.redirectTo){
        window.location.href = this.props.redirectTo;
        return <Dimmer active>
          <Loader />
        </Dimmer>;
      }
        
      isOpen = false;
    }
    return (
      <Modal
        basic
        open={isOpen}
        size='large'
        closeIcon={false}
        closeOnDimmerClick={true}
        closeOnDocumentClick={false}
        onClose={(x)=>{console.log(x)}}
        dimmer="blurring"
      >
        <Header icon style={{fontSize: "3em"}}>
          {(this.state.tutorials[this.state.pointer] || {header : ""}).header}
        </Header>
        <Modal.Content style={{fontSize: "2em"}}>
          <p style={{textAlign: "center"}}>
          {(this.state.tutorials[this.state.pointer] || {message : ""}).message}
          </p>
          <p style={{textAlign: "center"}}>
            {/* <Button icon > */}
              <Icon name="arrow alternate circle right" size="big" onClick={() => {
              this.setState({pointer : this.state.pointer + 1})
              }}/>
            {/* </Button> */}
          </p>
        </Modal.Content>
      </Modal>
    )
  }
}
