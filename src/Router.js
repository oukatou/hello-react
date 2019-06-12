import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import HomePage from './component/Home'
import ReactLogo from './component/ReactLogo'
import Todolist from './component/Todolist/TodoApp'
import Topics from './component/Topics'
import Movies from './component/Movies/Movies'
import Search from './component/Search/Search'

const Nav = ()=>{
  const ulStyle={
    display: 'flex',
    listStyle: 'none',
    backgroundColor: 'gray',
    height: '50px',
    margin: 0
  }
  const listStyle={
      lineHeight: '50px',
      padding: '0 8px'
  }
  const astyle={
      textDecoration: 'none'
  }

  return (
  <ul style={ulStyle}>
    <li style={listStyle}><Link style={astyle} to='/home'>home</Link></li>
    <li style={listStyle}><Link style={astyle} to='/reactlogo'>reactLogo</Link></li>
    <li style={listStyle}><Link style={astyle} to='/topics'>topics</Link></li>
    <li style={listStyle}><Link style={astyle} to='/todolist'>todolist</Link></li>
    <li style={listStyle}><Link style={astyle} to='/movies'>movies</Link></li>
    <li style={listStyle}><Link style={astyle} to='/search'>search</Link></li>
  </ul>
  )
}
function AppRouter() {
        
        return(
          <Router>
            <Route path='/' component={Nav}/>
            <Route path='/home' component={HomePage}/>
            <Route path='/reactlogo' component={ReactLogo}/>
            <Route path='/topics' component={Topics}/>
            <Route path='/movies' component={Movies}/>
            <Route path='/todolist' component={Todolist}/>
            <Route path='/search' component={Search}/>
          </Router>
        )
}

export default AppRouter