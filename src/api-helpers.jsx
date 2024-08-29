import axios from 'axios';

export const register = async(user, formData) => {

    let res;

    try{
         res = await axios.post(`/${user}`, formData);
    }catch(err){
        console.log(err);
    }

    console.log(res.data.message) ;
    return res.data;
};

export const signin = async(formData) => {

    console.log("formData", formData);
    let res;

    try{
         res = await axios.post(`/auth/login`, formData);
    }catch(err){
        console.log(err);
    }

    return res.data;
};

export const getSummary = async() => {
    
    let res;

    try{
        res = await axios.get(`http://127.0.0.1:8000/summary`);
    }catch(err){
        console.log(err);
    }

    console.log(res.data);
    return res.data;
}

export const getCarbonOffsetCount = async(formData) => {

    console.log("formData", formData);
        
    let res;

    try{
        res = await axios.post(`http://127.0.0.1:8000/predict`, formData);
    } catch(err){
        console.log(err);
    }

    console.log(res?.data);
    return res?.data;
}