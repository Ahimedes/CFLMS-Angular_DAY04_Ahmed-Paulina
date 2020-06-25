import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: '',
      address: '',
      message: ''
    });

  }

  ngOnInit(): void {
  }

  onSubmit(Data) {
    console.warn('Your message has been sent to the void', Data)
    this.contactForm.reset();
  }

}
