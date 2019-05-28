import React from 'react'

function WrapperPresenter(props){
    const style={
        position: 'relative',
        width: '100%'
    }
    return (
        <div style={style}>{props.children}</div>
    )
}

export default WrapperPresenter