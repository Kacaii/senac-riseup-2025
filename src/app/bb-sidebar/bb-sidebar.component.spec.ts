import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbSidebarComponent } from './bb-sidebar.component';

describe('BbSidebarComponent', () => {
  let component: BbSidebarComponent;
  let fixture: ComponentFixture<BbSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
