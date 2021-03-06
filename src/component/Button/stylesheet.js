export default function stylesheet(props){
    return {
        display: 'inline-block',
        lineHeight:'18px',
        fontSize:'0.8em',
        padding: '4px 10px',
        verticalAlign: 'middle',
        border: '1px solid transparent',
        borderRadius: '3px',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '#afce31',
        color: '#fff',
        width: props.width ? props.width : '100%',
        marginRight: '10px',
        ...props.disabled ? {
            opacity:0.7,
            cursor: 'default'} : {},
        ...props.hasHover ? {
            boxShadow: '0 0 2px #afce31'
        } : {},
        ...props.isPressed ? {
            boxShadow: '0 0 0 2px #94b317'
        } : {},
    }
}