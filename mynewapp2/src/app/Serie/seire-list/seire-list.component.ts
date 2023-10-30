import { Component, OnInit } from '@angular/core';
import { SerieService } from '../Serie.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-seire-list',
  templateUrl: './seire-list.component.html',
  styleUrls: ['./seire-list.component.css']
})
export class SeireListComponent implements OnInit {


  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries
  }

}
