import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  logoUrl: string = environment.storageUrl + 'logo/logocode.png';

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  //Bottone Logout

  logout() {

    this.api.logout().subscribe({
      next: () => {

        this.auth.logout(); //  Uso il Service
        this.router.navigate(['/login']);

      },
      error: () => {

        // fallback
        this.auth.logout();
        this.router.navigate(['/login']);

      }
    });

  }
  ngOnInit(): void {
  }

}
