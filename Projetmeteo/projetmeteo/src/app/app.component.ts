import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string = '';
  weatherData: any;
  errorMessage: string = '';  // Ajouter une propriété pour le message d'erreur

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(
      data => {
        this.weatherData = data;
        this.errorMessage = '';  // Réinitialiser le message d'erreur en cas de succès
      },
      error => {
        console.error('Erreur lors de la récupération des données météo', error);
        this.weatherData = null;  // Réinitialiser les données météo en cas d'erreur
        this.errorMessage = 'Nom de la ville incorrect ou erreur de récupération des données.';  // Définir le message d'erreur
      }
    );
  }
}
