import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button{
    @Input() label: string = '';
    buttonText: string = 'Acessar';
    buttonTexts: string[] = ['Comprar', 'Vender'];
    buttonNumber: number = 1;
    buttonObject = {
        label: 'adcionar ao carrinho'
    }
    getAlert(num: number) {
        alert(num)
    }
}