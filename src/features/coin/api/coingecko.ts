import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3/';

const coinGeckoApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(process.env.COINGECKO_API_KEY && {
      'x-cg-demo-api-key': process.env.COINGECKO_API_KEY,
    }),
  },
});

export async function fetchCoins() {
  const response = await coinGeckoApi.get('/coins/markets', {
    params: {
      per_page: 20,
      page: 1,
      vs_currency: 'usd',
    },
  });

  return response.data;
}

export async function fetchCoin(id: string) {
  const response = await coinGeckoApi.get(`/coins/${id}`);

  return response.data;
}
