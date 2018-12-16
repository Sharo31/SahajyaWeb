import ReactDOM from 'react-dom';
import React, {Component} from 'react';
export default class LocationPrioritiser extends Component{
    render(){
        return (

            <div class="form">
                <form action="http://localhost:5000" method="get">
                    <input type="submit" value="Prioritize Locations"/>
                </form>
                </div>
                
    
           
        );
    }
}
ReactDOM.render(
    <LocationPrioritiser/>,
    document.getElementById('root')
);