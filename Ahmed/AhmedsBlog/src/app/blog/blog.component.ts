import { Component, OnInit } from '@angular/core';
import { locations } from '../locations';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  locations=locations;

  constructor() { }

  ngOnInit(): void {
  }

}
