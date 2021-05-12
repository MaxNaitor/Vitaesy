import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzeFormComponent } from './esperienze-form.component';

describe('EsperienzeFormComponent', () => {
  let component: EsperienzeFormComponent;
  let fixture: ComponentFixture<EsperienzeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienzeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperienzeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
