import { getAccessToken } from "../../../lib/spotify"

export async function GET() {
    const { access_token } = await getAccessToken()
    const res = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl?market=ES', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    })
    const data = await res.json()

    return new Response(JSON.stringify(data))
}