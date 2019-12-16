import React,{Component} from "react";
import {connect} from 'react-redux';
import getItineraries from '../components/action/itineraryActions';



class Itineraries extends Component {
    

    constructor(props) {
        super(props);
        this.state= {
            getItineraries: []
        }
    }
    

     componentDidMount() {
        
         this.props.getItineraries();
     }

    render() {
        var lista= this.props.listaItinerarios.Itinerarios;
        console.log(lista);
        if(!lista) return <p> ("loading") </p>
        console.log(lista)
        return ( 
          
            <div className= "container itineraries">
                <ul>
                { lista.map(Itinerarios => {
                    return (
                        <li key={Itinerarios.id}>
                            <p>{Itinerarios.title} - {Itinerarios.profilePic} </p>

                        </li>
                     )
                    })
                  }
                </ul>
            
          </div>
        )
      }
    }

const mapStateToProps= (state) =>  {
    console.log(state);
    return  {
        listaItinerarios: state.Itinerarios};
}




export default connect(mapStateToProps, {getItineraries}) (Itineraries);