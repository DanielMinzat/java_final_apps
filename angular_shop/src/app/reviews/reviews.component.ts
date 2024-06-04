import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
  reviews = [
    { text: 'Aceasta agenție de turism este minunată! Am avut o vacanță de neuitat.', author: 'Ana M.', rating: 5 },
    { text: 'Profesionalism și servicii excelente. Recomand cu încredere!', author: 'Ion P.', rating: 4 },
    { text: 'Totul a fost perfect organizat. Mulțumim pentru o experiență deosebită!', author: 'Maria D.', rating: 5 },
    { text: 'Am apreciat foarte mult atenția la detalii și suportul oferit pe tot parcursul călătoriei.', author: 'George T.', rating: 5 },
    { text: 'O experiență fantastică! Vom apela din nou la serviciile acestei agenții.', author: 'Elena V.', rating: 4 },
    { text: 'Recomand cu căldură! Vacanța noastră a fost exact cum ne-am dorit.', author: 'Mihai F.', rating: 5 },
    { text: 'Agenția ne-a oferit cele mai bune recomandări și pachete de vacanță. Mulțumim!', author: 'Cristina B.', rating: 4 }
  ];






  currentIndex = 0;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }, 3000)
  }

}
