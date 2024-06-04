// contact-form.component.ts
import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  // Definirea variabilelor pentru stocarea datelor introduse de utilizator
  showForm: boolean = false;
  name: string = '';
  email: string = '';
  phone: string = '';
  destination: string = '';

  toggleForm() {
    this.showForm = !this.showForm;
    console.log("show form", this.showForm);
  }

  // Funcția pentru trimiterea formularului
  submitForm() {
    // Validare simplă pentru a verifica dacă toate câmpurile sunt completate
    if (this.name && this.email && this.phone && this.destination) {
      // Aici poți implementa logica pentru trimiterea datelor către server
      // și afișarea alertei popup cu datele introduse de utilizator
      alert(`Ai completat formularul cu următoarele detalii:
      Nume: ${this.name}
      Email: ${this.email}
      Telefon: ${this.phone}
      Destinație dorită: ${this.destination}`);
    } else {
      // Afișează un mesaj de eroare dacă nu toate câmpurile sunt completate
      alert("Te rugăm să completezi toate câmpurile.");
    }
    this.toggleForm(); // inchide formularul dupa trimitere
  }
}
