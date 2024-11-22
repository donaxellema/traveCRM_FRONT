import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniasBYEtiquetasComponent } from './campanias-byetiquetas.component';

describe('CampaniasBYEtiquetasComponent', () => {
  let component: CampaniasBYEtiquetasComponent;
  let fixture: ComponentFixture<CampaniasBYEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaniasBYEtiquetasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaniasBYEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
