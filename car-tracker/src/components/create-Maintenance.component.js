import React, { Component } from 'react';

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
                <p>create Maintenance</p>
            </div>
        )
    }
}