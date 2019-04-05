import React from 'react'
import styled from 'styled-components'

export const ColoredRow = (props) => {
    let dynamicWidth = window.innerWidth;

    const RowStyle = styled.div`
        background-color: #${props.bgColor};
        min-height: 60vh;
        width: 100%;
        padding-bottom: 100px;
        margin: 0;
        position: relative;

        &::before {
            display: block;
            content: url("data:image/svg+xml;charset=UTF-8, 
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100' width='${dynamicWidth}'>
                <polygon points='0,0 0,100 ${dynamicWidth},100' fill='%23${props.bgColor}' />
            </svg>
            ");
            width: 100vw;
            position: relative;
            top: -100px;
            transform: ${props.flip ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        }
    `;

    return (
        <RowStyle>
            {props.children}
        </RowStyle >
    )
}
