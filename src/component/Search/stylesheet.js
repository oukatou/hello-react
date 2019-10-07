export default function stylesheet(exist){
    return {
        items:{
            display:'flex',
            flexWrap:'wrap',
            margin: '0 90px'
        },
        item:{
            position: 'relative',
            transition: '700ms',
            padding: '8px',
            ...exist ? { width:'182px',opacity:1,transform:'scale(1)'}
                     : { padding:0,width:0, opacity:0, transform:'scale(0)'} 
        },
        header:{
            margin: '30px 90px',
            width: '30%',
            display: 'flex'
        },
        mask:{
            position: 'absolute',
            top: '0',
            left: '0',
            right: "0",
            bottom: '0',
            background: 'rgba(255,255,255,0.2)',
            transition: '500ms',
            transitionDelay: '200ms',
            cursor: 'pointer',
        },
        img:{
            boxShadow: '0 0 4px #695f5f',
        },
        searchItems:{
            margin: '10px',
            position: 'absolute',
            zIndex: 1
        }

    }
}