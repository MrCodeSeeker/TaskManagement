import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone:false
})
export class UserComponent {
  selectedUser =DUMMY_USERS[randomIndex];
  @Input({required:true}) selected!: boolean;
  @Input({required:true}) user!: {
    id:string,
    name:string,
    avatar:string
  };
  @Output() select=new EventEmitter();
get imagePath(){
    return 'assets/users/'+this.user.avatar;
}
onSelectUser(){
  this.select.emit(this.user);
}

}
