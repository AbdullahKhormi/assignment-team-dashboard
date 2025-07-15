import { Component, inject, OnInit } from '@angular/core';
import { TeamDashboardService } from '../../shared/services/team-dashboard.service';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-team-dashboard',
  standalone: true,
  imports: [CommonModule,MatTableModule,RouterModule,MatFormFieldModule,MatInputModule],
  templateUrl: './team-dashboard.component.html',
  styleUrl: './team-dashboard.component.scss'
})
export class TeamDashboardComponent implements OnInit{
   displayedColumns: string[] = ['id', 'name', 'status', 'role','performance','actions'];
  dataSource :any;
private td = inject (TeamDashboardService)
private dialog = inject (MatDialog)

private router = inject(Router)
dataTaem:any[]=[]

 ngOnInit(): void {
   this.getAllData()
  }
  getAllData(){
     this.td.getData().subscribe((r) => {
      this.dataTaem = Object.entries(r).map(([key, value]: any) => ({ key, ...value }));
      this.dataSource=new MatTableDataSource(this.dataTaem)
      this.dataSource.filterPredicate = (data: any, filter: string) => {
    const transformedFilter = filter.trim().toLowerCase();

    return (
      data.role?.toLowerCase().includes(transformedFilter) ||
      data.status?.toLowerCase().includes(transformedFilter)
    );
  };
    });
  }
delete(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {disableClose:true,
      data: {
        view: 'delete',
        text: 'Delete Item ? ',
        message: 'Are you sure you want to delete this item? ',
        note: 'This action is permanent and cannot be undone!',
        buttonText: {
          ok: 'Yes. Delete',
          cancel: 'Cancel',
        },
      },
    });
    dialogRef.afterClosed().subscribe(
      (result:any) => {
        if (result === true) {
this.td.delete(id).subscribe((result)=>{
this.getAllData()
        })
        }
      },

      (error) => {
        const dialogRef = this.dialog.open(DialogComponent, {
          data: {
            view: 'error',
            text: ' Error',
            message: 'Something Went Wrong, Please Retry',
          },
        });
        setTimeout(() => {
          dialogRef.close();
        }, 1000);
      }
    );

  }

  navigate(){
this.router.navigate(['create-item'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
