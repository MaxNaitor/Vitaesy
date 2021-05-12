import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrattamentoDatiComponent } from './trattamento-dati.component';

describe('TrattamentoDatiComponent', () => {
  let component: TrattamentoDatiComponent;
  let fixture: ComponentFixture<TrattamentoDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrattamentoDatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrattamentoDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
