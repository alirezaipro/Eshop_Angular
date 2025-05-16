import {Component, OnInit} from '@angular/core';
import BlogListDto from '../../../dtos/blog/blog-list.dto';
import {BlogService} from '../../../services/blog.service';
import {BlogItemComponent} from '../../../components/blog-item/blog-item.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    BlogItemComponent
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getPosts()
      .subscribe(response => {
        if (response.isSuccess) {
          this.blogs = response.data;
        }
      })
  }

  blogs: BlogListDto[] = [];

}
