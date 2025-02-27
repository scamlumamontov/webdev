import { ApplicationConfig, Component, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CategoryComponent } from './category/category.component';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes:Routes = [
  { path: "home", component: CategoryComponent },
  { path: "category/:id", component: ProductListComponent },
  { path: "", redirectTo: "home", pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}