import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { DaysAgoPipe } from './pipe/days-ago.pipe';
import { ColorDirective } from './directive/color.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LandingpageComponent,
    RepositoriesComponent,
    DaysAgoPipe,
    ColorDirective,
    NotFoundComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
