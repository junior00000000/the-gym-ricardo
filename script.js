let menuVisible = false;

// Función que oculta/muestra el menu

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  // oculta el menu una vez seleccionada una opcion

  document.getElementById("nav").classList = "";
  menuVisible = false;
}