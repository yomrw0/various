import axios from "axios";
const API_Base_url = "http://localhost:8080/"
class Service {
    view() {
        return axios.get(API_Base_url + 'home')
    }
    insert(data) {
        return axios.post(API_Base_url + 'insert', data);
    }
    deleteData(data) {
        return axios.delete(API_Base_url + data);
    }
    editData(id, name, completed) {
        return axios.post(API_Base_url + id, null, {
            params: {
                id,
                name,
                completed
            }
        })
    }
}

export default new Service();