import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaquinWinComponent } from './taquin-win.component';

describe('TaquinWinComponent', () => {
  let component: TaquinWinComponent;
  let fixture: ComponentFixture<TaquinWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaquinWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaquinWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
