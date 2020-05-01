import { Component, Input, Output, ContentChild, EventEmitter, ElementRef,  ViewEncapsulation, OnInit } from '@angular/core';
import { Post } from '../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  //Указать, что стили данного компонента становяться глобальными, так как byDefault стили компонента локальны(encapsulated)
  //Это видно в Инспекторе браузера: эл. теряет придаточные ang data-attribute
  encapsulation:ViewEncapsulation.None
})
export class PostComponent implements OnInit {
@Input() post: Post;
@ContentChild('info', {static: true}) infoRef: ElementRef;
//Создаем @Output(), чтобы эмитить id текущего поста
@Output() onRemove = new EventEmitter<number>();


//Мы эмитим id текущего поста, чтобы передать его высше
removePost() {
  this.onRemove.emit(this.post.id);
}

  constructor() {}

ngOnInit() {
  console.log(this.infoRef.nativeElement);
}

}
