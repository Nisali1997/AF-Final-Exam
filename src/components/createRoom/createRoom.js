import React, { Component} from 'react';
import axios from 'axios';
import Select from 'react-select';

const initialState = {
    rCode :'', 
    amount : 0,
    wing:'',
    pax: 0,
    categories:[],
    options:[],
    selectedCategories :[]
}

class CreateRoom extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit=  this.onSubmit.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.state = initialState;
    }

   componentDidMount(){
       axios.get('http://localhost:8087/category')
       .then(response => {
           this.setState({categories : response.data.data}, () =>{
               let data = [];
               this.state.categories.map((item, index) => {
                   let category = {
                       value: item._id,
                       label: item.name
                   }
                   data.push(category)
               });
               this.setState({options: data});
           })
       })
   } 
   

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onCategorySelect(e){
        this.setState({selectedCategories: e ? e.map(item => item.value) : []});
    }

    onSubmit(e) {
        e.preventDefault();
        let room = {
            rCode : this.state.rCode,
            amount : this.state.amount,
            wing : this.state.wing,
            pax : this.state.pax,
            categories: this.state.selectedCategories
        };
        console.log('DATA TO SEND ', room);
        axios.post('http://localhost:8087/room/create', room)
        .then(response => {
            alert('Room Data successfully inserted')
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div className = "container">
                <h1>Create Room</h1>

                <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="roomCode" className="form-label">Room Code</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="roomCode" 
                     name = "rCode" 
                     value={this.state.rCode} 
                     onChange={this.onChange}/>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="roomAmount" className="form-label">Amount</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="roomAmount"  
                     name = "amount" 
                     value={this.state.amount} 
                     onChange={this.onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="roomWing" className="form-label">Wing</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="roomWing"  
                     name = "wing" 
                     value={this.state.wing} 
                     onChange={this.onChange}/>
                     <h6>wings : South, West, East, North</h6>
                </div>

                <div className="mb-3">
                    <label htmlFor="roomPax" className="form-label">Pax</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="roomPax"  
                     name = "pax" 
                     value={this.state.pax} 
                     onChange={this.onChange}/>
                     <h6>possible values : 2, 3, 4</h6>
                </div>

                <label htmlFor="selectedCategories" className="form-label">Select Category</label>
                <Select
                options = {this.state.options}
                className = "basic-multi-select"
                onChange = {this.onCategorySelect}
                 isMulti  
                />
                <br/>

                <button type="submit" className="btn btn-primary">Add Room</button>

                </form>
            </div>
        )
    }
}

export default CreateRoom;