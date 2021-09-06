import { Component } from "react";
import axios from 'axios';

class Recipe extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            categories: [],
            selection: ""

        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSubmit(event){
        axios.post("http://localhost:8080/recipe", {
            recipeTitle: this.state.title,
            recipeType: this.state.selection
        })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    handleSelect(event){
        this.setState({selection: event.target.value})
    }

    handleInput(event){
        this.setState({title: event.target.value});
    }

    setCategories(categories){
        this.setState({
            categories,
            selection: categories[0]
        });
        console.log(this.state.categories)
    }

    componentDidMount(){
        fetch("http://localhost:8080/recipe/types")
            .then(response => response.json())
            .then(result => this.setCategories(result))
            .catch(error => error);
    }


    render(){
        const { title, categories, selection } = this.state; 
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                    <input type="text" name="recipeTitle" value={title} onChange={this.handleInput} />
                </label>
                <select value={selection} onChange={this.handleSelect}>{categories.map((category, key)  =>
                    <option key={key} value={category}>{category}</option>
                )}</select>
                <input type="submit" value="Submit" />
            </form>
        </div>)
    }
}

export default Recipe; 