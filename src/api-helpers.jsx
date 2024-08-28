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

    let res;

    try{
         res = await axios.post(`/auth/login`, formData);
    }catch(err){
        console.log(err);
    }

    console.log(res.data.message) ;
    return res.data;
};
