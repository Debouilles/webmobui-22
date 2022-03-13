const BASE_URL = 'https://webmob-ui-22-spotlified.herokuapp.com'

async function loadJson(url) {
    const response = await fetch(url)
    const parsedJson = await response.json()
    return parsedJson
}

async function getArtists() {
    return await loadJson(`${BASE_URL}/api/artists`)
}

async function getSongsForArtist() {
    return await loadJson(`${BASE_URL}/api/artists/${id}/songs`)
}

async function searchSongs(query) {
    return await loadJson(`${BASE_URL}/api/songs/search/${encodeURIComponent(query)}`)
}

export {getArtists, getSongsForArtist, searchSongs}
