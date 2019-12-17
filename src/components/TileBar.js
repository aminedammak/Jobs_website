import React from 'react'

export default function TileBar(props) {
    return (
        <div id="titlebar" className="single">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
