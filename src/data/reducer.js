// need to track the last ID used
// the last ID used by the dummy articles is 2
let lastID = 2;
// create a function that returns a new article
const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;

    return {
        id: lastID,
        title: title,
        article: article,
        comments: [],
        tags: [],
    };
};

const addArticle = (state, action) => { 
    // create a new article with a dummy ID
    let newArticle = createArticle(action);

    return {
        ...state,
        articles: {
            ...state.articles,

            // add using the dummy ID
            [newArticle.id]: newArticle,
        },
    };

 };
const editArticle = (state, action) => { 

      let new_state = {
        ...state,
                   articles:{
                    ...state.articles,
                    [action.id]:{
                            ...state.articles[action.id],
                            title:action.title,
                            article:action.article,
                            tags:action.tags,
                                    
                    },
                   },
               };

    return new_state;



 };
 const deleteArticle = (state,action) =>{
    let { ...updated } = state.articles;
    delete updated[action.id];

    return {
        ...state,
        articles: updated,
    };
   
 }

 const setTitles = (state, { titles }) => {
    return {
        ...state,
        titles: titles,
    };
};

const reducer = (state, action) =>{
    switch(action.type){
    	case "addArticle":return addArticle(state, action);
        case "deleteArticle":return deleteArticle(state, action);
        case "editArticle":return editArticle(state, action);
        case "setTitles": return setTitles(state, action);
        default: return state;
    }
}

export default reducer;