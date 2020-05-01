import { Component, Output,EventEmitter,ViewChild, ElementRef, OnInit,} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
@Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

@ViewChild('titleInput', {static: false}) inputRef: ElementRef;
// @ViewChild('emailInput', {static: false}) emailRef: ElementRef;

  title = '';
  text = '';
  // email = '';

  constructor() { }

  ngOnInit(): void {
  }
  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post);
      this.title = '';
      this.text = '';
    }
  }

  focusTitle(){
    this.inputRef.nativeElement.focus();
  }
  // focusEmail(){
  //   this.emailRef.nativeElement.focus();
  // }

}
