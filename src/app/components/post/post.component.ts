import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Post } from 'src/app/interfaces/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post | any
  categories: Category[] = [];
  similarPosts: Post[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private postsServices: PostsService,
    private categoriesServices: CategoryService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.post = this.postsServices.getPost(Number(params['id']))

      if (this.post._id) {
        this.similarPosts = this.postsServices.getOtherPostsByCategory(this.post._id, this.post.category);
        if (this.similarPosts.length > 3)
          this.getSimilarPosts(3);

      }
    })

    this.categories = this.categoriesServices.getAll();
  }



  getSimilarPosts(quantity: number) {
    let auxArr = [...this.similarPosts]
    this.similarPosts = [];
    for (let i = 0; i < quantity; i++) {
      this.similarPosts.push(auxArr[i])
    }
  }
}
