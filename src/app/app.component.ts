import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-blog';
  posts: Post[] = [
    {title: 'I want to learn Angular',
    text: 'I\'m still learning Angular',
    id: 1},

    {title: 'Angular directives',
    text: 'This block block is devoted to Angular directives',
    id: 2}
  ]

  updatePosts(post: Post){
    this.posts.unshift(post);
    console.log('Post', post);
  }
  removePost(id: number) {
    console.log('id to remove',id);
    this.posts = this.posts.filter(p => p.id !==id);
  }
}
