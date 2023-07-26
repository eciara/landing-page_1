import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SliderComponent } from './components/slider/slider.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurMisionComponent } from './components/our-mision/our-mision.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { BanerComponent } from './components/baner/baner.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

import { CarouselModule } from 'ngx-owl-carousel-o'

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { AvatarComponent } from './components/avatar/avatar.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SliderComponent,
    ServicesComponent,
    AboutUsComponent,
    OurMisionComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    BanerComponent,
    PartnersComponent,
    SocialMediaComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    CarouselModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    CdkAccordionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
