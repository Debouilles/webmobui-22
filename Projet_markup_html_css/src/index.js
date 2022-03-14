import './css/index.css'

// Affichage d'une section selon son id
function displaySection(){
  
  const sectionId = window.location.hash

  // Supprime la classe active sur la section actuellement active (s'il y en a une)
  const sectionActive = document.querySelector('section.active') // selecteur CSS, une section avec la classe "active"
  if(sectionActive)
    sectionActive.classList.remove('active')

  // Ajoute la classe active sur la nouvelle section (si elle existe)
  const nouvelleSection = document.querySelector(sectionId)
  if(nouvelleSection)
    nouvelleSection.classList.add('active')

  // Supprime/Ajoute la classe active sur le lien (s'il existe)
  const lienActif = document.querySelector('nav a.active') // selecteur CSS, un lien dans "nav" avec la classe "active"
  if(lienActif)
    lienActif.classList.remove('active')

  // On va itérer tous les éléments de la navigation, pour trouver celui qui nous intéresse
  // et y ajouter la classe active
  domForEach('nav a', (element) => { // selecteur CSS, un lien dans "nav"
    // Si c'est bien l'élément qu'on cherche, on ajoute la classe active ou sinon on l'enlève
    if(element.hash == sectionId)
      element.classList.add('active')
    else
      element.classList.remove('active')
  })
}

// function displaySection ()  {
//   const sectionId = window.location.hash || '#home-section'
//   document.querySelector('section.active')?.classList.remove('active')
//   document.querySelector(sectionId)?.classList.add('active')
//   document.querySelector('nav a.active')?.classList.remove('active')
//   document.querySelector('nav a[href="' + sectionId + '"]')?.classList.add('active')
//   if(sectionId == '#artistes-section')
    // Supprime/Ajoute la classe active sur le lien (s'il existe)
   // Supprime la classe active sur la section actuellement active (s'il y en a une)
  //const sectionActive = document.querySelector('section.active') // selecteur CSS, une section avec la classe "active"
  if(sectionActive)
    sectionActive.classList.remove('active')

  // Ajoute la classe active sur la nouvelle section (si elle existe)
  const nouvelleSection = document.querySelector(sectionId)
  if(nouvelleSection)
    nouvelleSection.classList.add('active')

  // Supprime/Ajoute la classe active sur le lien (s'il existe)
  const lienActif = document.querySelector('nav a.active') // selecteur CSS, un lien dans "nav" avec la classe "active"
  if(lienActif)
    lienActif.classList.remove('active')

  // On va itérer tous les éléments de la navigation, pour trouver celui qui nous intéresse
  // et y ajouter la classe active
  domForEach('nav a', (element) => { // selecteur CSS, un lien dans "nav"
    // Si c'est bien l'élément qu'on cherche, on ajoute la classe active ou sinon on l'enlève
    if(element.hash == sectionId)
      element.classList.add('active')
    else
      element.classList.remove('active')
  })
  loadArtistesSection()


// Listener hashchange pour l'history
// Lorsque l'utilisateur clique sur un lien avec un hash (ex. #player-section), cet événement est appelé. Cela
// nous informe que l'URL a changé et qu'il est maintenant possible d'en faire quelque chose.
// Nous passons comme callback la fonction définie plus haut qui va traiter cette info
window.addEventListener('hashchange', displaySection)

// Affichage au chargement
displaySection()

function afficherArtiste(artiste) {
  const newArtist = artistListItemTemplate.content.clodeNode(true)
  newArtist.querySelector('a').href = '#artists-' + artiste.id
  newArtist.querySelector('img').src = artiste.image_url
  newArtist.querySelector('.artist-list-item-title').innerText = artiste.name
  artistList.append(newArtist)
}

function afficherArtistes(artises) {
  artistList.replaceChildren();
  for(const artiste of artistes)
 { 
   afficherArtiste(artiste)
 }}

 fetch('https://webmob-ui-22-spotlified.herokuapp.com/api/artists') // Va charger les artistes sur le serveur et retourne la réponse par défaut 
 .then((response) => { const artistes = response.json() // On prend la réponse de base et on la converti en JSON. // Cela retournera un tableau d’artistes
const artist = artistes[0] // On prend le premier élément du tableau artistes 
console.log(artist) // On affiche le premier artiste
})

function chargerArtistes() {
  
}