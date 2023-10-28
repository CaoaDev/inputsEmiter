import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/service/input-service.service';

@Component({
 selector: 'app-show-text',
 templateUrl: './show-text.component.html',
 styleUrls: []
})
export class ShowTextComponent implements OnInit {
 cantidadActual!: number; // Variable para almacenar la cantidad actual

 constructor(private inputService: InputService) {}

 ngOnInit(): void {
    // Suscripción al servicio para recibir actualizaciones de la cantidad
    this.inputService.cantidadActual.subscribe(cantidad => this.cantidadActual = cantidad);
 }
}
