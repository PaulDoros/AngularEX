import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CafeneaSauLocalitate } from './cafeneasaulocalitate';
import { ProdusDisponibil, PseudoApiService } from './pseudo-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
 
  title = 'ExAngular';
  locati: CafeneaSauLocalitate[];
  coffees: ProdusDisponibil[];
  selectedLocatie?: CafeneaSauLocalitate;
  

  searchText = '';


  

  constructor(private api: PseudoApiService)
  {
    this.locati = [];
    this.getlocati();
    this.coffees = [];
  }
    

  getlocati() {
    console.log('calling')
    this.api.ListaLocalitati()
      .subscribe(res => this.locati =
        res as CafeneaSauLocalitate[]);
  }

  
    

  getCoffees(idCafenea: number): ProdusDisponibil[] {
    
    console.log('coffees');
    this.api.ProduseDisponibile(idCafenea).subscribe((result => {
      this.coffees = result;
    }));
      return this.coffees;
      }
    
      



  ngOnInit(): void {

    

    // Obtin lista cu toate cafenelele si toate localitatile
    this.api.ListaLocalitati().subscribe(lista => {
      console.log('Am obtinut lista', lista);
      
    })

    // Un apel asemanator acestuia va returna lista cu sortimentele de cafea per
    // cafenea
    this.api.ProduseDisponibile(8133).subscribe(cafele => {
      console.log('Am obtinut o lista cu cafele', cafele);
    })
  }

  onSelect(denumire: CafeneaSauLocalitate): void {
    this.selectedLocatie = denumire;
  }

  
}





