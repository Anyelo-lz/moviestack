const $detallePeliculas= document.getElementById("detalle")
const queryParams= new URLSearchParams(location.search)
const idPeli = queryParams.get("id")
console.log(idPeli)
 
const peli = movie.find(cine=>cine.id==idPeli)
 
$detallePeliculas.innerHTML=( 
`
 <div class="text-white flex flex-wrap justify-evenly ">
   <img class=" w-1/3 object-contain m-5 " src="${peli.image}" alt="image the movie"> 
   <section class="m-10 ">
    <h3 class="text-white text-2xl w-2/3 ">${peli.title}</h3>
    <p class="text-white mt-5  w-64">${peli.tagline}</p>
    <p class="text-white my-5 ">${peli.genres}</p>

    <p class=" text-white text-sm w-64 ">${peli.overview}</p>
    </section>  

    <div class="flex  gap-44">  
<table class="border-collapse border border-slate-500 m-5   ">
 <tr>  
 <td class="border border-slate-600 px-10 py-5 ">original language</td>
 <td class="border border-slate-600  px-10 py-5">${peli.original_language}</td>
 </tr>
 <tr> 
 <td class="border border-slate-600 px-10 py-5">release date</td> 
 <td class="border border-slate-600 px-10 py-5">${peli.release_date}</td>
 </tr>
 <tr>
 <td class="border border-slate-600 px-10 py-5">runtime</td> 
 <td class="border border-slate-600 px-10 py-5">${peli.runtime}</td>
 </tr>
 <tr>
 <td class="border border-slate-600 px-10 py-5">status</td> 
 <td class="border border-slate-600 px-10 py-5">${peli.status}</td>
 </tr>
 </table>

 <table class="border-collapse border border-slate-500 m-5">
 <tr  >  
 <td class="border border-slate-600 px-10 py-5">vote average</td>
 <td class="border border-slate-600  px-10 py-5">${peli.vote_average}</td>
 </tr>
 <tr> 
 <td class="border border-slate-600 px-10 py-5">budget</td> 
 <td class="border border-slate-600 px-10 py-5">${peli.budget.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
 </tr>
 <tr>
 <td class="border border-slate-600 px-10 py-5">revenue</td> 
 <td class="border border-slate-600 px-10 py-5">${peli.revenue.toLocaleString("en-US",{style:"currency",currency:"USD"})}</td>
 </tr>
 </table>
 </div>
 `)
