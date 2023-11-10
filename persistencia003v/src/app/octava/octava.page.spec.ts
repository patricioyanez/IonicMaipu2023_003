import { ComponentFixture, TestBed, tick, fakeAsync, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('==== Pagina Octava Sumar =======', () => {
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync( async() => {
    await TestBed.configureTestingModule({
      declarations: [OctavaPage],
      imports : [IonicModule.forRoot(), FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('______ Botón Sumar', fakeAsync(() => {
    fixture.componentInstance.n1 = 100
    fixture.componentInstance.n2 = 100
    document.getElementById('btnSumar')?.click();
    fixture.detectChanges();
    tick();
    const res = (<HTMLInputElement>document.getElementById('res')).value;
    expect(res).toContain('200');
  }));
});
//https://github.com/LazarSoft/jsqrcode/blob/master/src/test.html