import React, { useState } from 'react'
import { requestProjects } from '../action/getProjects'
import { Select } from 'antd';

export default function Sort(props) {
    let { dispatch, searchCondition } = props;
    let [selected, setSelected] = useState('popularity')
    let handleSelect = value => {
        setSelected(value)
        dispatch(requestProjects({ ...searchCondition, sort: value }))
    }
    const { Option } = Select
    return (
        <Select defaultValue={selected} style={{ width: 180, float: 'left' }} onChange={handleSelect}>
            <Option value="popularity">popular</Option>
            <Option value="likes_count">likes</Option>
            <Option value="view_count">viewed</Option>
            <Option value="comments_count">commented</Option>
        </Select>
    )
}