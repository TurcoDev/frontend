import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  // users1: any = users;

  users$: Observable<any> | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

}
