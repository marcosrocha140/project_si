// Fetch ou Axios
import axios from 'axios'

const BASE_URL = "http://localhost:4000";

const responseNews = await axios.get(`${BASE_URL}/news`);

const responseMatches = await axios.get(`${BASE_URL}/matches`);

const responseTeams = await axios.get(`${BASE_URL}/teams`);

const responseTournaments  = await axios.get(`${BASE_URL}/tournaments`)

const responseUsers = await axios.get(`${BASE_URL}/users`);


export const newsArray = responseNews.data;
export const matchesArray = responseMatches.data;
export const teamsArray = responseTeams.data;
export const usersArray = responseUsers.data;
export const tournamentsArray = responseTournaments.data;