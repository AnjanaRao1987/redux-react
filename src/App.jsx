import React from "react";

import {
    Route,
    Switch,
} from "react-router-dom";

import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";

import Articles from "./container/Articles/Articles";
import Article from "./container/Articles/Article";
import Add from "./components/Articles/Add";
import Edit from "./container/Articles/Edit";
import ArticlesbyTag from "./container/Articles/ArticlesByTag";



const App = ({ articles }) => (
    <React.Fragment>
        { /* header should show on all pages */ }
        <Header subtitle="Very insightful">My Blog</Header>

        { /* route switch, to handle 404s */ }
        <Switch>
            { /* the articles list */ }
            { /* use Object.values() to pass in an array of articles that we can map over */ }
            <Route exact path="/" render={ () => <Articles articles={ Object.values(articles) } /> } />

            { /* show the add form - has to come before :id so "add" doesn't get treated as an id  */ }
            <Route exact path="/articles/add" component={ Add } />

            { /* show the Edit form - has to come before */ }
            <Route exact path="/articles/edit/:id" render={ ({ match }) => (
                <Edit id={ +match.params.id } />
            )} />

            { /*  */ }
            <Route exact path="/articles/tag/:tag" render={ ({ match }) => (
                <ArticlesbyTag tag={ match.params.tag } />
            )} />

            { /* show an individual article */ }
            <Route exact path="/articles/:id" render={ ({ match }) => (
                <Article id={ +match.params.id } />
            )} />

            { /* 404 page */}
            <Route component={ FourOhFour } />
        </Switch>

    </React.Fragment>
);

export default App;
