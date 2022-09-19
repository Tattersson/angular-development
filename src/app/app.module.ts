import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormControlComponent } from './form-control/form-control.component';

//Here comes the premade materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {Routes, RouterModule} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";




const appRoutes: Routes = [
  { path: 'form-control', component: FormControlComponent },
  { path: 'feedback', component: FeedbackComponent}
];






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedbackComponent,
    FormControlComponent,
    ReactiveFormComponent,
    AngularTestComponent


  ],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatProgressBarModule,
		MatSliderModule,
		MatInputModule,
		MatFormFieldModule,
		HttpClientModule,
		MatExpansionModule,
		MatMenuModule,
		ReactiveFormsModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true} // <-- debugging
		),
		MatButtonToggleModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
