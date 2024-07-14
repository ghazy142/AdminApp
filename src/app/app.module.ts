import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ComponentsModule } from './component/component.module'; // Ensure ComponentsModule is imported
import { LoginComponent } from './component/login/login.component';
import { BadgeComponent } from './component/badge/badge.component';
import { CardsComponent } from './component/card/card.component';
import { GetfeedbackService } from './component/card/getfeedback.service';

 

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    BadgeComponent,
   

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    ComponentsModule,
    CardsComponent
     // Ensure ComponentsModule is imported here
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    [GetfeedbackService],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
