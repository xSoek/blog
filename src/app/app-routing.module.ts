import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryViewComponent } from './components/categories/category-view/category-view.component';
import { FormularyComponent } from './components/formulary/formulary.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'new-post', component: FormularyComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryViewComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
