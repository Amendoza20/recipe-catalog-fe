import { Component } from "react";
import Buttons from './Buttons';

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                Hello World!
                <Buttons />
            </div>
        )
    }
}

export default Home;