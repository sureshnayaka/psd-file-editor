import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
	{
		pathMatch: 'full',
		path: 'psd-editor',
		component: AppComponent
	},

	{ path: '**', redirectTo: '/psd-editor' },
	{ path: '', redirectTo: '/psd-editor', pathMatch: 'full' },
];

