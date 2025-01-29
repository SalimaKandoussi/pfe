import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterOffresComponent } from './consulter-offres.component';

describe('ConsulterOffresComponent', () => {
  let component: ConsulterOffresComponent;
  let fixture: ComponentFixture<ConsulterOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsulterOffresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
