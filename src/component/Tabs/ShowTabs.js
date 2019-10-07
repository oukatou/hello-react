import React from 'react'
import Tabs from './Tabs'
import Tab from './Tab'

const showTabs = ()=>{
    return  <div>
                <Tabs>
                 <Tab label="Details" key="details">Details content</Tab>
                 <Tab label="Activities" key="activities">Activities content</Tab>
                 <Tab label="Inspector" key="inspector">Inspector content</Tab>
                </Tabs>
            </div>
}

export default showTabs