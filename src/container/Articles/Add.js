
import { connect } from "react-redux";
import Add from "../../components/Articles/Add";
import { addArticle } from "../../data/action";
import history from "../../history";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = dispatch => {
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleSubmit: data => {
        	dispatch(addArticle(data));
        	history.push("/");
        },
    };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Add);