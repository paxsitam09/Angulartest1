import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsModule } from './fruits/fruits.module';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FruitsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
