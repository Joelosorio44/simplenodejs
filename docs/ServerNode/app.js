let http = require("http")
let fs = require("fs")

http.createServer( procesar ).listen(80)

function procesar(peticion, respuesta){
    let url = peticion.url.substr(1)

    fs.readFile(url, function(error, archivo){

        if(error){
            respuesta.end("Archivo no disponible :(")
        } else{
            respuesta.end( archivo )
            

        }

    })

    

}

