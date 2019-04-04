import React, { Component, Fragment } from 'react'
import Navigation from '../components/Navigation'
import styled from "styled-components"

const Title = styled.h1`
    font-size: 70px;
    color: #6C9F9B;
    font-weight: bold;
`;

const Button = styled.button`
    color: #fff;
    background-color: #6C9F9B;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    height: 80px;
    margin: 20px;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    transition: background-color 0.5s ease;
    width: 200px;

    :focus {
        outline: none;
    }

    :hover {
        background-color: #4a7a76;
    }
`;

const ButtonContainer = styled.div`
    display: inline-block;
    height: 3rem;
    justify-content: space-between;
`;

const Box = styled.div`
    width: 600px;
    height: 350px;
    top: -10%;
    margin: auto;
    position: relative;
    text-align: center;
    padding: 30px;
`;

const BodyWrapper = styled.section`
    height: 100%;
    margin: auto;
    display: flex;
`;

const SubTitle = styled.p`
    font-weight: bold;
    font-size: 30px;
    padding: 10px 0;
    color: #6C9F9B;
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
                <BodyWrapper>
                    <Box>
                        <Title> nDoors </Title>
                        <SubTitle> welcome </SubTitle>
                        <ButtonContainer>
                            <Button> Add Reference </Button>
                            <Button> Logga in </Button>
                        </ButtonContainer>
                    </Box>
                </BodyWrapper>
            </Fragment >
        )
    }
}
