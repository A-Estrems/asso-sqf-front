import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTinyComponent } from './test-tiny.component';

describe('TestTinyComponent', () => {
  let component: TestTinyComponent;
  let fixture: ComponentFixture<TestTinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTinyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
