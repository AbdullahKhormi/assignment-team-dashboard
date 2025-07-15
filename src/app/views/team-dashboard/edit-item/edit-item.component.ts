import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamDashboardService } from '../../../shared/services/team-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.scss'
})
export class EditItemComponent implements OnInit{
 editItemForm!:FormGroup
private td = inject(TeamDashboardService)
private router = inject(Router)
  itemId!: string;

  constructor(private fb :FormBuilder,  private route: ActivatedRoute){
    this.editItemForm=fb.group({
  name:['',Validators.required],
  status:['',Validators.required],
  role:['',Validators.required],
  performance: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
})
  }
  ngOnInit(): void {
        this.itemId = this.route.snapshot.paramMap.get('id')!;
        this.td.getDataById(this.itemId).subscribe((data:any)=>{
 this.editItemForm.patchValue({
        name: data.name,
        status: data.status,
        role: data.role,
        performance: data.performance
      });
        })

  }
    submit(){
    const data ={
      name:this.editItemForm.controls['name'].value,
      status:this.editItemForm.controls['status'].value,
      role:this.editItemForm.controls['role'].value,
      performance:this.editItemForm.controls['performance'].value
    }

this.td.updateData(this.itemId,data).subscribe((res)=>{

this.router.navigate(['team-dashboard'])

},(error)=>{})
  }

}

