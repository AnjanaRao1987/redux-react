import axios from "../../axios";
// import the setTitles action
import { setTitles } from "./state";

export const getTitles = () => dispatch => {
    axios.get("/articles").then(({ data }) => {
        // for now, just log the response data
        console.log(data);
        const articles = data.data;

        // dispatch the setTitles action, passing along the articles List
        dispatch(setTitles(articles));
    });
};