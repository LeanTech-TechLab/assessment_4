import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialInformationComponent } from './residential-information.component';

describe('ResidentialInformationComponent', () => {
  let component: ResidentialInformationComponent;
  let fixture: ComponentFixture<ResidentialInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
