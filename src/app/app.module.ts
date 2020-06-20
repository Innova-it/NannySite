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
import { SchoolService } from './school.service';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { SchoolDetailsComponent } from './schools/school-details/school-details.component';
import { ClientComponent } from './client/client.component';
import { NannyComponent } from './nanny/nanny.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    AboutUsComponent,
    SchoolsComponent,
    AccountComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SchoolDetailsComponent,
    ClientComponent,
    NannyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
