export default function(){
    return {
        img:{
            margin: '10px',
            position: 'relative',
            cursor: 'pointer',
            boxShadow: '0 0 4px #695f5f',
            '&:hover':{
                transform: 'scale(1.065)',
                transition: '0.5s',
                '#hover':{
                    opacity: 1
                }
            }
        },
        name:{
            display: 'block',
            padding: '10px',
            fontSize: '1rem',
            color: 'gray',
            textAlign: 'center',
            fontWeight: '500'
        },
        hover:{
            opacity: 0,
            position: 'absolute',
            top: '0',
            left: '0',
            right: "0",
            bottom: '0',
            background: 'rgba(255,255,255,0.2)',
            transition: '0.5s ease-in'
        },
        popup:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 10
        }

    }
}