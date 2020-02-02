import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SchoolsComponent} from './schools/schools.component';
import {AccountComponent} from './account/account.component';
import {GoalsComponent} from './goals/goals.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'schools', component: SchoolsComponent},
  { path: 'goal', component: GoalsComponent},
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SchoolsComponent, AboutUsComponent, PageNotFoundComponent,
                                  GoalsComponent, RegisterComponent, AccountComponent];
