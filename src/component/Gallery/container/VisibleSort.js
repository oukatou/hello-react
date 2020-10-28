import { connect } from "react-redux";
import Sort from "../component/Sort";

function mapStateToProps(state) {
    return { searchCondition: state.searchCondition }
}

export default connect(mapStateToProps)(Sort)