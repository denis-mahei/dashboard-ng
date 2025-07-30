import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForOf } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Contact } from '../models/contact.interface';

@Component({
  selector: 'app-contact',
  imports: [NgForOf, MatCard, MatButton],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @Input() contacts!: Contact[];
  @Output() onDeleteContact = new EventEmitter<number>();

  trackById(index: number, item: Contact): number {
    return item.id;
  }
}
