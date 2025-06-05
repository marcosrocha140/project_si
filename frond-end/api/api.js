// Fetch ou Axios
import axios from 'axios'

const URL = "http://localhost:4000";

const responseNews = await axios.get(`${URL}/news`);

const responseTeams = await axios.get(`${URL}/teams`);

const responseUsers = await axios.get(`${URL}/users`);


export const newsArray = responseNews.data;
export const teamsArray = responseTeams.data;
export const usersArray = responseUsers.data;