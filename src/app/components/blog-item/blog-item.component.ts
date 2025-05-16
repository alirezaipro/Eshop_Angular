import {Component, Input} from '@angular/core';
import BlogListDto from '../../dtos/blog/blog-list.dto';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {


  @Input()
  blog: BlogListDto = {
    authorFullName: '', authorId: 0, createdDate: '', id: 0, imageSrc: '', shortDescription: '', slug: '', title: ''
  }

}
