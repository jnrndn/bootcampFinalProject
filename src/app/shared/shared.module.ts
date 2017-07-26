import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from "./form/form.component";
import { MdInputModule, MdCardModule, MdButtonModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule
    
  ],
  declarations: [FormComponent],
  exports:[FormComponent]
})
export class SharedModule { }
