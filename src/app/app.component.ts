import { Component } from '@angular/core';
import { InputService } from './service/input-service.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private inputService: InputService) {} // Inyección del servicio InputService en el componente
}
