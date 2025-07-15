import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddItemComponent } from './add-item.component';
import { TeamDashboardService } from '../../../shared/services/team-dashboard.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let tdSpy: jasmine.SpyObj<TeamDashboardService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    tdSpy = jasmine.createSpyObj('TeamDashboardService', ['postData']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [AddItemComponent],  // هنا استورد المكون Standalone
      providers: [
        { provide: TeamDashboardService, useValue: tdSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with 4 controls', () => {
    expect(component.addItemForm.contains('name')).toBeTrue();
    expect(component.addItemForm.contains('status')).toBeTrue();
    expect(component.addItemForm.contains('role')).toBeTrue();
    expect(component.addItemForm.contains('performance')).toBeTrue();
  });

  it('should call service and navigate on submit', () => {
    component.addItemForm.setValue({
      name: 'Ali',
      status: 'active',
      role: 'developer',
      performance: 90,
    });

    tdSpy.postData.and.returnValue(of({ id: 1 }));
    component.submit();

    expect(tdSpy.postData).toHaveBeenCalledWith({
      name: 'Ali',
      status: 'active',
      role: 'developer',
      performance: 90,
    });
    expect(routerSpy.navigate).toHaveBeenCalledWith(['team-dashboard']);
  });
});
