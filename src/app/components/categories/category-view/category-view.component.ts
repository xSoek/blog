import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {


  category: Category | any;
  posts: Post | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private postsServices: PostsService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.category = this.categoryService.getCategoryById(Number(params['id']))
      this.posts = this.postsServices.getPostsByCategory(Number(params['id']))
      console.log(this.category);

    })
  }

}
