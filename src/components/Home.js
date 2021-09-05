import { Component } from "react";
import Buttons from './Buttons';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: ["Chicken", "Beef", "Pork", "Vegetarian", "Vegan", "Fish"],
            selections: []
        };
        this.onSelection = this.onSelection.bind(this);
    }

    onSelection(value){
        let list = this.state.selections;
        if (list.length < 7){
            list.push(value);
            this.setState({selections: list});
        }
        
    }

    render(){
        const { categories, selections } = this.state;
        return(
            <div>
                Hello World!
                {selections.map(selection => 
                    <div>{selection}</div>
                )}
                <Buttons categories={categories} onSelection={this.onSelection} />
            </div>
        )
    }
}

export default Home;