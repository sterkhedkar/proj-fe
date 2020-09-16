import axios from 'axios';

const baseUrl = `http://localhost:8000`;
let res;
export const getMethod = async(props) =>{
    try{
        res = 
            await props 
            ? 
            axios.get(
                baseUrl+`posts`,
                { params: props }, 
                { headers: {"Content-type": "application/json; charset=UTF-8"}}
            ) 
            : 
            axios.get(
                baseUrl+`posts`, 
                { headers: {"Content-type": "application/json; charset=UTF-8"}}
            )
            // console.log("get : ",res.response.data);
        return res
    }
    catch(err){
        console.log("error getMethod : ",err);
        catchError(err); 
    }
}

export const postMethod = async(props) =>{
    try{
        res = await axios.post(
            baseUrl+`posts`, 
            props, 
            { headers: {"Content-type": "application/json; charset=UTF-8"}}
        )
        return res
    }
    catch(err){
        console.log("error postMethod : ",err);
        catchError(err); 
    }
}

export const deleteMethod = async(props) =>{
    try{
        res = await axios.delete(
            baseUrl+`posts`,
            { params: props }, 
            { headers: {"Content-type": "application/json; charset=UTF-8"}}
        ) 
        return res
    }
    catch(err){
        console.log("error deleteMethod : ",err);
        catchError(err); 
    }
}

export const putMethod = async(props) =>{
    try{
        res = await axios.put(
            baseUrl+`posts/${props.Id}`, 
            props, 
            { headers: {"Content-type": "application/json; charset=UTF-8"}}
        )
        return res
    }
    catch(err){
        console.log("error putMethod : ",err);
        catchError(err); 
    }
}

export const catchError = async(props) =>{
    console.log("props : ", props)
    if (props.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log("err response 1 : ",props.response.data);
        console.log("err response 2 : ",props.response.status);
        console.log("err response 3 : ",props.response.headers);
    } else if (props.request) {
        /*
         * The request was made but no response was received
         */
        console.log("no response : ",props.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        let e = {error:props.message};
        console.log('Error : ', props.message, e);
        return e
    }

}
