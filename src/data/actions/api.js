import axios from "../../axios";
import history from "../../history";
// import the setTitles action
import { setTitles } from "./state";
import { addArticle } from "./state";
import { setPost } from "./state";

export const getTitles = () => dispatch => {
    axios.get("/articles").then(({ data }) => {
        // for now, just log the response data
        console.log(data);
        const articles = data.data;

        // dispatch the setTitles action, passing along the articles List
        dispatch(setTitles(articles));

    });
};


export const addPost = ({ title, article }) => dispatch =>{
	axios.post("/articles",{
		"title":title,
		"article":article,
	}).then(({data})=>{
		console.log("added");
		const articles = data.data;
		dispatch(addArticle(articles));
		history.push("/");
	});
}

export const getPost = (id) => dispatch =>{
	    axios.get("/articles/"+id).then(({ data }) => {
        // for now, just log the response data
        console.log("api get"+data.data);
        const article = data.data;
        console.log(article);

        // dispatch the setTitles action, passing along the articles List
        dispatch(setPost(article));

    });
}