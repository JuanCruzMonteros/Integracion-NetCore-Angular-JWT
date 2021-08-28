import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './components/item-list/item-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    ItemListComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
