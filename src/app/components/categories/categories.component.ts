import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  arrCategories: Category[];
  constructor(
    private categoriesServices: CategoryService,
    private router: Router,
    private s: PostsService
  ) {
    this.arrCategories = this.categoriesServices.getAll()
  }

  ngOnInit(): void {

    console.log(this.s.getAllPosts());

  }

  openCategory(id: number) {
    this.router.navigate(['/category', id])
  }

}
