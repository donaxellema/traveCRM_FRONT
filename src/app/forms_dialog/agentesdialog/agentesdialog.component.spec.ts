import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesdialogComponent } from './agentesdialog.component';

describe('AgentesdialogComponent', () => {
  let component: AgentesdialogComponent;
  let fixture: ComponentFixture<AgentesdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentesdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
