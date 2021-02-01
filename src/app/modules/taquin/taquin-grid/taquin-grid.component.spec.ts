import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaquinGridComponent } from './taquin-grid.component';

describe('TaquinGridComponent', () => {
  let component: TaquinGridComponent;
  let fixture: ComponentFixture<TaquinGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaquinGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaquinGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
