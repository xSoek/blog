import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
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
      body: new FormControl(),
      image: new FormControl('', [
        Validators.pattern(/(https?:\/\/.*\.(?:png|jpg))/),
        Validators.required,
      ]),
      author: new FormControl('', [
        Validators.required,
      ]),
      category: new FormControl('', [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {

    var toastTrigger = document.getElementById('liveToastBtn')
    var toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
        console.log(toastTrigger);
        var toast = new bootstrap.Toast(toastLiveExample!)
        toast.show()
        setTimeout(() => {
          toast.hide()
        }, 2000);
      })
    }
  }

  getDataForm() {
    this.postForm.value.category = Number(this.postForm.value.category);
    this.postsService.addPost(this.postForm.value)
    //this.router.navigate(['/home']);

  }

  checkControl(pControlName: string, pErrorName: string): boolean {
    console.log(this.postForm.get(pControlName));

    if (this.postForm.get(pControlName)?.hasError(pErrorName) && this.postForm.get(pControlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }
}
