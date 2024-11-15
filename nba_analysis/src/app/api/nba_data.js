import axios from 'axios';

export default async function handler(req, res) {
  const { team } = req.query;
  const apiKey = process.env.NBA_API_KEY; // Store your API key in environment variables

  try {
    const response = await axios.get(`https://api.balldontlie.io/v1/players`, {
      headers: { 'Authorization': apiKey }
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}