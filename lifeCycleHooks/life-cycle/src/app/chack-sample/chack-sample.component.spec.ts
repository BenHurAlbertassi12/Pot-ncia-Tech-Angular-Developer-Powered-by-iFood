import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChackSampleComponent } from './chack-sample.component';

describe('ChackSampleComponent', () => {
  let component: ChackSampleComponent;
  let fixture: ComponentFixture<ChackSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChackSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChackSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
