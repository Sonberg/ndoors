import React from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router'

export default withRouter(({ as, style, history, to, invert, ...props }) => {
    const onNavigate = () => history.push(to);

    return (
        <Button as={as} onClick={onNavigate} {...props} />
    )
});