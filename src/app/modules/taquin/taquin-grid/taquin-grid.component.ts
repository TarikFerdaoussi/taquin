import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-taquin-grid',
  templateUrl: './taquin-grid.component.html',
  styleUrls: ['./taquin-grid.component.css']
})
export class TaquinGridComponent implements OnInit {

  gridSize: number;
  grid: any[];
  count = 0;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.initGrid();
  }

  initGrid() {
    this.count = 0;
    this.gridSize = 16;
    const gridToShuffle = [];
    const numberByLines = this.gridSize/4;
    for (let i = 0; i < this.gridSize; i++) {
      gridToShuffle.push({
        x : i%numberByLines,
        y : Math.floor(i/numberByLines),
        value : i
      });
    };
    this.grid = this.shuffle(gridToShuffle);
    // afin d'eviter les taquin insolvable
    let melange = 0;
    const indexOfZero = this.grid.findIndex((element) => element.value === 0);
    const pos = Math.abs(this.grid[indexOfZero].y - 4)
    for (var i = 0; i < this.grid.length; i++) {
     
      for (var j = i + 1; j < this.grid.length; j++) {
        if (this.grid[i].value > this.grid[j].value) {
          if (this.grid[i].value !== 0 && this.grid[j].value !== 0) {
            melange++;
          } 
        }
      }
    }
    if((pos + melange)%2 === 0){
      // on remélange
      this.initGrid();
    }else{
      console.log(pos,melange);
    }
    //fin algo taquin insolvable
  }

  clickOnNumber(number: any) {
    if (number.value) {
      const indexOfZero = this.grid.findIndex((element) => element.value === 0);
      const indexOfNumber = this.grid.findIndex((element) => element.value === number.value);

      if ((number.x === (this.grid[indexOfZero].x + 1)  || number.x === (this.grid[indexOfZero].x - 1) )&& number.y === (this.grid[indexOfZero].y)
          || (number.y === (this.grid[indexOfZero].y + 1)  || number.y === (this.grid[indexOfZero].y- 1) )&& number.x === (this.grid[indexOfZero].x)){
       this.swapValues(indexOfZero, indexOfNumber);
       this.count++;
       //check if we win
       if (this.grid[indexOfNumber].x === 3 && this.grid[indexOfNumber].y === 3) {
        let win = true;
        for (let i = 1; i < this.grid.length-1; i++) {
          if (this.grid[i].value !== this.grid[i-1].value +1){
            win = false;
            break;
          }
        }
        if(win) {
          this.router.navigate(['win', this.count], { relativeTo: this.route });
        }
      }      
       
    }
      }
      
  }

  private swapValues(indexOfZero: any, indexOfNumber: any) {
    let t = this.grid[indexOfNumber].value;
        this.grid[indexOfNumber].value = this.grid[indexOfZero].value;
        this.grid[indexOfZero].value = t;
  }

  /**
    * Shuffles array in place. ES6 version
    * Fisher–Yates shuffle algorithm
    * @param {Array} a items An array containing the items.
  */
  private shuffle(a: any[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let t = a[i].value;
         a[i].value = a[j].value;
         a[j].value = t
    }
    return a;
  }

}
