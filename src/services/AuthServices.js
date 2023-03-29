import axios from 'axios';

const auth = axios.create({
    baseURL:'https://coral-app-qh8gd.ondigitalocean.app',
    timeout:5000,
    headers:{'Content-Type' : 'application/json'}
});

export const login = async (email, password) => {
    try{
        const response = await auth.post('/login', {email, password});
        if(response && response.status === 200){
            return response.data;
        }
    } catch(error) {
        console.error(error);
        return null;
    }
};

export const signUp = async (email, password) => {
    try{
        const response = await auth.post('/sign_up', {email, password});
        if(response && response.status === 200){
            return response.data;
        }else {
            return 'Something Went Wrong'
        }
        
    }catch(error){
        console.error(error);
    }
}