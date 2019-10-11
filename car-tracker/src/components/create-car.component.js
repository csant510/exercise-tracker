import React, { Component } from 'react';

export default class CreateCar extends Component{
    constructor(props){
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeMileage = this.onChangeMileage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            make: '',
            model:'',
            year: 0,
            mileage: 0,
        }
    }
    onChangeMake(e){
        this.setState({
            make: e.target.value
        });
    }
    onChangeModel(e){
        this.setState({
            model: e.target.value
        });
    }

    onChangeYear(e){
        this.setState({
            year: e.target.value
        });
    }
    onChangeMileage(e){
        this.setState({
            mileage: e.target.value
        });
    }
    

    onSubmit(e) {
        e.preventDefault();
    
        const Car = {
          make: this.state.make,
          model: this.sate.model,
          year: this.sate.year,
          mileage: this.state.mileage,
        }
    
        console.log(Car);
    
    //    axios.post('http://localhost:5000/exercises/add', Car)
    //      .then(res => console.log(res.data));
    
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
                <div class="from-group">
                    <label>Model: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.model}
                    onChange={this.onChangeModel}
                    />
                </div>
                <div class="from-group">
                    <label>Year: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.year}
                    onChange={this.onChangeYear}
                    />
                </div>
                <div class="from-group">
                    <label>Mileage: </label>
                    <input tupe="text"
                    required
                    className="form-control"
                   value={this.state.mileage}
                    onChange={this.onChangeMileage}
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