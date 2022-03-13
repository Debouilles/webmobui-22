import formatTimestamp from "../lib/formatTimestamp";

const audioPlayer = document.querySelector('#audio-player')
const playerThumbnail = document.querySelector('#player-infos-song-title')
const playerArtistName = document.querySelector('#player-infos-artist-name')

//contrôles du Player
const playerPrev = document.querySelector('#player-control-previous')
const playerPlay = document.querySelector('#player-control-play')
const playerPlayIcon = document.querySelector('#player-control-play .material-icons')
const playerNext = document.querySelector('#player-control-next')

//progress
const playerTimeCurrent = document.querySelector('#player-time-current')
const playerTimeDuration = document.querySelector('#player-time-duration')
const playerProgress = document.querySelector('#player-progess-bar')

//Logo
const logo = document.querySelector('#logo')
let songList = []
let currentSong = null

function setSongList(newList){
    songList = newList
}

//Lire une chanson sur laquelle on clique

function playSong(song, songs){
    currentSong = song
    if(songs)
    songList = songs
    audioPlayer.src = song.audio_url
    audioPlayer.play()
    playerSongTitle.innerHTML = song.title
    playerArtistName.innerHTML = song.artist.name
    playerThumbnail.src = song.artist.image_url
}

function playNextSong() {
    const index = songList.indexOf(currentSong)
    const newIndex = index + 1
    if(newIndex < songList.length) //on vérifie qu'on dépasse pas la taille du tableau, sinon on reboucle depuiis le début
    playSong(songList[newIndex])
    else 
    playSong(songList[0])
}

function playPreviousSong(){
    const index = songList.indexOf(currentSong)
    const newIndex = index - 1 
    if(newIndex >= 0) //on vérifie qu'on dépasse pas la taille du tableau, sinon on reboucle sur la fin
    playSong(songList[newIndex])
    else 
    playSong(songList[songList.length - 1])
}

//Écoute du bouton play et transmission au player
playerPlay.addEventListener('click', () => {
    if (audioPlayer.paused)
    audioPlayer.play()
    else
    audioPlayer.pause()
})

playerPrev.addEventListener('click', playPreviousSong)
playerNext.addEventListener('click', playNextSong)

playerProgress.addEventListener('change', (event) => {
    audioPlayer.currentTime = event.currentTarget.value
})

audioPlayer.addEventListener('durationchange', () => {
    playerProgress.max = audioPlayer.duration
    playerTimeDuration.innerText = formatTimestamp(audioPlayer.duration)
})

audioPlayer.addEventListener('timeupdate', () => {
    playerProgress.value = audioPlayer.currentTime
    playerTimeCurrent.innerText = formatTimestamp(audioPlayer.currentTime)
})

audioPlayer.addEventListener('play', () => {
    playerPlayIcon.innerHTML = 'pause'
    logo.classList.add('animated')
})

audioPlayer.addEventListener('pause', () => {
    playerPlayIcon.innerHTML = 'play_arrow'
    logo.classList.remove('animated')
})

export {setSongList, playSong}
