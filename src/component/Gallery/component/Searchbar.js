import React, { useState } from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { requestProjects } from '../action/getProjects'
export default function Searchbar(props) {
    const { dispatch, searchCondition, total } = props;
    let [query, setQuery] = useState(null);
    let handleChange = e => setQuery(e.target.value);
    let handleClick = (query) => {
        dispatch(requestProjects({ ...searchCondition, query }))
        //setQuery('')
    }
    return (
        <div style={{ width: '80%', float: 'left' }}>
            <Input value={query} onChange={handleChange} style={{ width: '30%' }} />
            <Button onClick={() => handleClick(query)} style={{ width: '10%' }} title="Search" />
            <label>{searchCondition.query}    </label>
            <label>{searchCondition.sort}     </label>
            <label>total: {total}</label>
        </div>
    )
}


