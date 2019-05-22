import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  showMenuFooter:boolean = false;
  title = 'blocoProject';

  constructor(private authService: AuthService)
  {

  }

  ngOnInit()
  {
    this.authService.showMenuFooterEmitter.subscribe()
    {
      show => this.showMenuFooter = show;
    }
    console.log(this.showMenuFooter)
  }
}
