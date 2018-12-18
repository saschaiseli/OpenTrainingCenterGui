import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetItemEditModalComponent } from './target-item-edit-modal.component';

describe('TargetItemEditModalComponent', () => {
  let component: TargetItemEditModalComponent;
  let fixture: ComponentFixture<TargetItemEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetItemEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetItemEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
