let noticias 

window.onload = function(){

    let mensaje = new XMLHttpRequest()

    mensaje.open("GET","https://api.sheety.co/5c34824b-0097-4e84-b841-e38fb0fbe1cd")

    mensaje.send()

    mensaje.onload = inflarEnanos
    
    function inflarEnanos(){
        if(mensaje.status == 200){

            console.log(mensaje.response)

            noticias = JSON.parse(mensaje.response) 
        }
              
    }
  

}