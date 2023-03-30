import axios from 'axios';

const API_URL = 'https://coral-app-qh8gd.ondigitalocean.app'

const auth = axios.create({
    baseURL:`${API_URL}`,
    timeout:5000,
    headers:{'Content-Type' : 'application/json'}
});

export const login = async (email, password) => {
    try{
        const response = await auth.post('/login', {email, password});
        if(response && response.status === 200){
            localStorage.setItem('token', response.data.token)
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

export const searchProduct = async (query) => {
    const token = localStorage.getItem('token')
    try{
        const headers = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const params = {
            q:query
        }
        const response = await axios.get(`${API_URL}/summary?product_id=com.duolingo` , {
            headers,
        });
        if(response && response.status === 200){
        return response.data
        }
    } catch (error) {
        console.error(error)
        return null
    }
}