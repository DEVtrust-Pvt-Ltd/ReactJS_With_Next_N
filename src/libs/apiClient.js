import axios from 'axios'
import humps from 'humps'
import config from 'config'


const path = `${config.apiEndpoint}/`
const apiClient = {

  getStateAndCity (payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return client.get('api/state-city-list', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },
  
  registerUser (payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return client.post('api/create-user', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },


  forgotPassword (payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return client.post('api/forgot-password', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  resetPassword (payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return client.post('api/change-password', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },


  userLogin (payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return client.post('api/login', payload).then(res => {
      localStorage.setItem('userToken', res?.data?.access_token)
      return humps.camelizeKeys(res.data)
    });
  },

  createClient (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.post('api/create-client', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  updateClient (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.put('api/update-client', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  deleteClient (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.post('api/delete-client', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  fetchClientDetails (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.post('api/get-client-details', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },


  fetchVendorDetails (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.get('api/get-vendor-details').then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  getAllClients (userToken) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.get('api/get-all-clients').then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  getAllClientsCounts (userToken) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.get('api/get-clients-count').then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  updateClientName (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.post('api/update-client-name', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },

  updateVendorInfo (userToken,payload) {
    const client = axios.create({
      baseURL: path,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      }
    });

    return client.post('api/update-user-name', payload).then(res => {
      return humps.camelizeKeys(res.data)
    });
  },
}

export default apiClient
