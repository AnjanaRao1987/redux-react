

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