// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Article from "../../components/Articles/Article";

import { getPost } from "../../data/actions/api";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component

const mapStateToProps = (state, { id }) => {
	console.log("article container");
	console.log(state.articles[id]);
	console.log(id);
    return {
        article: state.articles[id],
    };
};
const mapDispatchToProps = (dispatch,{id}) => {
    return {
         onLoad: () => dispatch(getPost(id)),
    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps, mapDispatchToProps)(Article);