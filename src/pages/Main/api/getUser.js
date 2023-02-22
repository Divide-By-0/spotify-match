import axios from 'axios';

export default async function getUser(token, userId) {
    const url = `https://api.spotify.com/v1/users/${userId}`
    const result = await axios.get(url,
        {headers: {Authorization: `Bearer ${token}`}}
    );

    return {userName: result.data.display_name ?? userId, url: result.data.external_urls?.spotify ?? 'https://open.spotify.com/'}
}
