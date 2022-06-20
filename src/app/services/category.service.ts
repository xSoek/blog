import { Injectable } from '@angular/core';
import { CATEGORIES } from '../dbs/categories.db';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  arrCategories: Category[];
  constructor() {
    this.arrCategories = CATEGORIES
  }

  getAll() { return this.arrCategories }

}
