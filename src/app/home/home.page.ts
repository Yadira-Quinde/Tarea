import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  nombreUsuario: string = 'Nombre de Usuario';
  nuevoNombre: string = '';
  editando: boolean = false;
  
  imagenAvatar: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  
  descripcion: string = 'Agregar descripción';
  nuevaDescripcion: string = '';
  editandoDesc: boolean = false;

  celular: string = 'Agregar celular';
  nuevoCelular: string = '';
  editandoCel: boolean = false;

  mensajeError: string = '';

  constructor() {}

  // Logica para el Nombre de Usuario
  abrirEdicion() {
    this.nuevoNombre = this.nombreUsuario;
    this.editando = true;
  }
  
  guardarNombre() {
    this.nombreUsuario = this.nuevoNombre;
    this.editando = false;
  }

  cancelar() {
    this.editando = false;
  }
  
  // Lógica para la Descripción
  abrirDesc() {
    this.nuevaDescripcion = this.descripcion;
    this.editandoDesc = true;
  }

  guardarDescripcion() {
    this.descripcion = this.nuevaDescripcion;
    this.editandoDesc = false;
  }

  cancelarDesc() { 
    this.editandoDesc = false; 
  }

  // Lógica para IMAGEN AVATAR
  SeleccionarArchivo(event: any) {
    const archivo = event.target.files[0]; 
    
    if (archivo) {
      const reader = new FileReader(); 
      
      reader.onload = (e: any) => {
        this.imagenAvatar = e.target.result;
      };
      reader.readAsDataURL(archivo); // Convierte el archivo a una URL legible
    }
  }

  // Lógica para el Celular
  abrirEdicionCel() {
    this.nuevoCelular = this.celular ;
    this.editandoCel = true;
    this.editando = false;
    this.editandoDesc = false;
  }

  guardarCelular() {
    // VALIDACIONES
    const regexSoloNumeros = /^[0-9]+$/;
    const tel = this.nuevoCelular.trim();

    if (!tel) {
      this.mensajeError = 'El campo no puede estar vacío';
      return;
    }
    
    if (!regexSoloNumeros.test(this.nuevoCelular)) {
      this.mensajeError = ('Por favor, ingresa solo números');
      return;
    }

    if (tel.length !== 10) {
      this.mensajeError = ('El número debe tener 10 dígitos');
      return;
    }

    this.mensajeError = ''
    this.celular = this.nuevoCelular;
    this.editandoCel = false;
  }

  cancelarCel() {
    this.mensajeError = '';
    this.editandoCel = false;
  }
}
