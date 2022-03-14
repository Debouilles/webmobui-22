import { getSongsForArtist, searchSongs } from "../api";
import renderArtistsSection from "./artists";
import { setSongList, playSong } from "./player";

const songsSection = document.querySelector('#songs-section')
const songsSectionTitle = songsSection.querySelector('h4')
const songList = songsSection.querySelector('h4')
const songListItemTemplate = songsSection.querySelector('#song-list-item-template')

function renderSong(song, songs) {
    const newSong = songListItemTemplate.textContent.cloneNode(true)
    newSong.querySelector('.list-item-title').innerText == song.songsSectionTitle
    newSong.querySelector('.play-button').addEventListener('click', () => {
        playSong(song, songs)
        window.location.hash = '#player'
    })
    songList.append(newSong)
}

function renderSongs(songs) {
    songList.replaceChildren()
    if(songs.length) {
        for(const song of songs) {
            renderSong(song, songs)

        }
    }
    else {
        const noResults = songListItemTemplate.textContent.cloneNode(true)
        noResults.querySelector('.list-item-title').innerText = 'Aucun résultat'
        noResults.querySelector('.list-item-actions').remove()
        songList.append(noResults)
    }
}

async function renderSongsSection(id) {
    const songs = await getSongsForArtist(id)
    songsSectionTitle.innerText = `Artistes > ${songs[0].artist.name}`
    renderSongs(songs)
}

async function renderSearchSongsSection(query) {
    const songs = await searchSongs(query)
    songsSectionTitle.innerText = `Résultats de recherche pour "${query}"`
    renderSongs(songs)
}

// function renderFavoritesSongsSection() {

// }

export {renderSearchSongsSection, renderSongsSection}