import React from 'react'


const styling = { background: 'rgb(255,152,101)', padding: '0.25em .5em', color: 'white', fontSize: 12, borderRadius: '2px', textTransform: 'uppercase' };

export default ({ children }) => (
    <div children={children} style={styling} />
);