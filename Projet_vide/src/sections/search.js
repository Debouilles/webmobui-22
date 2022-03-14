const searchTrigger = document.querySelector('#search-trigger')
const searchInput = document.querySelector('#search-input')
searchTrigger.addEventListener('click', () => {
    searchInput.classList.add('active')
    searchInput.focus()
})

searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('active')
    searchInput.value = ''
})

searchInput.addEventListener('input', () => {
    window.location.hash = `#search-${encodeURIComponent(searchInput.value)}` //searchInput change l'URL avec l'input
})

