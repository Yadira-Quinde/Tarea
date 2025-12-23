import { Component } from '@angular/core';
import { IonAvatar, IonItem, IonLabel } from '@ionic/angular/standalone';

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
  
  descripcion: string = 'Sin descripción';
  nuevaDescripcion: string = '';
  editandoDesc: boolean = false;

  celular: string = 'Sin número';
  nuevoCelular: string = '';
  editandoCel: boolean = false;

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
  abrirEdicionDesc() {
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
  alSeleccionarArchivo(event: any) {
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
    this.nuevoCelular = this.celular === 'Sin número' ? '' : this.celular;
    this.editandoCel = true;
    this.editando = false;
    this.editandoDesc = false;
  }

  guardarCelular() {
    // VALIDACIONES
    const regexSoloNumeros = /^[0-9]+$/;
    
    if (!this.nuevoCelular) {
      alert('El campo no puede estar vacío');
      return;
    }
    
    if (!regexSoloNumeros.test(this.nuevoCelular)) {
      alert('Por favor, ingresa solo números');
      return;
    }

    if (this.nuevoCelular.length < 7 || this.nuevoCelular.length > 10) {
      alert('El número debe tener entre 7 y 10 dígitos');
      return;
    }

    this.celular = this.nuevoCelular;
    this.editandoCel = false;
  }

  cancelarCel() {
    this.editandoCel = false;
  }
}
