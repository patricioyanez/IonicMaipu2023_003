import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeptimaPage } from './septima.page';
/*
describe('SeptimaPage', () => {
  let component: SeptimaPage;
  let fixture: ComponentFixture<SeptimaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

/* npm test  npm t */
describe('=========== pruebas sobre pagina septima', ()=>{
  let component: SeptimaPage; // variable para page.ts

  beforeEach(waitForAsync(()=>{
    // permite crear los obj necesarios para realizar las pruebas
    component = new SeptimaPage(); // crear obj del page.ts
  }))

})