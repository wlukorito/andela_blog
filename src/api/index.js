import Axios from 'axios'

export const getData = async(url) => {
    try{
        const response = await Axios.get(url)
        return response.data
    } catch (error){
        // TODO: implement error logging
        console.log(error)
    }
}
