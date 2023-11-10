import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OctavaPage } from './octava.page';

describe('==== Pagina Octava Sumar =======', () => {
  let component: OctavaPage;
  let fixture: ComponentFixture<OctavaPage>;

  beforeEach(waitForAsync( async() => {
    await TestBed.configureTestingModule({

    }).compileComponents();

    fixture = TestBed.createComponent(OctavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
