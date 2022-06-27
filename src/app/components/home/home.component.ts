import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentImage1: string;
  currentImage2: string;

  constructor(
    private categoriesServices: CategoryService
  ) {


    this.currentImage1 = "https://x.cdrst.com/foto/localidad/42b3/cover/imagen-cover-3070.jpg";
    this.currentImage2 = "https://www.triptenerife.com/wp-content/uploads/2017/09/teide-tour-1.jpg";
  }

  ngOnInit(): void {

  }


}
