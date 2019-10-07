export default function stylesheet(active, label){
    return{
        li:{
            borderBottom:'1px solid rgba(128,128,128,0.1)',
            ...active ? {borderBottom: '3px solid #33e0e4', fontWeight: 800} : {},
            cursor: 'pointer',
            padding: '0 10px',
            textAlign: 'center'
        },
        tabLabel:{
            '&:before':{
                display: 'block',
                content: `'${label}'`,
                fontWeight: 800,
                height: '0',
                overflow: 'hidden'
            }
        }
    }
}