import axios from 'axios'

const baseUrl = 'https://opentdb.com'


export const getAllCategories = () => {
  return axios.get(`${baseUrl}/api_category.php`)
}

export const getSingleCatagory = id => {
  return axios.get(`${baseUrl}/api.php?amount=${id}&type=multiple`)
}