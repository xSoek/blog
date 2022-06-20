import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

  postForm: FormGroup;
  constructor(
    private postsService: PostsService
  ) {
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
      category: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {

  }

  getDataForm() {

    console.log(this.postForm.value);
    this.postsService.addPost(this.postForm.value)
  }
}
