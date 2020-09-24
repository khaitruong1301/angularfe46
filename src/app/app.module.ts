import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './data-binding/data-binding.module';

@NgModule({
  declarations: [
    AppComponent,
    //Các component sử dụng (lẫn nhau) trong module này
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule ,
    DataBindingModule
    // Nơi để import các module khác vào module này
  ],
  providers: [],
  bootstrap: [AppComponent] //Nơi chứa component sử dụng trong index.html
})
export class AppModule { }
