import axios from 'axios'

const baseUrl = 'https://opentdb.com'

export const getAllCatagories = () => {
  return axios.get(`${baseUrl}/api_category.php`)
}