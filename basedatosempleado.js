let empleados=Array(
    {
        id:1,
        nombre:"dayana borja",
        cargo:"peinadora y jefe",
        telefono:"3023137815",
        correo:"dayanaborja436@gmail.com",
        salario:5000000,
        contactoEmergencia:"3105792030",
        foto:"./img/empleado1.jpeg"
    },
    {
        id:2,
        nombre:"linda moreno",
        cargo:"peinadora 1",
        telefono:"3030552422",
        correo:"lindamoreno123@gmail.com",
        salario:2000000,
        contactoEmergencia:"3120524613",
        foto:"./img/empl2.jpeg" 
    },
    {
        id:3,
        nombre:"paola perrea",
        cargo:"resecionista",
        telefono:"3023136358",
        correo:"paolaperea36@gmail.com",
        salario:1500000,
        contactoEmergencia:"3152462553",
        foto:"./img/empl3.jpeg"
    },
    {
        id:4,
        nombre:"angelina berrio",
        cargo:"peinadora 2 ",
        telefono:"3035246310",
        correo:"angelinbee6@gmail.com",
        salario:2000000,
        contactoEmergencia:"3365201456",
        foto:"./img/empl4.jpg"
    },
    {
        id:5,
        nombre:"carla moreno",
        cargo:"asesora de imagen ",
        telefono:"335204625",
        correo:"carlaimg36@gmail.com",
        salario:2500000,
        contactoEmergencia:"3056750568",
        foto:"./img/empl5.webp"
    },
    {
        id:6,
        nombre:"riana",
        cargo:"publisidad",
        telefono:"3032546985",
        correo:"rianaasesora26@gmail.com",
        salario:1500000,
        contactoEmergencia:"3153245632",
        foto:"./img/emple6.jpg"
    },
    {
        id:7,
        nombre:"kata mendoza",
        cargo:"mano derecha",
        telefono:"3305623202",
        correo:"katamendosa36@gmail.com",
        salario:3000000,
        contactoEmergencia:"3520145698",
        foto:"./img/empl7.jpg"
    },
    {
        id:8,
        nombre:"andri cano",
        cargo:"ayudante de distribuidora",
        telefono:"3201456321",
        correo:"canoandri36@gmail.com",
        salario:1500000,
        contactoEmergencia:"363254560",
        foto:"./img/empl8.jpg"
    },
    {
        id:9,
        nombre:"juanSebastian",
        cargo:"destribuidor",
        telefono:"3205809325",
        correo:"juansebastian236@gmail.com",
        salario:1600000,
        contactoEmergencia:"31520305060",
        foto:"./img/empl9.jpg"
    },
    {
        id:10,
        nombre:"carlos moreno",
        cargo:"ayudante",
        telefono:"3120254632",
        correo:"carlosmendoza36@gmail.com",
        salario:1500000,
        contactoEmergencia:"3011152414",
        foto:"./img/emp10.jpg"
    },
    {
        id:11,
        nombre:"daison renteria",
        cargo:"descargador",
        telefono:"3023152016",
        correo:"daisonren436@gmail.com",
        salario:1500000,
        contactoEmergencia:"3153004560",
        foto:"./img/empl11.jpg"
    },
    {
        id:12,
        nombre:"jhaison martines",
        cargo:"mano derecha",
        telefono:"3023521365",
        correo:"jhaisonmarti36@gmail.com",
        salario:2000000,
        contactoEmergencia:"3105246220",
        foto:"./img/empl12.jpg" 
    },
    {
        id:13,
        nombre:"carlos perreaa",
        cargo:"asesor comercial",
        telefono:"350245698",
        correo:"carlosperrea36@gmail.com",
        salario:1500000,
        contactoEmergencia:"3154698523",
        foto:"./img/empl13.jpg"
    },
    {
        id:14,
        nombre:"monica junita",
        cargo:"peinadora3",
        telefono:"3524682159",
        correo:"monicad436@gmail.com",
        salario:2000000,
        contactoEmergencia:"3152469752",
        foto:"./img/empl14.jpg"
    },
    {
        id:15,
        nombre:"carolina machado",
        cargo:"monitora",
        telefono:"3056425895",
        correo:"carolinamo436@gmail.com",
        salario:1500000,
        contactoEmergencia:"352468520",
        foto:"./img/empl15.jpg" 
    },
    {
        id:16,
        nombre:"maria celeste",
        cargo:"2 asesora de imagen",
        telefono:"3054698203",
        correo:"mariacele36@gmail.com",
        salario:2000000,
        contactoEmergencia:"3152469852",
        foto:"./img/empl16.jpg"
    },
    {
        id:17,
        nombre:"karol g",
        cargo:"la de la publicidad",
        telefono:"3065245932",
        correo:"kalorg36@gmail.com",
        salario:2000000,
        contactoEmergencia:"302548963",
        foto:"./img/empl17.jpg"
    },
    {
        id:18,
        nombre:"laura borja",
        cargo:"peinadora de niñas",
        telefono:"3025456325",
        correo:"lauraniña145@gmail.com",
        salario:1500000,
        contactoEmergencia:"3520364552",
        foto:"./img/empl18.jpg"  
    },
    {
        id:19,
        nombre:"kata borja",
        cargo:"asiadora",
        telefono:"3032014569",
        correo:"kataborja36@gmail.com",
        salario:5000000,
        contactoEmergencia:"3105792030",
        foto:"./img/empl19.jpg"
    },
    {
        id:20,
        nombre:"mariana",
        cargo:"empleada2",
        telefono:"3052469825",
        correo:"marianim36@gmail.com",
        salario:1500000,
        contactoEmergencia:"3524652365",
        foto:"./img/empl20.jpg"
    }

)


//creando una referencia al contenedor de empleados
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos 

//1. Dedo recorrer la base de datos del problema
empleados.forEach(function(empleado){
    
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto


    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre


    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo


    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono


    let correo=document.createElement("h3")
    correo.textContent=empleado.correo


    let salario=document.createElement("h3")
    salario.textContent=empleado.salario



    //se asocian las estructuras en orden logico
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(correo)
   
    
})