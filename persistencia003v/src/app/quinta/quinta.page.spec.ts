import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { QuintaPage } from './quinta.page';

describe('QuintaPage', () => {
  let component: QuintaPage;
  let fixture: ComponentFixture<QuintaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
