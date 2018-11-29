// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Edit from "../../components/Articles/Edit";
import history from "../../history";
import { editArticle } from "../../data/actions/state";


// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = (state ,{id}) => {
   let article = state.articles[id];
   let fields = (article)?[
    		{ name: "title", label: "Title", value: article.title },
    		{ name: "article", label: "Article", value: article.article },
    		{ name: "tags", label: "Tags", value: article.tags },
		]:null;

    
    return {
        // convert the articles object into an array
       fields:fields,

    };
};

const mapDispatchToProps = (dispatch,{id}) => {
    return {
        // onSubmit is a function which dispatches an action "addArticle"
        handleSubmit: data => {
          console.log(data);
          dispatch(editArticle(id, data));
          history.push("/");
        },
    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps,mapDispatchToProps)(Edit);