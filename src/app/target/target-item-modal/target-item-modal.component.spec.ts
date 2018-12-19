import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetItemModalComponent } from './target-item-modal.component';

describe('TargetItemModalComponent', () => {
  let component: TargetItemModalComponent;
  let fixture: ComponentFixture<TargetItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
