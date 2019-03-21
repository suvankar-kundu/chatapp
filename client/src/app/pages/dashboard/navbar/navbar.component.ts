import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LangFile } from '../../../helpers/language';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [
    AuthService
  ]
})
export class NavbarComponent implements OnInit {

  showUser: boolean = false;
  showRoleManagement: boolean = false;
  user : string = '';

  constructor(public router: Router, public authService: AuthService, private toastr: ToastrService) {
    this.router = router;

  }


  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.toastr.success(LangFile.LogoutSuccess);
    localStorage.removeItem('username');
  }

  ngOnInit() {

    this.user = localStorage.getItem('username');
  }


}
