import { Component } from "react"; 

class CalendarDay extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { day, recipe } = this.props;
        return(
            <div>{day}</div>
        )
    }

}
export default CalendarDay;