import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateMaintenance extends Component{
    constructor(props){
        super(props);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeOil = this.onChangeOil.bind(this);
        this.onChangeFluid = this.onChangeFluid.bind(this);
        this.onChangeTireRoation = this.onChangeTireRoation.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.sate = {
            model: '',
            date: new Date(),
            oil: false,
            fluid: false,
            tireRoation: false,
            price: 0,
            description: '',
            models:[]
        }
    }
    onChangeModel(e){
        this.setState({
            model: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
    onChangeOil(e){
        this.setState({
            oil: e.target.value
        });
    }
    onChangeFluid(e){
        this.setState({
            fluid: e.target.value
        });
    }
    onChangeTireRoation(e){
        this.setState({
            tireRoation: e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const Maintenance = {
          model: this.state.model,
          date: this.state.date,
          oil: this.sate.oil,
          fluid: this.sate.fluid,
          tireRoation: this.state.tireRoation,
          price: this.state.price,
          description: this.state.description,
        }
    
        console.log(Maintenance);
    
    //    axios.post('http://localhost:5000/exercises/add', Maintenance)
    //      .then(res => console.log(res.data));
    
        window.location = '/';
      }
    

    render(){
        return (
           <div>
               <h3> Create Maintenance Log </h3>
               <form onSubmit={this.onSubmit}>
               <div className="form-group"> 
               <label>Model: </label>

               </div>
               <div className="form-group">
                   <label>Date: </label>
                   <div>
                    <DatePicker
                    seected={this.sate.date}
                    onchange={this.onChangeDate}
                    />
                   </div>
               </div>

               <div class="form-check">
                   <label>Oil</label>
                   <input type="checkbox" className="form-control"
                   value={this.sate.oil}
                   onChange={this.onChangeOil}/>

                 <label>fluid</label>
                   <input type="checkbox" className="form-control"
                   value={this.sate.fluid}
                   onChange={this.onChangeFluid}/>

                    <label>Tire Roation</label>
                   <input type="checkbox" className="form-control"
                   value={this.sate.tireRoation}
                   onChange={this.onChangeTireRoation}/>

               </div>
               <div className="form-group">
                   <label>Price: </label>
                   <input 
                   type="text" 
                   className="form-control"
                   value={this.sate.price}
                   onChange={this.onChangePrice}
                   />
                </div>

               <div className="form-group"> 
               <label>Description: </label>
               <input  type="text"
               className="form-control"
               value={this.sate.description}
               onChange={this.onChangeDescription}
              />
                </div>
                <div className="form-group">
                 <input type="submit" value="Create Maintenance Log" className="btn btn-primary" />
                 </div>
               </form>              
        </div>
        )
    }
}