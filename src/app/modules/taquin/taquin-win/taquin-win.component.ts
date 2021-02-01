import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-taquin-win',
  templateUrl: './taquin-win.component.html',
  styleUrls: ['./taquin-win.component.css']
})
export class TaquinWinComponent implements OnInit {


  score = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.pipe(
      switchMap(params => this.score = params['id'])
    );
  }

}
