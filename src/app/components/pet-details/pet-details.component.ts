import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pets } from 'src/app/models/pets';
import { PetsService } from 'src/app/services/pets.service';
@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{
  pet!: Pets;
  petSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private petsService: PetsService) {

  }
  
  ngOnInit() {
    this.petSubscription = this.route.data.subscribe((data) => {
      this.pet = data['data'];
    })
  }
}
