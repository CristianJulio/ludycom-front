import { Component, OnInit } from '@angular/core';
import { AreaService } from './areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css'],
})
export class AreasComponent implements OnInit {
  areas: any[] = [];

  constructor(
    private areasService: AreaService,
    ) {}

  ngOnInit(): void {
    this.areasService.getAreas().subscribe((data) => {
      this.areas = data.data
    });
  }

  deleteUser(areaCode: number) {
    const response = window.confirm("Are you sure?")

    if(!response) return
    
    this.areasService.deleteArea(areaCode).subscribe(() => {
      this.areas = this.areas.filter((area) => area.code !== areaCode)
    })
  }
}
