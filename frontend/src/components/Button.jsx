import React from 'react'

const styles = {
    backgroundColor: 'rgb(108, 159, 155)',
    boxShadow: 'none',
    borderRadius: 8
}

export default ({ as, style, ...props }) => {
    const Tag = as || 'button'

    return (
        <Tag className="waves-effect waves-light btn-large" style={{ ...styles, ...style }} {...props} />
    )
}