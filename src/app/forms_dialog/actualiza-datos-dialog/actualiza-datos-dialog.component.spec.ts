import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaDatosDialogComponent } from './actualiza-datos-dialog.component';

describe('ActualizaDatosDialogComponent', () => {
  let component: ActualizaDatosDialogComponent;
  let fixture: ComponentFixture<ActualizaDatosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizaDatosDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizaDatosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
