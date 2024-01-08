console.log(moviestack)
const traerMovie = document.getElementById("movieTwo")
const elementosCard = (title, image, homepage, overview) => {
    return `
    <div class="w-1/4 border rounded-3xl border-dashed border-4 border-violet-600">
     <section class="p-5">
    <h3 class="text-white  m-5 text-lg text-center">${title}</h3>
    <a href="${homepage}"><img class="pr-10 m-5 " src="${image}" alt=""></a>
    <p class="text-white text-justify text-xs ">${overview}</p>
    </section>
    </div>`
}
const recorriendotwocard = (elementos) => {
    let $contadortwo = " "
    for (const recorridotwo of elementos) {
        $contadortwo += elementosCard(recorridotwo.title, recorridotwo.image, recorridotwo.homepage,recorridotwo.overview
        ) 
    }
    return $contadortwo 
}
traerMovie.innerHTML=recorriendotwocard(moviestack)
//----------------------------------------------------------------

// evento de genero de la lista desplegable
/*GeneroMovie.addEventListener("change",(e) =>{
    console.log(e.target.value)
    
})*/
//evento de input por teclado
const $busquedaContenido=document.getElementById("busqueda")
$busquedaContenido.addEventListener("input",(text)=>{
    console.log($busquedaContenido.value)
    const filtromoviefilm =filtarPelisPorNombres(moviestack, $busquedaContenido.value)
    traerMovie.innerHTML=recorriendotwocard(filtromoviefilm)//fltracion con el evento del input
})


//----------------------filtro de las peliculas------------------
function filtarPelisPorNombres(listmoviestack,titleMovie){
    return listmoviestack.filter(moviest=>moviest.title.toLowerCase().includes(titleMovie.toLowerCase()))
    
}

//--------------evento de Genero-------------------------
const $GeneroMovie = document.getElementById("Genero")
$GeneroMovie.addEventListener("change", (e) => {
    const generoSeleccionado = e.target.value
    const peliculasFiltradas = seleccionGenero(moviestack, generoSeleccionado)
    traerMovie.innerHTML = recorriendotwocard(peliculasFiltradas)
})

//---------------filtro por genero-------------------------------------
function seleccionGenero(listmovi, genero) {
    return listmovi.filter(movie => movie.genres.includes(genero))
}


 