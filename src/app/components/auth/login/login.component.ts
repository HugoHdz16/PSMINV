import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router: Router, private api: ApiServiceService) {

    const user = localStorage.getItem('token');
    if(user) {
      this.router.navigate(['/index']);
    }

  }

  user = {
    username: '',
    password: ''
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado
    this.router.navigate(['/index']); // Navegar a la nueva ruta
  }


  SignIn() {
    this.api.SignIn(this.user).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/index']);
    }, err => alert("Correo o usuario son incorrectas"));
  }


}
