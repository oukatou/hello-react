import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Item from '../../Search/Item'
import stylesheet from '../../Search/stylesheet'
import { css } from 'emotion'
import { requestProjects } from '../action/getProjects'
import { Spin, Space } from 'antd';
import './bounce.scss'
//use hook
function Projects(props) {
    useEffect(() => {
        props.dispatch(requestProjects({
            sort: 'popularity'
        }))
    }, [])
    const styles = stylesheet()
    let { projects } = props;
    return (
        <div>
            <div className={css(styles.items)}>
                {projects.isFetching &&
                    <div className="bounce-spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                }
                {!projects.isFetching && projects.items && projects.items.hit.length == 0 && 'Empty'}
                {!projects.isFetching && projects.items && projects.items.hit.length > 0 && projects.items.hit.map((item) => {
                    let projectInfo = item.fields;
                    return (
                        <Item key={item.id} pic_url={projectInfo.cover_url} movieName={projectInfo.title} filter={''} />
                    )
                })}
            </div>
        </div>
    )
}
//use class
class Tiles extends Component {
    constructor(props) {
        super(props)
    }
    state = { items: [] }
    static propTypes = {
        filter: PropTypes.string
    }
    componentDidMount() {
        fetch('https://gallery.autodesk.com/projects/search?profileName=gallery&query=&sort=popularity&page=0&page_size=20&facetQuery=')
            .then(data => data.json())
            .then(data => {
                this.setState({ items: data.hits.hit })
            })
        this.setState({ items: [] })
    }
    render() {
        const styles = stylesheet()
        return (
            <ul className={css(styles.items)}>
                {this.state.items.map((item) => {
                    let project = item.fields;
                    return (
                        <Item key={item.id} pic_url={project.cover_url} movieName={project.title} filter={''} />
                    )
                })}
            </ul>
        )
    }
}

export default Projects