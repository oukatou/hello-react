function getRulseByTransitionStatus(transitionStatus){
    if(transitionStatus == 'exiting'){
        return {opacity: 0, height: 0};
    }
    if(transitionStatus =='exited'){
        return {display: "none"};
    }
    return {};
}
export default function stylesheet(props){
    const {hasHover,transitionStatus,transitionState,showCount} = props;
    const isExiting = transitionState === 'exiting' || transitionState === 'exited'
    const isHidden = transitionState === 'hidden';
    return {
        indicator:{
            position: 'relative',
            width: '20px',
            height: '20px',
            margin: '30px auto',
            cursor: 'pointer',
            svg: {
                fill: '#808080'
            },
            '&:hover': {
                svg:{
                    fill: '#3c3c3c'
            }}
        },
        count:{
            position: 'absolute',
            top: '50%',
            left: '55%',
            height: '13px',
            borderRadius: '4px',
            color: '#fff',
            padding: '1px 2px',
            fontSize: '11px',
            backgroundColor: '#0696d7',
            border: '1px solid #fff',
            display: showCount ? 'block' : 'none'
        },
        caret:{
            position: 'absolute',
            top: '-12px'
        },
        caretBorder:{
            fill: 'transparent'
        },
        caretBody:{
            fill: '#fff'
        },
        panelContainer:{
            position: 'relative',
            display: isHidden ? 'none' : 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            transitionDuration: '400ms',
            transitionProperty: 'opacity,transform',
            transitionTimingFunction: 'cubic-bezier(0.77,0,0.265,2)',
            ...isExiting ? {opacity:0} : {opacity:1},
            transform: isExiting ? 'translateY(-10px)' : 'none',
        },
        header:{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(60,60,60,0.25)',
            position: 'relative'
        },
        panel:{
            width: '300px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            borderRadius: '4px',
            boxShadow: '0 0 16px rgba(0,0,0,0.25)',
        },
        notification:{
            margin: '12px'
        },
        clear:{
            cursor: 'pointer',
            fontSize: '8px',
            color: 'gray',
            padding: '0 4px',
            border: '1px solid rgba(60,60,60,0.25)',
            borderRadius: '2px',
            '&:hover':{
                backgroundColor: '#d9d9d9',
                color: '#fff'
            },
            position: 'absolute',
            top: '50%',
            right: '24px',
            transform: 'translateY(-50%)'

        },
        container:{
            position: 'relative',
            borderBottom: '1px solid rgba(60,60,60,0.25)',
            borderLeft: '3px solid #0696d7',
            overflow: 'hidden',
            transitionProperty: 'opacity, height',
            transitionDuration: '400ms',
            ...hasHover ? {backgroundColor: '#d9d9d9'} : {},
            ...getRulseByTransitionStatus(transitionStatus),
            "&:last-child": {
              borderBottom: `none`}
        },
        close:{
            textAlign: 'center',
            fontSize: '25px',
            cursor: 'pointer',
            position: 'absolute',
            top: '0',
            right: '2px',
            display: 'none',
            fontWeight: '300', 
            '&:hover':{
               fontWeight: '500' 
            },
            ...hasHover ? {display: 'block'} : {}
        }
        
    }
}