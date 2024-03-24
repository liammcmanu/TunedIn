import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FypComponent } from './fyp/fyp.component';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: 'profile', component: ProfileCardComponent },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'for-you', component: FypComponent },
	{ path: '', redirectTo: '/for-you', pathMatch: 'full' },
	{ path: 'not-found', component: NotFoundComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
	CommonModule,
	RouterModule.forRoot(routes)
	],
  exports: [RouterModule]
})

export class AppRoutingModule { }
