import {getArtists} from '../api'
  
  const artistList = document.querySelector('.artist-list')
  const artistListItemTemplate = document.querySelector('.artist-list-item-template')

  function renderArtist(artist){
      const newArtist = artistListItemTemplate.content.cloneNode(true)
      newArtist.querySelector('a').href = '#artists-' + artist.id
      newArtist.querySelector('img').src == artist.image_url
      newArtist.querySelector('artist-list-item-title').innerText = artist.name
      artistList.append(newArtist)
  }
  
function renderArtists(artists) {
    artistList.replaceChildren()
    for (const artist of artists) {
        renderArtists(artist)
    }
}

async function renderArtistsSection() {
    const artists = await getArtists()
    renderArtists(artists)
}

export {renderArtistsSection}
  