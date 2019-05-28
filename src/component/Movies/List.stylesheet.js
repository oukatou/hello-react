import ArrowL from '../../assets/image/ThumbArrow-Idle12x22px.png'
import ArrowR from '../../assets/image/ThumbArrowR-Idle12x22px.png'
export default function(props){
    return {
        wrapper:{
            margin: '10px',
            position: 'relative',
            padding: '30px',
            display: 'inline-block',
            '&:hover':{
                '#leftArrow':{
                    display: 'block'
                },
                '#rightArrow':{
                    display: 'block'
                }
            },
            ...props.backgroundColor ? {backgroundColor: 'rgba(104, 83, 183, 0.5)'} : 'none'
        },
        div:{
            display: 'flex',
            flexWrap: 'nowrap',
            overflow: 'hidden',
        },
        leftArrow:{
            display: 'none',
            position: 'absolute',
            left: 0,
            top: '140px',
            background: `url(${ArrowL})`,
            width: '12px',
            height: '22px',
            cursor: 'pointer'
        },
        rightArrow:{
            display: 'none',
            position: 'absolute',
            right: 0,
            top: '140px',
            background: `url(${ArrowR})`,
            width: '12px',
            height: '22px',
            cursor: 'pointer'
        },
        tile:{
            overflow: 'hidden',
            transition: '1s'
        }
    }
}