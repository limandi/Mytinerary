import React,{Component} from "react";
import {connect} from 'react-redux';
import getCities from '../components/actions/cityActions';



class Cities extends Component {
    

    constructor(props) {
        super(props);
        this.state= {
            getCities: []
        }
    }
    

     componentDidMount() {
        //  fetch('http://localhost:4000/cities/all')
         this.props.getCities();
     }

    render() {
        var lista= this.props.listaCiudades.cities;
        console.log(lista);
        if(!lista) return <p> ("loading") </p>
        
        return ( 
          
            <div className= "container cities">
                <ul>
                { lista.map(cities => {
                    return (
                        <li key={cities.id}>
                            <p>{cities.name} - {cities.country} </p>

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
        listaCiudades: state.cities.ciudades};
}




export default connect(mapStateToProps, {getCities}) (Cities);