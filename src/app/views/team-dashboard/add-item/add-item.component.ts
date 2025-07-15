import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamDashboardService } from '../../../shared/services/team-dashboard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'

})
export class AddItemComponent {
    addItemForm!:FormGroup
private td = inject(TeamDashboardService)
private router = inject(Router)

  constructor(private fb :FormBuilder){
    this.addItemForm=fb.group({
  name:['',Validators.required],
  status:['',Validators.required],
  role:['',Validators.required],
  performance: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
})
  }
  submit(){
    const data ={
      name:this.addItemForm.controls['name'].value,
      status:this.addItemForm.controls['status'].value,
      role:this.addItemForm.controls['role'].value,
      performance:this.addItemForm.controls['performance'].value
    }
this.td.postData(data).subscribe((res)=>{
this.router.navigate(['team-dashboard'])

},(error)=>{})
  }

}
