import axios from 'axios'

const baseUrl = 'https://opentdb.com'


export const getAllCategories = () => {
  return axios.get(`${baseUrl}/api_category.php`)
}