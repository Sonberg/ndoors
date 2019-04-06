import styled from "styled-components"

export const BigButton = styled.button`
    color: ${props => props.color ? props.color : '#fff'};
    background-color: ${props => props.bgColor ? props.bgColor : '#6C9F9B'};
    border: none;
    border-radius: 5px;
    font-size: 1rem;
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
    font-size: 2.38rem;
    color: #000;
    font-weight: bold;
    margin: 0;
`;

export const PinkHighligt = styled.span`
    color: #FEA097;
`;

export const PinkUnderline = styled.span`
    border-bottom: 2px solid #FEA097;
    padding-bottom: 5px;
`;

export const SmallPinkButton = styled.button`
    color: #000;
    background-color: #FFF8F7;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    height: 50px;
    margin-top: 32px;
    margin-right: 30px;
    padding: 0 10%;
    outline: none;
    text-align: left;
    width: 90%;
    box-shadow: 0px 3px 5px rgba(88, 88, 88, 0.25);
    
    :visited, :active, :focus {
        color: #000;
        background-color: #e0cfcc !important;
    }
`;
