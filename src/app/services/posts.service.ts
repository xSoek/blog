import { Injectable } from '@angular/core';
import { POSTS } from '../dbs/posts.db';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  arrPosts: Post[] = [];
  constructor() {
    this.arrPosts = POSTS;
  }

  addPost(newPost: any) {
    const currentDate = new Date();
    let date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDay(),
      currentDate.getHours(),
      currentDate.getMinutes()
    )

    const finalDate = date.toLocaleString('default', { month: 'long', year: "numeric", day: 'numeric', hour: '2-digit', minute: '2-digit' });

    newPost['date'] = finalDate;
    newPost._id = this.arrPosts.length;
    this.arrPosts.push(newPost);

    return true;
  }

  getAllPosts() {
    return this.arrPosts;
  }

  getPostsByCategory(category: number) {
    return this.arrPosts.filter(posts => posts.category === category);
  }

  getPost(id: number) {
    return this.arrPosts.find(posts => posts._id === id);
  }

}
