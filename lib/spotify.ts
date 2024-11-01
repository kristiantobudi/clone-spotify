export const getAccessToken = async () => {
    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "client_credentials"
        })
    })
    return response.json()
}

export const topTracks = async () => {
    const { access_token } = await getAccessToken()

    return fetch("https://api.spotify.com/v1/tracks", {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
}