import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { Pets } from 'src/app/models/pets';
import { Subscription } from 'rxjs';
import { PetsService } from 'src/app/services/pets.service';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  public petlist!: Pets[];
  petlistSubscription!: Subscription;
  class!: any;
  buttonVisible: boolean = false;

  public displayedColumns = ['', '', '', '', ''];
  public dataSource: any;    

  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  constructor(private petsServise: PetsService) {
    
  }
 
  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.petlist.slice(start, end);
    this.dataSource = part;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  ngOnInit() {
    this.petlistSubscription = this.petsServise.getPets().subscribe((data) => {
      this.petlist = data;
      this.totalSize = this.petlist.length;
      this.iterator();
    })
  };
  ngOnDestroy() {
    if (this.petlistSubscription) this.petlistSubscription.unsubscribe()
  }
}
