import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasDialogComponent } from './campanias-dialog.component';

describe('CampaniasDialogComponent', () => {
  let component: CampaniasDialogComponent;
  let fixture: ComponentFixture<CampaniasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaniasDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaniasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
