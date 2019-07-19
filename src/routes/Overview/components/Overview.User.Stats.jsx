import React from 'react'

export default ({ title, value }) => (
    <div>
        <div className="h2" children={value} />
        <small className="text-muted" children={title} />
    </div>
)