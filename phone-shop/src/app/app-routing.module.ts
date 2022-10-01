import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './@modules/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'product', 
        loadChildren: () => import('./@modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'accessories', 
        loadChildren: () => import('./@modules/accessories/accessories.module').then(m => m.AccessoriesModule)
      },
      {
        path: 'secondhand',
        loadChildren:() => import('./@modules/secondhand/secondhand.module').then(m => m.SecondhandModule),
      },
      {
        path: 'special-offer',
        loadChildren: () => import('./@modules/special-offer/special-offer.module').then(m => m.SpecialOfferModule),
      },
      {
        path: 'pre-order',
        loadChildren: () => import('./@modules/pre-order/pre-order.module').then(m => m.PreOrderModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./@modules/news/news.module').then(m => m.NewsModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./@modules/contact-us/contact-us.module').then(m => m.ContactUsModule)
      }
    ]
  }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
