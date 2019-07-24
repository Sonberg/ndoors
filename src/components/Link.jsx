import React from 'react'
import { withRouter } from 'react-router'

const Link = ({ to, as, component, history, staticContext, ...props }) => {
    const C = as || component || 'a'

    return <C {...props} onClick={() => history.push(to)} />
}

export default withRouter(Link)