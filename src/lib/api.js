import axios from 'axios'

const baseUrl = 'https://opentdb.com'


export const getAllCategories = () => {
  return axios.get(`${baseUrl}/api_category.php`)
}

export const getSingleCategory = id => {
  return axios.get(`${baseUrl}/api.php?amount=10&category=${id}&type=multiple`)
}
