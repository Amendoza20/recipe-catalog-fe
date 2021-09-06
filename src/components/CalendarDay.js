import { Component } from "react"; 

class CalendarDay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { day, recipe } = this.props;
        return(
            <div>
                <div>{day}</div>
                <div>{recipe.recipeTitle}</div>
            </div>
        )
    }

}
export default CalendarDay;