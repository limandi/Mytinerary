
import axios from "axios";
import {GET_CITIES} from '../actions/type'


const getCities= () => dispatch => {
    axios.get('http://localhost:4000/cities/all')
    .then(res=>
        dispatch ({
            type: GET_CITIES,
            payload:res.data
            
        })
        
    
    )
    

} 


export default getCities;