import { connect } from "react-redux";
import { deleteArticle } from "../../data/action";
import history from "../../history";
import Actions from "../../components/Articles/Actions";

// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component
const mapDispatchToProps = (dispatch,{article}) => {
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleDelete: () => {
        	dispatch(deleteArticle(article.id));
        	history.push("/");;
        },
    };
};

// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Actions);