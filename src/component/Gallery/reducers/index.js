import { combineReducers } from 'redux'
import projects from './projects'
import searchCondition from './searchCondition'

export default combineReducers({ projects, searchCondition })