import {Component, OnInit} from '@angular/core';
import {AboutUsService} from '../../services/about-us.service';
import AboutUsDto from '../../dtos/about-us/about-us.dto';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  aboutUsModel: AboutUsDto = {
    address: '',
    description: '',
    email: '',
    imageAddress: '',
    mobile: ''
  };

  constructor(private aboutUsService: AboutUsService) {
  }

  ngOnInit(): void {
    this.aboutUsService.get()
      .subscribe(response => {

        if (response.isSuccess)
          this.aboutUsModel = response.data
      });
  }

}
