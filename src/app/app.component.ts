import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigatorComponent,
    BlogViewComponent,
    BlogNewComponent,
    BlogListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BlogApp';
}
