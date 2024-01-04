console.log(moviestack)
const traerMovie = document.getElementById("movieTwo")
console.log(traerMovie)

const elementosCard = (title, image, homepage, overview, release_date, runtime, vote_average, vote_count) => {
    return `
    <div class="w-2/4 ">
     <section class="p-10">
    <h3 class="text-white  m-5 text-2xl text-center">${title}</h3>
    <a href="${homepage}"><img class=" mx-5 block w-auto" src="${image}" alt=""></a>
    <p class="text-white  text-xs my-5 ml-10">${overview}</p>
    <p class="text-white mx-2 ml-5 ">Vote average: ${vote_average}</p>
    <p class="text-white mx-2 ml-5">Vote count: ${vote_count}</p>
    <p class="text-white mx-2 ml-5">Release date: ${release_date}</p>
    <p class="text-white mx-2 ml-5 ">Runtime: ${runtime} min.</p>
    </section>
    </div>
    `
}
const recorriendotwocard = (elementos) => {
    let $contadortwo = ""
    for (const recorridotwo of elementos) {
        $contadortwo += elementosCard(recorridotwo.title, recorridotwo.image, recorridotwo.homepage,recorridotwo.overview, 
        recorridotwo.release_date, recorridotwo.runtime, recorridotwo.vote_average, recorridotwo.vote_count)
    }
    return $contadortwo
}
traerMovie.innerHTML = (recorriendotwocard(moviestack))

