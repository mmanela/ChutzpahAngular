/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
     
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
 
import { AppComponent } from '../App/app.component';
          
describe("AppComponent -> ", () => {
        
    let de: DebugElement; 
    let comp: AppComponent; 
    let fixture: ComponentFixture<AppComponent>;
       
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        })
            .compileComponents();
    }));      

    beforeEach(() => {  
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it("Evaluate true condition - 01", () => {
        expect(1).toBe(1);
    });         

    it("Evaluate false condition - 01", () => {
        expect(1).toBe(2); 
    });          
}); 