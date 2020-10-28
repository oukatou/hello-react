import { connect } from "react-redux";
import Searchbar from "../component/Searchbar";

function mapStateToProps(state) {
    let total = state.projects.items ? state.projects.items.found : 0;
    return { searchCondition: state.searchCondition, total }
}

export default connect(mapStateToProps)(Searchbar)