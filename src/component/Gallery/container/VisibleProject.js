import { connect } from 'react-redux'
import ProjectPresenter from '../component/Showrojects'

function mapStateToProps(state) {
    return { projects: state.projects }
}

export default connect(mapStateToProps)(ProjectPresenter)

