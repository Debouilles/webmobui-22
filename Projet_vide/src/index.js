import './css/index.css'


// Affichage d'une section selon son id
function displaySection(){
    const sectionId = window.location.hash || '#home-section'
  
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
  
  // Listener hashchange pour l'history
  // Lorsque l'utilisateur clique sur un lien avec un hash (ex. #player-section), cet événement est appelé. Cela
  // nous informe que l'URL a changé et qu'il est maintenant possible d'en faire quelque chose.
  // Nous passons comme callback la fonction définie plus haut qui va traiter cette info
  window.addEventListener('hashchange', displaySection)
  
  // Affichage au chargement
  displaySection();

  const artistList = document.querySelector('.artist-list')
  const artistListItemTemplate = document.querySelector('#artist-list-item-template')

  function afficherArtistes(artiste) {
    const newArtist = artistListItemTemplate.content.clodeNode(true)
    newArtist.querySelector('a').href = '#artists-' + artiste.id
    newArtist.querySelector('img').src = artiste.image_url
    newArtist.querySelector('.artist-list-item-title').innerText = artiste.name
    artistList.append(newArtist)
  }
  
  async function afficherArtiste() {
      afficherRondDeChargement() 
      try {
      const response = await fetch('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
      const artistes = response.json()
      const artist = artistes[0]
      }
      catch (e) {
          alert('Il y a eu un problème')
      }
      finally {
          cacherRondDeChargement()
      }
  }

  afficherArtiste()
  afficherArtistes()
