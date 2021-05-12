import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenzeFormComponent } from './competenze-form.component';

describe('CompetenzeFormComponent', () => {
  let component: CompetenzeFormComponent;
  let fixture: ComponentFixture<CompetenzeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenzeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenzeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
