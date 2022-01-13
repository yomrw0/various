import axios from "axios";
const API_Base_url = "http://localhost:8080/"

export const view = () => axios.get(API_Base_url + 'home');
export const insert = data => axios.post(API_Base_url + 'insert', data);
export const editData = (id, name, description) => {
    return axios.post(API_Base_url + id, null, {
        params: {
            id,
            name,
            description
        }
    })
}
export const deleteData = data => axios.delete(API_Base_url + data);
export const searchList = data => axios.post(API_Base_url + 'search/' + data);