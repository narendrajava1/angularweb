import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotFoundService } from './services/not-found.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'app works!';
  subscription: Subscription;
  isNotFound: boolean = false;

  constructor(private nfService:NotFoundService){}
  ngOnInit(): void {
    this.nfService.notFound$.subscribe(isNotFound=>this.isNotFound=isNotFound);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
