import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputRecepComponent } from './input-recep/input-recep.component';
import { ShowTextComponent } from './show-text/show-text.component';

@NgModule({
 declarations: [InputRecepComponent, ShowTextComponent],
 imports: [
    CommonModule,
    FormsModule
 ],
 exports: [InputRecepComponent, ShowTextComponent]
})
export class DashboardModule { }