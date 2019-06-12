import {connect} from 'react-redux'
import Link from '../Link'

const mapStateToProps = (state,ownProps)=>({
    active: state.visibilityFilter == ownProps.filter
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    onclick: () => dispatch({type:'SET_VISIBILITY_FILTER',filter: ownProps.filter})
})

export default connect(mapStateToProps,mapDispatchToProps)(Link)