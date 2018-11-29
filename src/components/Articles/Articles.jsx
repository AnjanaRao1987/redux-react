import React , { Component }  from "react";
import { Link } from "react-router-dom";



class Articles extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        const { articles } = this.props;
        return (
            // ... the JSX code we had previously
            <ul className="list-group">
                { /* map over each article and display a list item for each one */ }
                { articles.map(article => (
                    <li className="list-group-item" key={ article.id }>
                        { /* link to the article using its id */ }
                        <Link to={ "/articles/" + article.id }>{ article.title }</Link>
                        <Link to={ "/articles/tag/" + article.tags }> Tags:{ article.tags }</Link>
                    </li>
                ))}
            </ul>

        );
    }
}
export default Articles;
