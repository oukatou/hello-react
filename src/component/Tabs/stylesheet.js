export default function stylesheet(active, label, hasFocus){
    return{
        li:{
            borderBottom:'1px solid rgba(128,128,128,0.1)',
            "&:hover": active ? null : {
                borderBottom:"2px solid #ccd",
                transition: '0.3s'
            },
            ...active ? {borderBottom: '2px solid #0696d7', fontWeight: 800} : {},
            cursor: 'pointer',
            margin: '0 10px',
            textAlign: 'center',
            outline: 0,
            "&:after":{
                position: 'relative',
                top: '5px',
                backgroundColor: 'rgba(6,150,215)',
                display: 'block',
                content: '""',
                height: '3px',
                padding: '0 10px',
                opacity: active && hasFocus ? '.41' : '0',
                transition: '0.3s'

            }
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