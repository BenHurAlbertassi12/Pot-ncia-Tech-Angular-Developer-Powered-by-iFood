import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-chack-sample',
  templateUrl: './chack-sample.component.html',
  styleUrls: ['./chack-sample.component.css'],
})
export class ChackSampleComponent implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy{
  
  quantidade:number = 0
  
  constructor() {
    
  }
  
  adicionar() {
    this.quantidade += 1
  }
  remover() {
    this.quantidade -= 1
  }
  
  ngOnDestroy(): void {
    console.log('Se foi');
    ;
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`);
    
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck`);
  }
  ngOnInit(): void {
    console.log(`ngOnInit`);
  }
}
