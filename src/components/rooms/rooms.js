import React, {Component} from 'react';
import axios from 'axios';

class Rooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            rooms: [] 
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8087/room/')
        .then(response => {
           this.setState({rooms: response.data.data})
        })
    }

    navigateDisplayRoomtPage(e, roomId){
        window.location = `/${roomId}`
    }

    render(){
        return(
            <div className="container">
                <h1>Display Rooms</h1>
                {this.state.rooms.length > 0 && this.state.rooms.map((item, index) => ( 
                    <div key={index} className="card border-primary mb-3" >
                        <div  className="p-3" onClick={e => this.navigateDisplayRoomtPage(e, item._id)}>
                        <div class="card-header">{item.code}</div>
                        <h5>Room wing:  {item.wing}</h5>
                        <h5>Amount:  {item.amount}</h5>
                        <h5>Pax:  {item.pax}</h5>
                       
                       </div>  
                    </div>
                ))}
            </div>
        )
    }
}

export default Rooms;