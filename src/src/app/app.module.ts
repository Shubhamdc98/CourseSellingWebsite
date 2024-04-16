import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './Header/header.component';
import { TopheaderComponent } from './Header/topheader/topheader.component';
import { TopmenuComponent } from './Header/TopMenu/topmenu.component';
import { MainmenuComponent } from './Header/Mainmenu/mainmenu.component';
import { ProductComponent } from './Product-list/product.component';
import { SearchComponent } from './Product-list/Search/search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './Product-list/container/container.component';
import { ProdsComponent } from './Product-list/container/prods/prods.component';
import { FilterComponent } from './Product-list/container/filter/filter.component';
import { ProductDetailComponent } from './Product-list/product-detail/product-detail.component';
import { FeaturedProductComponent } from './Product-list/featured-product/featured-product.component';
import { CustomDir } from './CustomDirective/SetBackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { AvalabilityDirective } from './CustomDirective/avalability.directive';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    TopheaderComponent,
    TopmenuComponent,
    MainmenuComponent,
    ProductComponent,
    SearchComponent,
    ContainerComponent,
    ProdsComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedProductComponent,
    CustomDir,
    HighlightDirective,
    HoverDirective,
    AvalabilityDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
