import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductModule } from './product/product.module';
import { NotFoundService } from './services/not-found.service';
import { ProductRoutingModule } from './product/product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule
    
    // ProductRoutingModule
  ],
  providers: [NotFoundService],
  bootstrap: [AppComponent]
})
export class AppModule { }
