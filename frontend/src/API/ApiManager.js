import axios from 'axios'

//use 'http://' or 'https://' fix the problem of cross-origin permission
const API_URI = 'http://localhost:3030';

class ApiManager {

    /*ALL GET*/

    // find all users
    fetchAllUsers() {
        return axios.get(`${API_URI}/users`);
    }

    //find one user
    fetchOneUser(email) {
        return axios.get(`${API_URI}/users/${email}`);
    }

    // find all products
    fetchAllProducts() {
        return axios.get(`${API_URI}/modelProduit`);
    }


    //find one product
    fetchOneProduct(ID) {
        return axios.get(`${API_URI}/modelProduit/${ID}`);
    }

     // find all products
    fetchAllAdmin() {
    return axios.get(`${API_URI}/admin`);
    }

     //find an admin
     fetchOneAdmin(email) {
        return axios.get(`${API_URI}/admin/${email}`);
    }

    // find all contracts
    fetchAllContrats() {
    return axios.get(`${API_URI}/contrat`);
    }

    //find one contract
    fetchMultipleContrats(idUser) {
    return axios.get(`${API_URI}/admin/${idUser}`);
    }

    /*ALL DELETE */

    //delete one user
    deleteOneUser(id) {
        return axios.delete(`${API_URI}/users/${id}`)
    }

    //delete one product
    deleteOneProduct(id) {
        return axios.delete(`${API_URI}/modelProduct/${id}`)
    }

    //delete one admin
    deleteOneAdmin(id) {
        return axios.delete(`${API_URI}/admin/${id}`)
    }

    //delete one contract
    deleteOneContrat(id) {
        return axios.delete(`${API_URI}/contrat/${id}`)
    }

    /*ALL PUT */

    //create a user
    createOneUser(data) {
        return axios.put(`${API_URI}/users?compagny_name_fillial=${data[0]}&email=${data[1]}&password=${data[2]}&phone=${data[3]}&siret=${data[4]}&compagny-type=${data[5]}
        &location={country=${data[6]}, region=${data[7]}, town=${data[8]}, zipCode=${data[9]}, adress=${data[10]}}`);
    }

    //TO FINISH

    /*ALL POST*/

    //TODO


}

export default ApiManager;