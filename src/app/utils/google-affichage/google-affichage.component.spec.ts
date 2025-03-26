import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAffichageComponent } from './google-affichage.component';

describe('GoogleAffichageComponent', () => {
  let component: GoogleAffichageComponent;
  let fixture: ComponentFixture<GoogleAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAffichageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
