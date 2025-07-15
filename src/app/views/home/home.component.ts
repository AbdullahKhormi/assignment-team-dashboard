import { Component, Input } from '@angular/core';
import { WelcomBoxComponent } from "../../shared/components/welcome-box/welcom-box.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomBoxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
