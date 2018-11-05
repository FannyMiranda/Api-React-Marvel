import React, { Component } from 'react';
import { Col, Thumbnail, Modal } from 'react-bootstrap';


import './CharacterCard.css'

class CharacterCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal:false
    }
    this.render = this.render.bind(this);
  }
  
  myModal(){
    this.setState({showModal:true})
  }

  hideDetails(){
    this.setState({showModal:false})
  }

  
  render() {

    let character = this.props.character;
    

    return (
      <Col xs={12} sm={6} md={3}>
         <Thumbnail className="text-center" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}>
              <h3 onClick={this.myModal.bind(this)}>{character.name}</h3>
          <Modal show={this.state.showModal} onHide={this.hideDetails.bind(this)} dialogClassName="Character-modal">
              <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
              </Modal.Header>
          <Modal.Body>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="Character-modal-img img-circle "/>
            <div className="Character-modal-desc">
                  <h4>Description</h4>
                  <p>{character.description}</p>
            </div>
          </Modal.Body>
        </Modal>
          </Thumbnail>
        
       
      </Col>
    );
  }
}

export default CharacterCard;
