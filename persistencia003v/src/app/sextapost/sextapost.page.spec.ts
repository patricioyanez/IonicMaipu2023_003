import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SextapostPage } from './sextapost.page';

describe('SextapostPage', () => {
  let component: SextapostPage;
  let fixture: ComponentFixture<SextapostPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SextapostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
