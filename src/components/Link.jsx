import React from 'react'
import { withRouter } from 'react-router'

const Link = ({ to, as, component, history, staticContext, className = '', ...props }) => {
    const C = as || component || 'a'

    return <C {...props} onClick={() => history.push(to)} className={`cursor-pointer ${className}`} />
}

export default withRouter(Link)