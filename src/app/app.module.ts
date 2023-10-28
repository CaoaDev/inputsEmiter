import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { InputService } from './service/input-service.service';

@NgModule({
 declarations: [
    AppComponent // Declaración del componente principal
 ],
 imports: [
    BrowserModule, // Importación del módulo para navegadores
    BrowserAnimationsModule, // Importación del módulo para animaciones
    DashboardModule // Importación del módulo Dashboard
 ],
 providers: [InputService], // Inyección del servicio InputService en el módulo
 bootstrap: [AppComponent] // Componente principal que se usará al iniciar la aplicación
})
export class AppModule { }
