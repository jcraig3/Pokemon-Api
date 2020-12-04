const elements = document.querySelectorAll('li')

for (let element of elements) {
  element.addEventListener('click', getPokemon)
}

const picture = document.querySelector('#picture')
const info = document.querySelector('#info')

async function getPokemon(event) {
  let name = event.target.textContent.toString()
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name.toLowerCase())
  const data = await response.json()
  pokemonName.textContent = name
  picture.src = data.sprites.front_default
  height.textContent = "Height: " + data.height
  weight.textContent = "Weight: " + data.weight
  baseExpeience.textContent = "Base experience: " + data.base_experience
}
