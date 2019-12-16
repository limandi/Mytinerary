
import axios from "axios";
import {GET_ITINERARIES} from './type'


const getItineraries= () => dispatch => {
    axios.get('http://localhost:4000/Itinerarios/itin')
    .then(res=>
        dispatch ({
            type: GET_ITINERARIES,
            payload:res.data
            
        })
        
    
    )
    

} 


export default getItineraries;