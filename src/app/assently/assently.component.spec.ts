import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssentlyComponent } from './assently.component';

describe('AssentlyComponent', () => {
  let component: AssentlyComponent;
  let fixture: ComponentFixture<AssentlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssentlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
