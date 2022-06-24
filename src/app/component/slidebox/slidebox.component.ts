import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebox',
  templateUrl: './slidebox.component.html',
  styleUrls: ['./slidebox.component.css']
})
export class SlideboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [{
    image: '../../../assets/pasta.jpg',
    thumbImage: '../../../assets/pasta.jpg',
    title: 'Delicious pasta'
}, {
    image: '../../../assets/pizza.jpg',
    thumbImage: '../../../assets/pizza.jpg',
    title: 'Pizza'
}, {
    image: '../../../assets/pasta.jpeg',
    thumbImage: '../../../assets/chilli_potato.jpg',
    title: 'Chilli potato.'
}];

}
