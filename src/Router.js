import React from 'react'
import {css} from 'emotion'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ReactLogo from './component/ReactLogo'
import Todolist from './component/Todolist/TodoApp'
import Topics from './component/Topics'
import Movies from './component/Movies/Movies'
import Search from './component/Search/Search'
import Reddit from './component/Reddit/RedditApp'
import Tabs from './component/Tabs/ShowTabs'
import Notification from './component/Notification/ShowNotification'
import Table from './component/Table/Table'
import Modal from './component/Modal/ShowModal'

const Nav = ()=>{
  const header={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    width: '100vw'
  }
  const astyle={
    padding: '8px',
    border: '1px solid #ccc',
    textDecoration: 'none',
    color: 'white',
    "&:hover":{
      backgroundColor: 'rgba(0,0,0,.7)',
      fontWeight: '500',
      boxShadow: '0 4px 8px #ccc'
    },
    transition: '.3s'
  }
  return (
    <header className={css(header)}>
      <Link className={css(astyle)} to='/reactlogo'>reactLogo</Link>
      <Link className={css(astyle)} to='/topics'>topics</Link>
      <Link className={css(astyle)} to='/todolist'>todolist</Link>
      <Link className={css(astyle)} to='/movies'>movies</Link>
      <Link className={css(astyle)} to='/search'>search</Link>
      <Link className={css(astyle)} to='/reddit'>reddit</Link>
      <Link className={css(astyle)} to='/tabs'>tabs</Link>
      <Link className={css(astyle)} to='/notification'>notification</Link>
      <Link className={css(astyle)} to='/table'>table</Link>
      <Link className={css(astyle)} to='/modal'>modal</Link>
    </header>
  )
}
function AppRouter() {
        return(
          <Router>
            <Route path='/' component={Nav}/>
            <Route path='/reactlogo' component={ReactLogo}/>
            <Route path='/topics' component={Topics}/>
            <Route path='/movies' component={Movies}/>
            <Route path='/todolist' component={Todolist}/>
            <Route path='/search' component={Search}/>
            <Route path='/reddit' component={Reddit}/>
            <Route path='/tabs' component={Tabs}/>
            <Route path='/notification' component={Notification}/>
            <Route path='/table' component={Table}/>
            <Route path='/modal' component={Modal}/>
          </Router>
        )
}

export default AppRouter