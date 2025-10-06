import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardTitle,
  MatCardContent,
  MatCardActions,
  MatCardImage
} from '@angular/material/card';
import { Country } from '../../../domain/model/Country-api.entity';
import { MatButton } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-countries-item',
  standalone: true,
  imports: [MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    ClipboardModule,
    CommonModule,],
  templateUrl: './countries-item.html',
  styleUrls: ['./countries-item.css']
})
export class CountriesItemComponent {
  @Input() country!: Country;


learnMore(): void {
    const query = encodeURIComponent(this.country.name);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  }

  shareCountry(): void {
    const url = `https://www.google.com/search?q=${encodeURIComponent(this.country.name)}`;
    const shareData = {
      title: `Información sobre ${this.country.name}`,
      text: `Aprende más sobre ${this.country.name}`,
      url: url,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(err => console.error('Error al compartir:', err));
    } else {
      navigator.clipboard.writeText(url)
        .then(() => alert('URL copiado al portapapeles'))
        .catch(() => alert('Error al copiar al portapapeles'));
    }
  }
}
