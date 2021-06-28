import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
    cName :'',
    cDescription : ''
}

class CreateCategory extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit=  this.onSubmit.bind(this);
        this.state = initialState;
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        let category = {
            name: this.state.cName,
            description: this.state.cDescription
        };
        console.log('DATA TO SEND ', category);
        axios.post('http://localhost:8087/category/create', category)
        .then(response => {
            alert('New Category successfully inserted')
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render(){
        return(
            <div className = "container">
                <h1>Create Category</h1>
                <h5>insert the details of new category</h5>

                <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="categoryName" 
                     name = "cName" 
                     value={this.state.cName} 
                     onChange={this.onChange}/>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="categoryDescription" className="form-label">category Description</label>
                    <input 
                     type="text" 
                     className="form-control" 
                     id="categoryDescription"  
                     name = "cDescription" 
                     value={this.state.cDescription} 
                     onChange={this.onChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Add Category</button>

                </form>
            </div>
        )
    }

}

export default CreateCategory;