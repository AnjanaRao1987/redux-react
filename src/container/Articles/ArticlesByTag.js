// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Articles from "../../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = ( state ,{tag}) => {
	// let articles = Object.values(state.articles)
	// let tags = tag.split(',');
	// let article_val = [];


 //    articles.forEach(article => {
 //    	let found = tags.some(r=> article.tags.includes(r));
 //    	found?article_val.push(article):"";
 //                })
    




 //    return {
 //        articles: article_val,
 //    };
};

// connect up mapStateToProps with the Articles component
// Articles' props are now controlled by this file
export default connect(mapStateToProps)(Articles);