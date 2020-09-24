import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding/data-binding.component';
//Tại thư viện nào sử dụng twowaybinding sẽ import formsmodule
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [DataBindingComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[DataBindingComponent]
})
export class DataBindingModule { }
