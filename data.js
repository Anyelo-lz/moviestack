const url = "https://moviestack.onrender.com/api/movies"
const apiKey = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
const favoritoslist = JSON.parse(localStorage.getItem('favoritos')) || []
const favoritos = favoritoslist.slice()
const $contenidoDePeliculas = document.getElementById("contenidoDePeliculas")
const $busquedaContenido = document.getElementById("busquedaPorInput")
const $GeneroMovie = document.getElementById("Genero")
const $aplicarFiltrosButton = document.getElementById("aplicarFiltros")
const favoritosContainer = document.getElementById('favoritos-container')
 


document.addEventListener('DOMContentLoaded', function () {
  // Recuperar datos del localStorage y mostrar las películas favoritas
  if (favoritosContainer) {
    favoritoslist.forEach((pelicula) => {
      const peliculaHTML =
        `<div class="w-1/4 border rounded-3xl border-dotted border-4 border-violet-600">
        <button class="heart-btn" data-id="${pelicula.id}" onclick="toggleFavorite(this, true)">
          <img class="heart-img w-10 m-5" src="./img/corazon.png" alt="">
        </button>
        <section class="p-5">
          <h3 class="text-white text-lg text-center">${pelicula.title}</h3>
          <img class="pr-10 m-5" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="imagen película">
          <p class="text-white text-justify text-xs">${pelicula.overview}</p>
          </section>
      </div>`
      favoritosContainer.innerHTML += peliculaHTML
    })
  }
  // --------------------Filtros de peliculas y Generos-------------------
  
  function filtrarPorTituloYGenero(listmoviestack, tituloPelicula, genero) {
    const moviesArray = Array.from(listmoviestack)  
    return moviesArray.filter((pelicula) => {
      const tituloCoincide = pelicula.title.toLowerCase().includes(tituloPelicula.toLowerCase())
      const esGeneroValido = pelicula.genres.includes(genero)
      return tituloCoincide && esGeneroValido
    });
  }
  
  function aplicarFiltros() {
    const filtroTitulo = $busquedaContenido.value
    const filtroGenero = $GeneroMovie.value
    const peliculasFiltradas = filtrarPorTituloYGenero(data.movies, filtroTitulo, filtroGenero)
    $contenidoDePeliculas.innerHTML = recorriendoDeLasPropiedadesDeLasPeliculas(peliculasFiltradas)
  }
  // Agregar eventos para filtros de búsqueda
  
  if ($aplicarFiltrosButton && $busquedaContenido) {
    $aplicarFiltrosButton.addEventListener("click", aplicarFiltros)
    $busquedaContenido.addEventListener("input", aplicarFiltros)
  }
//---------------Consumiendo el Api y X-api-kay----------------------
  fetchData()
    .then(() => {
      console.log("Instruccion en finalizacion")
      vistaMovies()
    })
    .catch(error => console.error(error))
});

function vistaMovies() {
  if (data && $contenidoDePeliculas) {
    $contenidoDePeliculas.innerHTML = recorriendoDeLasPropiedadesDeLasPeliculas(data.movies)
  } 
}

function fetchData() {
  return fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then(response => response.json())
    .then(movieData => {
      data = movieData
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error)
    })
}
//--------------------------Pagina de Favoritos----------------------------------------------
function propiedadesDeLasPeliculas(title, image, overview, id) {
  const isFavorite = favoritos.some(movie => movie.id === id)
  const heartIcon = isFavorite ? 'corazon.png' : 'corazon_gris.png'

  return `<div class="w-1/4 border rounded-3xl border-dotted border-4 border-violet-600">
  <button class="heart-btn" data-id="${id}" onclick="toggleFavorite(this)">
    <img class="heart-img w-10 m-5" src="./img/${heartIcon}" alt="">
  </button>

  <section class="p-5">
    <h3 class="text-white text-lg text-center">${title}</h3>
    <a href="./favs.html" type=""?id=${id}"><img class="pr-10 m-5" src="https://moviestack.onrender.com/static/${image}" alt="imagen película"></a>
    <p class="text-white text-justify text-xs">${overview}</p>
  </section>
</div>`
}

function recorriendoDeLasPropiedadesDeLasPeliculas(elementos) {
  let $contadorDePeliculas = " "
  elementos.forEach(recorriendolasPeliculas => {
    $contadorDePeliculas += propiedadesDeLasPeliculas(recorriendolasPeliculas.title, recorriendolasPeliculas.image, recorriendolasPeliculas.overview, recorriendolasPeliculas.id)
  })
  return $contadorDePeliculas
}

function toggleFavorite(button, esFavoritoLaPagina) {
  const heartImage = button.querySelector('.heart-img')
  const movieId = button.getAttribute('data-id')
  const movie = data.movies.find(movie => movie.id.toString() === movieId)

  if (heartImage.src.includes('corazon_gris.png')) {
    heartImage.src = './img/corazon.png'
    if (movie) {
      favoritos.push(movie)
    }
  } else {
    heartImage.src = './img/corazon_gris.png'
    const index = favoritos.findIndex(favMovie => favMovie.id.toString() === movieId)
    if (index !== -1) {
      favoritos.splice(index, 1)
    }
  }

  localStorage.setItem('favoritos', JSON.stringify(favoritos))

}

 