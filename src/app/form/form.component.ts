import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Contact } from '../models/contact.interface';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatLabel,
    MatFormField,
    FormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  nameControl = new FormControl('');
  phoneControl = new FormControl('');

  addContact() {
    const name = this.nameControl.value;
    const phone = this.phoneControl.value;

    if (name && phone) {
      const newContact = { id: Date.now(), name, phone };

      this.onAddContact.emit(newContact);

      this.nameControl.reset();
      this.phoneControl.reset();
    }
  }

  @Output() onAddContact = new EventEmitter<Contact>();
}
