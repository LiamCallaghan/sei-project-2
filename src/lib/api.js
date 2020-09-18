import axios from 'axios'

const baseUrl = 'https://opentdb.com'

const baseUrl2 = 'https://apodapi.herokuapp.com/api/'


export const getAllCategories = () => {
  return axios.get(`${baseUrl}/api_category.php`)
}

export const getSingleCategory = id => {
  return axios.get(`${baseUrl}/api.php?amount=10&category=${id}&type=multiple`)
}

export const getBackground = () => {
  return axios.get(`${baseUrl2}`)
}

export const getCategory = id => {
  return axios.get(`${baseUrl2}?date=2005-03-${id}`)
}


