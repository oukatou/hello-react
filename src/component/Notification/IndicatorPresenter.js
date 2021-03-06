import React from 'react'
import stylesheet from './stylesheet'
import { css } from 'emotion';

export default function IndicatorPrenseter({onClick,unreadCount,showCount,indicatorRef}){
    const styles = stylesheet({showCount})
    return <div className={css(styles.indicator)} onClick={onClick} ref={indicatorRef}>
            <div className={css(styles.count)}>{unreadCount}</div>
            <svg version="1.1" id="_x32_4x24_OUTLINED" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" width="24px" height="24px" viewBox="4651 1106 24 24" enableBackground="new 4651 1106 24 24" xmlSpace="preserve">
                <path d="M4669.931,1120.406l-0.112-0.05c-0.803-0.358-0.803-0.358-0.795-1.51l0.002-0.775c0.008-4.383-1.382-7.12-4.023-7.952V1109
                c0-0.495-0.505-1-1-1h-2c-0.495,0-1,0.505-1,1v1.119c-2.653,0.833-4.051,3.571-4.047,7.952l0.002,0.778
                c0.008,1.148,0.008,1.148-0.794,1.507l-0.111,0.05c-1.961,0.878-2.049,3.592-2.052,3.7c-0.009,0.248,0.087,0.49,0.253,0.656
                c0.226,0.237,0.513,0.237,0.651,0.237H4660c0,1.654,1.346,3,3,3s3-1.346,3-3h5.078c0.137,0,0.42,0,0.647-0.233
                c0.167-0.172,0.261-0.409,0.256-0.669C4671.962,1123.626,4671.77,1121.229,4669.931,1120.406z M4663,1127c-1.103,0-2-0.897-2-2h4
                C4665,1126.103,4664.102,1127,4663,1127z M4655.009,1124c0.04-0.491,0.266-2.15,1.451-2.682l0.11-0.049
                c1.171-0.522,1.399-0.77,1.387-2.425l-0.002-0.774c-0.002-2.838,0.631-6.37,3.66-7.084l0.387-0.091V1109h2v1.896l0.386,0.091
                c3.016,0.71,3.643,4.244,3.638,7.083l-0.002,0.773c-0.011,1.657,0.218,1.904,1.389,2.427l0.11,0.049
                c1.225,0.549,1.424,2.291,1.477,2.682H4655.009z"/>
            </svg>
    </div>
}