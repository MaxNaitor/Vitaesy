import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstruzioneFormComponent } from './istruzione-form.component';

describe('IstruzioneFormComponent', () => {
  let component: IstruzioneFormComponent;
  let fixture: ComponentFixture<IstruzioneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstruzioneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstruzioneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
