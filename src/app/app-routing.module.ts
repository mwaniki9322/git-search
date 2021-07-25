import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component:LandingpageComponent},
  {path:'finduser',component:HomepageComponent},
  {path:'repo',component:RepositoriesComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
