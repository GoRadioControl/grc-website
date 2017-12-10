import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { SectionSeparatorComponent } from './section-separator/section-separator.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    GetStartedComponent,
    WorkshopsComponent,
    SectionSeparatorComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
