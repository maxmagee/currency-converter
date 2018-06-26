import axios from 'axios';

const BASE_URL = 'https://fixer.handlebarlabs.com';

export const getLatestRate = currency => axios.get(`${BASE_URL}/latest?base=${currency}`);
