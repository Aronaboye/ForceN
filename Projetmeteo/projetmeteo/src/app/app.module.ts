// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';  // Importer FormsModule pour ngModel
// import { HttpClientModule } from '@angular/common/http';  // Importer HttpClientModule

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//     // Ajouter d'autres composants ici si nécessaire
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,       // Ajouter FormsModule ici
//     HttpClientModule  // Ajouter HttpClientModule ici
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpClientModule  // Ajouter HttpClientModule ici
  ],
  providers: [
    provideHttpClient(withFetch())  // Activer fetch API avec HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
