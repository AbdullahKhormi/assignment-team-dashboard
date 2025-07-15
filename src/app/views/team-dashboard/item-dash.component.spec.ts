import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamDashboardComponent } from './team-dashboard.component';
import { MatTableDataSource } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';

describe('TeamDashboardComponent', () => {
  let component: TeamDashboardComponent;
  let fixture: ComponentFixture<TeamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // استورد RouterTestingModule بدل Router
      declarations: [TeamDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('filter should hide rows that ', () => {
    component.dataTaem = [
      { id: 1, name: 'Ali', role: 'developer', status: 'active', performance: 80 },
      { id: 2, name: 'Sara', role: 'tester', status: 'inactive', performance: 60 },
    ];
    component.dataSource = new MatTableDataSource(component.dataTaem);

    component.applyFilter({ target: { value: 'developer' } } as any);

    expect(component.dataSource.filteredData.length).toBe(1);
    expect(component.dataSource.filteredData[0].role).toBe('developer');
  });
});
