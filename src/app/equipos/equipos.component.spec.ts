import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EquiposComponent } from './equipos.component';

describe('EquiposComponent', () => {
  let component: EquiposComponent;
  let fixture: ComponentFixture<EquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct number of teams', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('.list-group-item');
    expect(listItems.length).toBe(3);
  });

  it('should display the correct team names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const listItems = compiled.querySelectorAll('.list-group-item');
    expect(listItems[0].textContent).toContain('Leones');
    expect(listItems[1].textContent).toContain('Tigres');
    expect(listItems[2].textContent).toContain('Tomateros');
  });
});
