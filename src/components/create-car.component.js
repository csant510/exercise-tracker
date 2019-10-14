import React, { Component } from 'react';
import axios from 'axios';

export default class CreateCar extends Component{
    constructor(props){
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            make: '',

        }
    }
    onChangeMake(e){
        this.setState({
            make: e.target.value
        });
    }
  
  
 
    

    onSubmit(e) {
        e.preventDefault();
    
        const Car = {
          make: this.state.make,

        }
    
        console.log(Car);
    
       axios.post('http://localhost:3001/car/add', Car)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }
    

    render(){
        return (
           <div>
               <h3>Make: </h3>
               <form onSubmit={this.onSubmit}>
                <div className="from-group">
                    <label>Make: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.make}
                    onChange={this.onChangeMake}
                    />
                </div>
                <div className="form-group">
                    <br></br>
                    <input type="submit" value="Create Car" className="btn btn-primary" />
                </div>
               </form>
           </div>
        )
    }
}