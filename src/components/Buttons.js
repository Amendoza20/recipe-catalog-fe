import { Component } from "react";

const Button = ({label, onSelection}) => {
    return(
        <button onClick={() => onSelection(label)} type="button">{label}</button>
    )
} 
class Buttons extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const { categories, onSelection } = this.props;
        return(
            <div>
                {categories.map(category =>
                    <Button label={category} onSelection={onSelection} />    
                )}
            </div>
        )
    }
}

export default Buttons;