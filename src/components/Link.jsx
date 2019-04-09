import React from 'react'
import { withRouter } from 'react-router'

const Link = ({ to, as, history, staticContext, ...props }) => {
    const Component = as || 'a'

    return <Component {...props} onClick={() => history.push(to)} />
}

export default withRouter(Link)