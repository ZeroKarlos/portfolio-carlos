//Funcion que me aplica el estilo a la opcion seleccionada en el menu y la quita previamente seleccionado
function seleccionar(link){
    let opciones =document.querySelectorAll('#links a');
    opciones [0].className="";
    opciones [1].className="";
    opciones [2].className="";
    opciones [3].className="";
    opciones [4].className="";

    link.className ="seleccionado";

    //hacemos desaparecer el menu una vez que se seleccione
    let x = document.getElementById("nav");
    x.className ="";
}

//Funcion que muestra el menu del responsive
function responsiveMenu(){
    let x =document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function (){
    efectoHabilidades()
};

//Funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    let skills = document.getElementById ("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientReact().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}