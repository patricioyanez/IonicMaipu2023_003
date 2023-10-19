import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SextacomentariosPage } from './sextacomentarios.page';

describe('SextacomentariosPage', () => {
  let component: SextacomentariosPage;
  let fixture: ComponentFixture<SextacomentariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SextacomentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
