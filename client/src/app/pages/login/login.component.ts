import { Component } from "@angular/core";
import { AdminLoginService } from "../../services/login.service";
import { Router } from "@angular/router";
/* import { ToastsManager } from 'ng2-toastr/ng2-toastr'; */
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  providers: [AdminLoginService]
})
export class LoginComponent {
  login: any = {};
  reg: any = {};
  loading = false;
  regclick = false;


  constructor(
    public adminLoginService: AdminLoginService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  loginUser() {
    this.loading = true;
    this.adminLoginService.adminLogin(this.login).subscribe(
      data => {
        this.login = {};
        this.loading = false;
        this.router.navigate(["/app/dashboard"]);
      },
      error => {
        this.loading = false;
        this.toastr.error(error);
      }
    );
  }
  openReg(){
    this.regclick = !this.regclick;
  }

  regUser(){
    this.loading = true;
    this.adminLoginService.registration(this.reg).subscribe(
      data => {
        this.reg = {};
        this.loading = false;
        this.router.navigate(["/"]);
        this.openReg();
      },
      error => {
        this.loading = false;
        this.toastr.error(error);
      }
    );
  }
}
