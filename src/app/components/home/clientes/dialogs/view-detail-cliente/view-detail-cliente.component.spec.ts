import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailClienteComponent } from './view-detail-cliente.component';

describe('ViewDetailClienteComponent', () => {
  let component: ViewDetailClienteComponent;
  let fixture: ComponentFixture<ViewDetailClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
