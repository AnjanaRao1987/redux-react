

export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};

export const editArticle = (id,{title, article ,tags}) => {
    return {
        type: "editArticle",
        title: title,
        article: article,
        tags: tags,
        id:id,
    };
};

export const deleteArticle = ( id ) => {
    return {
        type: "deleteArticle",
        id: id,
    };
};

export const setTitles = titles => {
console.log(titles);
    return {
        type: "setTitles",
        titles: titles,
    };
};

export const setPost = ({title, article ,tags,id}) =>{
    console.log("setpost "+id);
    return {
        type:"setPost",
        title: title,
        article: article,
        tags: tags,
        id:id,
    }
}