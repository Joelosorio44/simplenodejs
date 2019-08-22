window.onload = function(){

    peticionAPI()
        
}


function peticionAPI(){
    let mensaje = new XMLHttpRequest()

    mensaje.open("GET","https://api.sheety.co/5c34824b-0097-4e84-b841-e38fb0fbe1cd")

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
    noticias.forEach(
        function(noticia){
            //console.log("El titulo es: " + noticia.titulo)
            let articuloMatriz = document.querySelector(".noticia")
            let articuloCopia = articuloMatriz.cloneNode(true)
            articuloCopia.querySelector("h3").innerText = noticia.titulo
            articuloCopia.querySelector("a").innerText = noticia.autor
            articuloCopia.querySelector("p:nth-of-type(2)").innerText = noticia.detalle
            articuloCopia.querySelector("img").src = noticia.imagen

            articuloCopia.classList.remove("d-none")

            document.querySelector("#ultimas-noticias").appendChild(articuloCopia)
        }

    )

}