import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaPasswordDialogComponent } from './actualiza-password-dialog.component';

describe('ActualizaPasswordDialogComponent', () => {
  let component: ActualizaPasswordDialogComponent;
  let fixture: ComponentFixture<ActualizaPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaPasswordDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizaPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
