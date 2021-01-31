import React, { Component } from 'react';
import gladiators from "../../Data/gladiators_new.json"
class Gladiator extends Component {
    render() {
        return (
            <div>
                {gladiators.map((item, index)=>( <div key={index}className="">
                        <p>{item.name}</p>
                        <img src={process.env.PUBLIC_URL + '/images/gladiators/' + item.image}/>

                    </div>))}
                
                
            </div>
        );
    }
}

export default Gladiator;