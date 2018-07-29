import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
            title:event.target.value
        })
    }

    render() {
        const { title } = this.state;
        return (
            <form id="article-id">
                <Input label={"seo-title"} text={"seo-title"} id={"seo_title"} type="text"
                    value={title} handleChange={this.handleChange} />
            </form>
    
        )
    }
}

export default FormContainer;


