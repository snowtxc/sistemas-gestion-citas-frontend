import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogoutBtn(){
    this._auth.logout();
  }

}
