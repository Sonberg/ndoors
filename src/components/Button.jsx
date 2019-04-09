import React from 'react'


export default ({ as, style, invert, ...props }) => {
    const Tag = as || 'button'

    return (
        <Tag className="waves-effect waves-light btn-large " style={{
            ...style, ...{
                backgroundColor: invert ? 'white' : 'rgb(108, 159, 155)',
                color: invert ? 'rgb(108, 159, 155)' : 'white',
                boxShadow: 'none',
                borderRadius: 8
            }
        }} {...props} />
    )
}