import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
	public images = [
		'https://faroutmagazine.co.uk/static/uploads/2020/10/Fleetwood-mac-rumours.jpg',
		'https://images-na.ssl-images-amazon.com/images/I/81GyxL3v7fL._SL1500_.jpg',
		'https://siachenstudios.com/wp-content/uploads/2021/08/cream-1016x1024.jpg',
		'http://4.bp.blogspot.com/_KK6Y9iRScpc/TMB3NM3yVNI/AAAAAAAABYI/dhffj4Hy0Io/s1600/dbas.jpg',
		'https://cdn.musebycl.io/2020-07/art-of-the-album-van-halen-hed-2020.jpg',
		'https://i.pinimg.com/originals/1d/67/86/1d67862d37e65d7b6a3b626b0d14ce04.jpg',
		'http://s3.amazonaws.com/rapgenius/boston1.jpg',
		'https://i.pinimg.com/originals/97/c1/17/97c117935fd5514e4593013a05988d89.jpg',
		'https://cdn10.bigcommerce.com/s-a76m5b3/products/1780/images/2233/0889854740221__36292.1501095677.1280.1280.jpg?c=2',
	]
	public backgroundImage = this.images[Math.floor(Math.random() * this.images.length)];
}
