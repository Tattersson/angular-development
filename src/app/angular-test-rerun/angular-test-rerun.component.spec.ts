import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestRerunComponent } from './angular-test-rerun.component';

describe('AngularTestRerunComponent', () => {
  let component: AngularTestRerunComponent;
  let fixture: ComponentFixture<AngularTestRerunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTestRerunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTestRerunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
