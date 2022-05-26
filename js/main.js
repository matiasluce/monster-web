
// COLOCANDO EL HEADER Y FOOTER

document.getElementById("header").innerHTML = `
        <nav>
        <a href="index.html"
          ><img
            src="./img/logo.webp"
            alt="monster energy logo"
            class="logo-nav"
        /></a>
        <div class="nav-links">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="sabores.html">Sabores</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <a class="hmb-icon" onclick="abrirMenu()"><i class="fa-solid fa-bars"></i></a>
      </nav>
      <div class="hero-container">
        <p class="slogan">Unleash the beast</p>
        <img src="img/hero-monster.webp">
      </div>
`

document.getElementById("footer").innerHTML = `
      <img
        src="./img/logo.webp"
        alt="monster energy logo"
        class="footer-logo"
      />
      <div class="footer-links">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="sabores.html">Sabores</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="social-media">
        <a href="https://www.youtube.com/channel/UCg1uYO329KcAEN-PQdoQMKQ"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/monsterenergy"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/monsterenergyar"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.facebook.com/MonsterEnergy/"><i class="fa-brands fa-facebook"></i></a>
      </div>
`

/* COLOCANDO EL MENU HAMBURGUESA */

document.querySelector('.menu-ham').innerHTML = `
<i class="fa-solid fa-xmark" id="close-menu" onclick="cerrarMenu()"></i>
      <ul>
        <li style="--clr: #00ade1">
          <a href="index.html" data-text="&nbsp;Home">&nbsp;Home&nbsp;</a>
        </li>
        <li style="--clr: #ff6493">
          <a href="sabores.html" data-text="&nbsp;Sabores"
            >&nbsp;Sabores&nbsp;</a
          >
        </li>
        <li style="--clr: #ffdd1c">
          <a href="contacto.html" data-text="&nbsp;Contacto"
            >&nbsp;Contacto&nbsp;</a
          >
        </li>
      </ul>
`


/* VALIDACIÓN FORM */

function validarForm(){
  let nombre = document.getElementById('nombre');
  let email = document.getElementById('email');
  let mensaje = document.getElementById('mensaje');
  let errorMsj = document.querySelector('.errM');
  let errorNombre = document.querySelector('.errN');
  let errorEmail = document.querySelector('.errE');

  /* VALIDACIÓN QUE EL NOMBRE TENGA MÁS DE 4 CARACTERES */
  if(nombre.value.length < 4){
    errorNombre.classList.add('visible');
    nombre.classList.add("bad");
  }
  else{
    errorNombre.classList.remove('visible');
    nombre.classList.remove('bad');
    nombre.classList.add('good');
  }

  /* VALIDACIÓN QUE EL CORREO CONTENGA @ Y QUE TENGA MÁS DE 10 CARACTERES */

  if(!(email.value).includes('@')){
    email.classList.add('bad');
    errorEmail.classList.add('visible');
  }
  else{
    if(email.value.length > 10){
      email.classList.add('good');
      email.classList.remove('bad');
      errorEmail.classList.remove('visible');
    }
  }

  /* VALIDACIÓN QUE EL MENSAJE TENGA MÁS DE 10 CARACTERES */

  if(mensaje.value.length < 10){
    errorMsj.classList.add('visible');
    mensaje.classList.add('bad');
  }
  else{
    mensaje.classList.add('good');
    mensaje.classList.remove('bad');
    errorMsj.classList.remove('visible');
  }
}

/* FUNCIONES PARA ABRIR Y CERRAR EL MENÚ HAMBURGUESA */

function cerrarMenu(){
  let menu = document.querySelector('.menu-ham');
  menu.classList.add("menu-off");
}

function abrirMenu(){
  let menu = document.querySelector('.menu-ham');
  menu.classList.remove("menu-off");
}


/* VUE */

const app = new Vue({
  el:'#app',
  data:{
    datos: {},
    section: "og"
  },
  created(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      fetch("https://raw.githubusercontent.com/matiasluce/monster-web/main/data/monster.json")
      .then(response => response.json())
      .then(data =>{
        this.datos = data.monsters;
      })
    }
  }
})