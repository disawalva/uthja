import React from 'react'
import { Loader, Header, Icon, Modal, Dimmer } from 'semantic-ui-react'

export default class Tutorial extends React.Component{
  constructor(props){
    super(props);
    let tutorials = this.props.tutorials || [{
      header : "Waazup!",
      message : "Let's get started!",
    },{
      header : "This is how it works!",
      message : "You start by setting up your account, paying some money and configuring how much money should be deducted per day",
    },{
      header : "And then...", 
      message : "Each morning you either perform some tasks or temporarily loose some money",
    },{
      header : "But yeah!",
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
      showNext: true,
      isOpen : true,
    }

  }

  render(){
    if(this.state.pointer >= this.state.tutorials.length){
      if(this.props.redirectTo){
        window.location.href = this.props.redirectTo;
        return <Dimmer active>
          <Loader />
        </Dimmer>;
      }
      
      return;
    }

    let {tutorials, pointer} = this.state;
    let modalObj = tutorials[pointer];
    let additionalChildren = modalObj.additionalChildren || "";
    if(typeof additionalChildren === "function"){
      additionalChildren = additionalChildren();
    }
    return (
      <Modal
        basic
        open={this.state.isOpen}
        size='large'
        closeIcon={false}
        closeOnDimmerClick={true}
        closeOnDocumentClick={false}
        onClose={(x)=>{console.log(x)}}
        dimmer="blurring"
      >
        <Header icon style={{fontSize: "3em"}}>
          {(modalObj || {header : ""}).header}
        </Header>
        <Modal.Content style={{fontSize: "2em"}}>
          <p style={{textAlign: "center"}}>
          {(modalObj || {message : ""}).message}
          </p>
          {additionalChildren}
          <p style={{textAlign: "center"}}>
              {this.state.showNext ? <Icon name="arrow alternate circle right" size="big" onClick={() => {
                if(modalObj.confirmHandler){
                  this.showNextLoader();
                  modalObj.confirmHandler()
                  .then(() => {
                    this.showNextLoader(false, () => {
                      this.incrementPointer();
                    })
                  })
                }
                else{
                  this.incrementPointer();
                }
              }}/> : <Loader active inline='centered'/>}
          </p>
          <div style={{fontSize:"small", textAlign: "center", textDecoration: "underline"}} onClick={() => {
            if(this.props.onClose){
              this.props.onClose()
            }
            else{
              this.setState({isOpen : false})
            }
          }}>Close</div>
        </Modal.Content>
      </Modal>
    )
  }

  incrementPointer(){
    this.setState({pointer : this.state.pointer + 1});
  }
  
  showNextLoader(val = true, callback){
    this.setState({showNext : !val}, () => {
      if(typeof callback === 'function'){
        callback();
      }
    });
  }
}
