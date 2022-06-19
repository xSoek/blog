import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[] = [];
  constructor() { }

  addPost(newPost: Post) {
    this.arrPosts.push(newPost)
    return true;
  }

  getAllPosts(newPost: Post) {
    return this.arrPosts;
  }

  getPostsByCategory(category: string) {//TODO: Cambiar a interfaz categoria
    return this.arrPosts;
  }

}
