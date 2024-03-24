import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
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
	public signUpForm: FormGroup = new FormGroup({});
	public invalid = false;

	revealPassword(passwordField: HTMLInputElement, id: string) {
		passwordField.type = 'text';
		const btn = document.getElementById(id);
		if (btn) {
			btn.textContent = '🐵'
		}
		setTimeout(() => {
			passwordField.type = 'password';
			if (btn) {
				btn.textContent = '🙈'
			}
		}, 2000);
	}

	constructor(private formBuilder: FormBuilder, private appService: AppService, private router: Router, private snackBar: MatSnackBar) {
		this.signUpForm = this.formBuilder.group({
			username: ['', Validators.required],
			confirmPassword: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-zd0-9].{8,}$')]],
		});
	}

	get password() {
		return this.signUpForm.get('password');
	}

	getPasswordErrorMessage() {
		if (this.password?.hasError('required')) {
			return 'You must enter a password';
		} else if (this.password?.hasError('minlength')) {
			return 'Password must be at least 8 characters long';
		} else if (this.password?.hasError('pattern')) {
			return 'Password must contain at least one uppercase, one lowercase and one number';
		}
		return '';
	}

	onSubmit() {
		// Mark all controls as touched
		this.signUpForm.markAllAsTouched();
		if (this.signUpForm.valid) {
			this.appService.checkDuplicate(this.signUpForm.value.username).subscribe((value: any) => {
				if (value.duplicate) {
					this.invalid = true;
				} else {
					this.appService.createProfile(this.signUpForm.value);
					this.router.navigate(['/sign-in']);
				}
			});
		}
	}
}