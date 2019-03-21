import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import * as $ from 'jquery';



import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
// providers
import { AuthGuard } from './guards';
// Routing pages down below
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/dashboard/navbar/navbar.component';
import { SidebarComponent } from './pages/dashboard/sidebar/sidebar.component';
import { FooterComponent } from './pages/dashboard/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
        AppRouting
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        FooterComponent
    ],
    exports: [
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

    // tslint:disable-next-line:eofline
}
