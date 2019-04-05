import styled from "styled-components"

export const BigButton = styled.button`
    color: ${props => props.color ? props.color : '#fff'};
    background-color: ${props => props.bgColor ? props.bgColor : '#6C9F9B'};
    border: none;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-top: 32px;
    margin-right: 30px;
    outline: none;
    text-transform: uppercase;
    text-align: center;
    width: 200px;

    :hover {
        box-shadow: 0px 5px 10px rgba(209, 224, 224, 0.6);
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    color: #000;
    font-weight: bold;
    margin: 0;
`;

export const PinkHighligt = styled.span`
    color: #FEA097;
`;

export const PinkUnderline = styled.span`
    borderBottom: 2px solid #FEA097;
    paddingBottom: 5px;
`;
