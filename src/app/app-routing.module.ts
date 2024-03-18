import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FypComponent } from './fyp/fyp.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{ path: 'profile-page', component: ProfileCardComponent },
	{ path: '', component: FypComponent },
];

@NgModule({
  imports: [
	CommonModule,
	RouterModule.forRoot(routes)
	],
  exports: [RouterModule]
})

export class AppRoutingModule { }
