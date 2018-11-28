import React from "react";
import FourOhFour from "../FourOhFour";
import Form from "../Forms/Form";

// the fields the form should have

// the add article component
const Edit = ({fields}) => !fields ? <FourOhFour /> :(
    <React.Fragment>
        <h2>Edit Article</h2>
        <Form className="panel-body" fields={ fields } button="Update Article" />
    </React.Fragment>
);

export default Edit;
