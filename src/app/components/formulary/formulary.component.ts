import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

  arrCategories: Category[];

  postForm: FormGroup;
  constructor(
    private postsService: PostsService,
    private categoriesService: CategoryService,
    private router: Router,
  ) {
    this.arrCategories = this.categoriesService.getAll()

    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/g)
      ]),
      category: new FormControl('Seleccione una categoria', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {

  }

  getDataForm() {
    this.postForm.value.category = Number(this.postForm.value.category);
    this.postsService.addPost(this.postForm.value)
    this.router.navigate(['/home']);
  }
}
