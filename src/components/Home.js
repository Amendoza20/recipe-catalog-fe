import { Component } from "react";
import Buttons from './Buttons';
import CalendarDay from './CalendarDay';
import axios from 'axios';

const recipeMock = {
    id: 0, 
    recipeTitle: "",
    recipeType: ""
}
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [],
            selections: [],
            days: [
                {day: "Monday", recipe: recipeMock},
                {day: "Tuesday", recipe: recipeMock},
                {day: "Wednesday", recipe: recipeMock},
                {day: "Thursday", recipe: recipeMock},
                {day: "Friday", recipe: recipeMock},
                {day: "Saturday", recipe: recipeMock},
                {day: "Sunday", recipe: recipeMock}
            ]
        };
        this.onSelection = this.onSelection.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setCategories = this.setCategories.bind(this);

    }

    onSelection(value){
        let list = this.state.selections;
        if (list.length < 7){
            list.push(value);
            this.setState({selections: list});
        }
       
    }

    onSubmit(){
        axios.post("http://localhost:8080/menu/recipetypes", {
            recipeTypes: this.state.selections
        })
        .then(result => {
            this.formatDays(result.data.recipes)
        })
        .catch(error => console.log(error));
    }

    formatDays(recipes){
        const { days } = this.state;
        
        for(let i = 0; i < days.length && i < recipes.length; i++){
            days[i].recipe = recipes[i];    
        }
        this.setState({
            days 
        });
    }

    setCategories(categories){
        this.setState({categories});
    }

    componentDidMount(){
        fetch("http://localhost:8080/recipe/types")
            .then(response => response.json())
            .then(result => this.setCategories(result))
            .catch(error => error);
    }

    render(){
        const { categories, selections, days } = this.state;
        return(
            <div>
                <div>
                    {days.map((day, key) =>
                        <CalendarDay day={day.day} recipe={day.recipe} />
                    )} 
                </div>
                <div>
                    {selections.map((selection, key) => 
                        <div key={key}>{selection}</div>
                    )}
                    <Buttons categories={categories} onSelection={this.onSelection} />
                </div>
                {selections.length >= 7 && 
                    <button onClick={this.onSubmit} >Submit</button>
                }
            </div>
        )
    }
}

export default Home;