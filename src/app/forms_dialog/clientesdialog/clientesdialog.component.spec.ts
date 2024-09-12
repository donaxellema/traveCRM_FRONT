import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesdialogComponent } from './clientesdialog.component';

describe('ClientesdialogComponent', () => {
  let component: ClientesdialogComponent;
  let fixture: ComponentFixture<ClientesdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
