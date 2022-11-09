import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenApiDemoComponent } from './open-api-demo.component';

describe('OpenApiDemoComponent', () => {
  let component: OpenApiDemoComponent;
  let fixture: ComponentFixture<OpenApiDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenApiDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenApiDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
