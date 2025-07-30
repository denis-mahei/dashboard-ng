import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { Contact } from './models/contact.interface';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    MatToolbar,
    NgIf,
    FormsModule,
    ContactComponent,
    FormComponent,
  ],
  templateUrl: `app.component.html`,
  styleUrl: `app.component.scss`,
})
export class AppComponent implements OnInit {
  @Input() contacts = [
    { id: 1, name: 'Andrii', phone: '1234567890' },
    { id: 2, name: 'Sofiya', phone: '0987654321' },
  ];

  handleAdd(contact: Contact) {
    this.contacts.push(contact);
    this.updateLocalStorage();
  }

  handleDelete(contactId: number) {
    this.contacts = this.contacts.filter((item) => item.id !== contactId);
    this.updateLocalStorage();
  }

  ngOnInit(): void {
    const saved = localStorage.getItem('contacts');

    if (saved) this.contacts = JSON.parse(saved);
  }

  private updateLocalStorage(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
