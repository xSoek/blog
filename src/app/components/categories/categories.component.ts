import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

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
  ) {
    this.arrCategories = this.categoriesServices.getAll()
  }

  ngOnInit(): void {
  }

  openCategory(id: number) {
    this.router.navigate(['/category', id])
  }

}