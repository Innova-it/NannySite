import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SchoolsComponent } from './schools/schools.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { DataService } from './data.service';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    AboutUsComponent,
    SchoolsComponent,
    AccountComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
