// window.onload = init;
//     function init(){
//         document.querySelectorAll(".menus")[0].addEventListener("click",submenu);
//         document.querySelector(".menu > ul").style.display = "none";
//     }

//     function submenu(){
//         var estado = document.querySelector(".menus > ul").style.display;
//         if (estado == "none"){
//             document.querySelector(".menu > ul").style.display = "block";
//         }else{
//             document.querySelector(".menus > ul").style.display = "none";
//         };

const btn = document.querySelector("btn");
const modal = document.querySelector("#modal");
const salir = document.querySelector("#salir");

btn.addEventListener("click", () => {
  console.log("recibiendo datos");
  modal.showModal();
});

salir.addEventListener("click", () => {
  modal.close();
});

const enviar = document.querySelector("#enviar");

enviar.addEventListener("click", camposVacios);
console.log("Mensaje de prueba");

const nombreRegex = /\w{0,50}$/i;
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const celRegex = /^[3][0-9]$/;

function camposVacios() {
  nombre = document.querySelector("#inputName").value;
  apellido = document.querySelector("#lastName").value;
  email = document.querySelector("#email").value;
  phone = document.querySelector("#phone").value;

  if (nombre === "" || apellido === "" || email === "" || phone === "") {
    alert("Diligencie todos los campos");
  }

  if (nombreRegex.test(nombre) == false) {
    alert(error);
  }

  if (emailRegex.test(email) === false) {
    alert("formato incorrecto");
  }

  if (celRegex.test(phone) === false) {
    alert("formato incorrecto");
  }

  console.table(camposVacios);
}
