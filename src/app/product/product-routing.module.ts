import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: 'product',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'prdthome',
        component: ProductHomeComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductDetailComponent

      }
    ]

  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
