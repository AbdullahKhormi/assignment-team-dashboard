import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcom-box',
  standalone: true,
  imports: [],
  templateUrl: './welcom-box.component.html',
  styleUrl: './welcom-box.component.scss'
})
export class WelcomBoxComponent {
  @Input () userName:any ='Guest'

}
