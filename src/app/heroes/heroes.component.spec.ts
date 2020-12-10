import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

import { HeroesComponent } from './Heroes.component';

describe('HeroesComponent', () => {
    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should call heroService', waitForAsync(() => {
        expect(getHeroesSpy.calls.any()).toBe(true);
    }));

    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let heroService;
    let getHeroesSpy;

    beforeEach(waitForAsync(() => {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
        TestBed
            .configureTestingModule({
                declarations: [HeroesComponent],
                imports: [RouterTestingModule.withRoutes([])],
                providers: [{ provide: HeroService, useValue: heroService }]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
