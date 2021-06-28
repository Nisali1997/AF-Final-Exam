import React, {Component} from 'react';
import axios from 'axios';

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            totalAmount:[]
        } 
    }

    componentDidMount(){
        axios.get(`http://localhost:8087/room/${this.props.match.params.id}`)
        .then(response =>  {
            this.setState({categories: response.data.data})
           
        })
        .catch(error => {
            alert(error.message)
        })
        console.log('VEHICLE ID', this.props.match.params.id)

      axios.get(`http://localhost:8087/course/amount/${this.props.match.params.id}`)
      .then(response =>  {
        this.setState({totalAmount: response.data.totalAmount})
        
      })
      .catch(error => {
        alert(error.message)
      })
       
    }

    render(){
        return(
            <div className="container">
            <h1>categories for the given room</h1>
            {this.state.categories.length > 0 && this.state.categories.map((item, index) => ( 
               <div key={index} className="card border-primary mb-3" >
                   <div className="p-3">
                   <h5>Category Name : {item.name}</h5>
                   <h5>Category description : {item.description}</h5>

                   </div>
               </div>
            ))}
            </div>
        )
    }
}

export default Categories;