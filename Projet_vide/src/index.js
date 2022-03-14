import './css/index.css'
//import {domOn, domForEach} from './lib/domManipulator'
import {renderArtistsSection} from './sections/artists'
import {renderSongsSection, renderSearchSongsSection} from './sections/songs'
import './sections/player'
import './sections/search'


function toggleSection(section){
  document.querySelector('section.active')?.classList.remove('active')
  document.querySelector(`${section}-section`)?.classList.add('active')
}

function toggleNav(section){
  document.querySelector('nav a.active')?.classList.remove('active')
  document.querySelector(`nav a[href="${section}"]`)?.classList.add('active')
}

function displaySection() {
  const section = window.location.hash || '#home-section'
  const sectionSplit = section.split('-')
  toggleSection(sectionSplit[0])
  toggleNav(sectionSplit[0])

  switch(sectionSplit[0]) {
    case '#artists' :
      if(sectionSplit[1]) {
        toggleSection('#songs')
        renderSongsSection(sectionSplit[1])
      }
      else {
        renderArtistsSection()
      }
      break;
      case '#search' :
        toggleSection('#songs')
        renderSearchSongsSection(decodeURIComponent(sectionSplit[1]))
        break;
  }
}

window.addEventListener('hashchange', displaySection)

// Affichage au chargement
displaySection();

