window.onload = function(){

    peticionAPI()
        
}


function peticionAPI(){
    let mensaje = new XMLHttpRequest()

    mensaje.open("GET","https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.clarin.com%2Frss%2Fdeportes")

    mensaje.send()

    mensaje.onload = inflarEnanos
    
    function inflarEnanos(){
        if(mensaje.status == 200){
         noticias = JSON.parse(mensaje.response)
         renderizar(noticias)

           
        }
    }
}

function renderizar(noticias){
    //console.log(noticias)
    noticias.items.forEach(
        function(noticia){
            //console.log("El titulo es: " + noticia.titulo)
            let articuloMatriz = document.querySelector(".noticia")
            let articuloCopia = articuloMatriz.cloneNode(true)

            articuloCopia.querySelector("h3").innerText = noticia.title
            articuloCopia.querySelector("a").innerText = noticia.author
            articuloCopia.querySelector("p:nth-of-type(2)").innerText = noticia.description
            articuloCopia.querySelector("img").src = noticia.enclosure.link

            articuloCopia.classList.remove("d-none")

            document.querySelector("#ultimas-noticias").appendChild(articuloCopia)
        }

    )

}