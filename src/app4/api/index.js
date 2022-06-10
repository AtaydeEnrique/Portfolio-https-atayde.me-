import axios from "axios";

export const getPlacesData = async (type,sw, ne) =>{
    try{
        const {data: {data} } = await axios.get(`https://atayde.herokuapp.com/advisor/${type}`, {
            params: {
              bl1: sw.lat,
              tr1: ne.lat,
              bl2: sw.lng,
              tr2: ne.lng,
            },
          })
          return data;
    } catch (error){
        console.log(error)
    }
}