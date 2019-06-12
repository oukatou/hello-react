import React from 'react';
import Button from '../Button/Button'

export default function Link({active, onclick, children}){
    return (
        <div style={{
            display: 'inline-block',
            marginLeft: '4px'
        }}>
        <Button 
            disabled={active}
            onClick={onclick}
            title={children}
            width='80px'
        />
        </div>
    )
}    