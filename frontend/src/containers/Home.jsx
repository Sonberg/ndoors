import React, { Component, Fragment } from 'react'
import Navigation from '../components/Navigation'
import Box from '../components/Box'
import AutoComplete from '../components/AutoComplete';
import styled from "styled-components"

const Button = styled.button`
    width: 176px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    background-color: blue;
    font-size: 16px;
    text-align: center;
    color: #fff;
    border: none;
`;

const ButtonContainer = styled.div`
  display: 'inline-block';
  height: '3rem';
  justify-content: 'space-between';
`;

const Container = styled.div`
  height: '10rem';
  display: 'flex';
  width: '10rem';
`;

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <Fragment>
        <Navigation />
        <Container>
          <h1> nDoors </h1>
          <p> welcome </p>
          <ButtonContainer>
            <Button> Add Reference </Button>
            <Button> Logga in </Button>
          </ButtonContainer>
        </Container>
      </Fragment >
    )
  }
}
