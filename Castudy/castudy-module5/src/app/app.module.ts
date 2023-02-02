import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PROTOTYPE/home/home.component';
import { HeaderComponent } from './PROTOTYPE/header/header.component';
import { FooterComponent } from './PROTOTYPE/footer/footer.component';
import { FacilityListComponent } from './Facility/facility-list/facility-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FacilityCreateComponent } from './Facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './Facility/facility-update/facility-update.component';
import { CustomerListComponent } from './Customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './Customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './Customer/customer-update/customer-update.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }