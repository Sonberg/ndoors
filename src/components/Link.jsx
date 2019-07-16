import React from 'react'
import { withRouter } from 'react-router'

const Link = ({ to, component, history, staticContext, ...props }) => {
    const C = component || 'a'

    return <C {...props} onClick={() => history.push(to)} />
}

export default withRouter(Link)