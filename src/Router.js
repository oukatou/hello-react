import React from 'react'
import {css} from 'emotion'
import {BrowserRouter as Router,Switch, Route, NavLink, Redirect} from 'react-router-dom'
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
import Gallery from './component/Gallery/gallery'

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
  const activeClass = {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontWeight: '500',
  }
  const navs = ['reactlogo','topics','todolist','movies','search','reddit','tabs','notification','table','modal','gallery'];
  return (
    <header className={css(header)}>
      {navs.map(nav => <NavLink 
                         replace
                         key={nav} 
                         className={css(astyle)} 
                         activeClassName={css(activeClass)} 
                         to={`/${nav}`}
                       >
                         {nav}
                      </NavLink>)
      }
    </header>
  )
}
function AppRouter() {
        return(
          <Router>
            <Route path='/' component={Nav}/>
            <Switch>
              <Route exact strict path='/reactlogo' component={ReactLogo}/>
              <Route path='/topics' component={Topics}/>
              <Route path='/movies' component={Movies}/>
              <Route path='/todolist' component={Todolist}/>
              <Route path='/search' component={Search}/>
              <Route path='/reddit' component={Reddit}/>
              <Route path='/tabs' component={Tabs}/>
              <Route path='/notification' component={Notification}/>
              <Route path='/table' component={Table}/>
              <Route path='/modal' component={Modal}/>
              <Route path='/gallery' component={Gallery}/>
              <Route path='/:s' render={(p)=><div>{p.location.pathname} is not exist</div> }/>
              <Redirect to='/login' />
            </Switch>
          </Router>
        )
}

export default AppRouter