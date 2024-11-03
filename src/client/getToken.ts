import axios from 'axios'

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: new URLSearchParams({
        grant_type: 'client_credentials'
    })
}

export async function getToken() {
    try {
        const response = await axios.post(authOptions.url, authOptions.data, {
            headers: authOptions.headers
        })
        if (response.status === 200) {
            const token = response.data.access_token
            return token
        }
    } catch (error) {
        console.error(error)
    }
}