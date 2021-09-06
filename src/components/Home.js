import { Component } from "react";
import Buttons from './Buttons';
import CalendarDay from './CalendarDay';


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [],
            selections: [],
            days: [
                {day: "Monday", recipe: {}},
                {day: "Tuesday", recipe: {}},
                {day: "Wednesday", recipe: {}},
                {day: "Thursday", recipe: {}},
                {day: "Friday", recipe:{}},
                {day: "Saturday", recipe:{}},
                {day: "Sunday", recipe: {}}]
        };
        this.onSelection = this.onSelection.bind(this);
        this.setCategories = this.setCategories.bind(this);
    }

    onSelection(value){
        let list = this.state.selections;
        if (list.length < 7){
            list.push(value);
            this.setState({selections: list});
        }
       
    }

    
    setCategories(categories){
        this.setState({categories});
        console.log(this.state.categories)
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
            </div>
        )
    }
}

export default Home;