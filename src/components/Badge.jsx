import React from 'react'


export default ({ value, children, onClick, hideChildren, className, bg = "pink-light" }) => {
    const hasChildren = hideChildren ? false : children != null
    return (
        <small onClick={hasChildren ? null : onClick} className={`d-flex justify-content-between align-items-center py-1 pr-${hasChildren ? '1' : '3'} pl-3 rounded bg-${bg} font-weight-bold ${className}`}>
            <div className="my-1 text-nowrap">
                {value}
            </div>
            {hasChildren ? (<div onClick={onClick} className="bg-pink py-1 px-2 rounded ml-2 cursor-pointer btn-opacity" children={children} />) : null}
        </small>
    );
}