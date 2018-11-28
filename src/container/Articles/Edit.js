// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Edit from "../../components/Articles/Edit";


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

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Edit);