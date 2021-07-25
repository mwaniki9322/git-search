import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  profile: any
  repositories: any
  username: any

  constructor(private serviceService: ServiceService, private httpClient: HttpClient) { }
  submitName(){
    this.serviceService.updateProfile(this.username);
    this.serviceService.getPersonsInfo().subscribe((data:any) =>{
      this.profile = data

      // console.log(this.profile)

    })
    this.serviceService.getPersonsRepos().subscribe((data:any) =>{
      this.repositories = data;

      console.log(this.repositories)
    })

  }

  ngOnInit(){
    this.serviceService.getPersonsInfo().subscribe((data:any) =>{
      this.profile = data

      // console.log(this.profile)

    })
    this.serviceService.getPersonsRepos().subscribe((data:any) =>{
      this.repositories = data;

      console.log(this.repositories)
    })
  }
}
  
