import { Component } from "react";

const Button = ({label}) => {
    return(
        <div>{label}</div>
    )
} 
class Buttons extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
               <Button label="Chicken" />
               <Button label="Beef" />
               <Button label="Pork" />
               <Button label="Vegetarian" />
               <Button label="Vegan" />
               <Button label="Fish" />
            </div>
        )
    }
}

export default Buttons;