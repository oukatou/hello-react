import {keyframes} from 'emotion'

const closing = keyframes`
                0% {top: 100px}
                100% {top: 65px}
                `
const opening = keyframes`
                0% {top: 65px}
                100% {top: 100px}
                `              
function stylesheet(props){
    const {open} = props
    return {
        overlay: open ? {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            zIndex: 1040
        } : {},
        content:{
            borderRadius: '4px',
            backgroundColor: 'rgb(255,255,255)',
            opacity: open ? 1 : 0,
            width: '500px',
            '@media (max-width: 760px)':{
                width: '300px'
            },
            position: 'absolute',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            margin: '0 auto',
            transition: 'opacity ease 0.3s',
            animation: open ? `${opening} 0.4s` : `${closing} 0.4s`,
            outline: 0,
            boxShadow: '0 1px 9px rgba(0,0,0,.5)'
        },
        header:{
            borderBottom: '1px solid #ccc',
            padding : '10px',
            fontSize: '20px',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between'
        },
        body:{
            padding: '20px',
            overflow: 'auto',
            maxHeight: '250px',
        },
        close:{
            cursor: 'pointer',
            fontWeight: '200',
            lineHeight: '17px',
            fontSize: '35px',
            color: 'rgba(0,0,0,0.45)',
            '&:hover':{
                color: 'rgba(0,0,0,0.85)'
            }
        },
        mask: {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'rgba(0,0,0,0.4)',
            opacity: open ? 1 : 0,
            transition: 'all ease 0.2s',
            pointerEvents: open ? 'visible' : 'none',
            transitionDelay: open ? '0s' : '0.2s',
            zIndex: 1030
        },
    }
}

export default stylesheet