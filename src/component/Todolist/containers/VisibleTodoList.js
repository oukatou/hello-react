import {connect} from 'react-redux'
import Todolist from '../Todolist'

function getVisibleTodos(todos,filter){
    switch (filter) {
        case 'SHOW_ALL':
          return todos
        case 'SHOW_COMPLETED':
          return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
          return todos.filter(t => !t.completed)
        default:
          throw new Error('Unknown filter: ' + filter)
      }
}
const mapStateToProps = state=>({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch({type:'TOGGLE_TODO',id})
})

export default connect(mapStateToProps,mapDispatchToProps)(Todolist)

