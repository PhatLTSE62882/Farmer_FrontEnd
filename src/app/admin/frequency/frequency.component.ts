import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/service/admin.service';
import { Frequency } from 'src/model/frequency';

@Component({
  selector: 'app-frequency',
  templateUrl: './frequency.component.html',
  styleUrls: ['./frequency.component.css']
})
export class FrequencyComponent implements OnInit {

  frequencyList:Frequency[];
  constructor(private adminService:AdminService) { 
    this.adminService.getAllFrequency().subscribe(res=>{
      this.frequencyList = res as Frequency[];
    })
  }

  ngOnInit() {

  }

}
