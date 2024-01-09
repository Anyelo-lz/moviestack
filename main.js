 
   
    
  const traerMovie = document.getElementById("movieTwo")
 
  export  const elementosCard = (title, image, overview, id) => {
    return `
    <div class="w-1/4 border rounded-3xl border-dashed border-4 border-violet-600">
    <section class="p-5">
    <h3 class="text-white m-5 text-lg text-center">${title}</h3>
    <a href="./detallePeli.html?id=${id}"><img class="pr-10 m-5" src="${image}" alt="image movie"> </a> 
    <p class="text-white text-justify text-xs ">${overview}</p>  
    </section>
    </div>  `
 }
 
 export const recorriendotwocard = (elementos) => {
    let $contadortwo = " "
    for (const recorridotwo of elementos) {
        $contadortwo += elementosCard(recorridotwo.title, recorridotwo.image, recorridotwo.overview, recorridotwo.id)
    }
 
    return $contadortwo
 }
 traerMovie.innerHTML = recorriendotwocard(movie)
 
 export function aplicarFiltros() {
    const filtroTitulo = $busquedaContenido.value
    const filtroGenero = $GeneroMovie.value
 
    const peliculasFiltradas = filtrarPorTituloYGenero(movie, filtroTitulo, filtroGenero)
    traerMovie.innerHTML = recorriendotwocard(peliculasFiltradas)
 }
 
 
 // Evento de input por teclado
 const $busquedaContenido = document.getElementById("busqueda")
 $busquedaContenido.addEventListener("input", aplicarFiltros)
 
 // Evento de cambio de género
 const $GeneroMovie = document.getElementById("Genero")
 $GeneroMovie.addEventListener("change", aplicarFiltros)
 
  export  function filtrarPorTituloYGenero(listmoviestack, tituloPelicula, genero) {
    return listmoviestack.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(tituloPelicula.toLowerCase()) &&
        (genero === "Todos" || pelicula.genres.includes(genero))
    )
 
 }

  