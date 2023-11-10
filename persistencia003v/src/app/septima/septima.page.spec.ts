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
  it('sumar: suma 2 numeros positivos', ()=>{
    expect(component.sumar(2,2)).toEqual(4);
  })
  it('sumar: solo un numero es positivo', ()=>{
    expect(component.sumar(-2,2)).toEqual(0);
  })
  
  it('dividir: numeros positivos', ()=>{
    expect(component.dividir(6,3)).toBeGreaterThanOrEqual(0);
  })
  it('dividir: divisor es cero', ()=>{
    expect(component.dividir(6,0)).toBeUndefined();
  })

  it('multiplicar: 2 nros + y cero', ()=>{
    expect(component.multiplicar(6,1)).toBeGreaterThanOrEqual(0);
  })
  it('multiplicar: 1 nro - ', ()=>{
    expect(component.multiplicar(6,-1)).toBeLessThanOrEqual(0);
  })

  it('multiplicar: 2 nros -', ()=>{
    expect(component.multiplicar(-6,-1)).toBeGreaterThan(0);
  })
})