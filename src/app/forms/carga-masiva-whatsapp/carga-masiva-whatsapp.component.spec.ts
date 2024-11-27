import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMasivaWhatsappComponent } from './carga-masiva-whatsapp.component';

describe('CargaMasivaWhatsappComponent', () => {
  let component: CargaMasivaWhatsappComponent;
  let fixture: ComponentFixture<CargaMasivaWhatsappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargaMasivaWhatsappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CargaMasivaWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
