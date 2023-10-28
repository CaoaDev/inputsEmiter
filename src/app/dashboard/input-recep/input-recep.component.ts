import { Component } from '@angular/core';
import { InputService } from 'src/app/service/input-service.service';

@Component({
 selector: 'app-input-recep',
 templateUrl: './input-recep.component.html',
 styleUrls: []
})
export class InputRecepComponent {
 cantidad: number | undefined; // Inicializado como undefined (para que el input comience en blanco)

 constructor(private inputService: InputService) {}

 emitirCantidad() {
    // Emitir la cantidad actual al servicio, usando 0 si cantidad es undefined
    this.inputService.cambiarCantidad(this.cantidad || 0);

    // Borrar el valor del input al emitir la cantidad
    this.cantidad = undefined;
 }

 limpiarInput() {
    // Borrar el valor del input al hacer clic
    this.cantidad = undefined;
 }
}
