import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class InputService {
 private cantidad = new BehaviorSubject<number>(0); // Inicializa el BehaviorSubject con 0
 cantidadActual = this.cantidad.asObservable(); // Expone el BehaviorSubject como un Observable
 sumaAcumulada: number = 0; // Variable para mantener la suma acumulada

 constructor() {}

 cambiarCantidad(cantidad: number) {
    this.sumaAcumulada += cantidad; // Sumar el nuevo valor a la suma acumulada
    this.cantidad.next(this.sumaAcumulada); // Actualizar el BehaviorSubject con la suma acumulada
 }
}
