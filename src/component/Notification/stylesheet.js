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
    const {hasHover,transitionStatus,transitionState} = props;
    const isExiting = transitionState === 'exiting' || transitionState === 'exited'
    const isHidden = transitionState === 'hidden';
    return {
        indicator:{
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
        header:{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(60,60,60,0.25)',
        },
        panel:{
            display: isHidden ? 'none' : 'block', 
            maxWidth: '300px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            borderRadius: '4px',
            boxShadow: '0 0 16px rgba(0,0,0,0.25)',
            margin: '0 auto',
            transitionDuration: '400ms',
            transitionProperty: 'opacity,transform',
            transitionTimingFunction: 'cubic-bezier(0.77,0,0.265,2)',
            ...isExiting ? {opacity:0} : {opacity:1},
            transform: isExiting ? 'translateY(-10px)' : 'none'
        },
        notification:{
            margin: '12px'
        },
        container:{
            position: 'relative',
            borderBottom: '1px solid rgba(60,60,60,0.25)',
            borderLeft: '3px solid #0696d7',
            overflow: 'hidden',
            transitionProperty: 'opacity, height',
            transitionDuration: '1s',
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