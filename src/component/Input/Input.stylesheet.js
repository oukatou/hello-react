export default function stylesheet(props){
    return {
        height:'20px',
        lineHeight:'30px',
        padding:'3px',
        margin: '0 10px',
        border:'1px solid rgba(128,128,128,0.2)',
        borderRadius: '1px', 
        fontSize:'1em',
        outline:'none',
        appearance: 'none',
        ...props.hasHover ? {
            boxShadow: '0 0 2px #afce31'
        } : {},
        ...props.hasFocus ? {
            boxShadow: '0 0 0 1px #94b317'
        } : {}
    }
}