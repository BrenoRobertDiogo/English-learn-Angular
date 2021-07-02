import { Component } from "@angular/core";

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    // template: '<h1>teste pra ver se ta funfando</h1>' // sobrescreve i templateUrl
    styles: ['.exemplo { color: black }'], // adicionando style
    styleUrls: ['./topo.component.css']
     
})
export class TopoComponent {
    public titulo: string = 'Aprendendo inglês'
}