import {combineReducers} from 'redux'
import todos from '../reducers/todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({todos,visibilityFilter})