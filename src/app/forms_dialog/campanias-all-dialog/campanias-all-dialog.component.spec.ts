import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasAllDialogComponent } from './campanias-all-dialog.component';

describe('CampaniasAllDialogComponent', () => {
  let component: CampaniasAllDialogComponent;
  let fixture: ComponentFixture<CampaniasAllDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaniasAllDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaniasAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
