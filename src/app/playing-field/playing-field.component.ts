import { Component } from "@angular/core";


@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css']
})
export class PlayingFieldComponent {
 public emptySquare = '';
 public currentPiece1 = '';
 public currentPiece2 = '';
 public currentPiece3 = '';
 public currentPiece4 = '';
 public currentPiece5 = '';
 public currentPiece6 = '';
 public currentPiece7 = '';
 public currentPiece8 = '';
 public currentPiece9 = '';
 public xPiece = 'X';
 public oPiece = 'O';
 public turnValue = 0;
 public xWins = 0;
 public oWins = 0;
  
  constructor() {

  }
  

  onAddPiece1() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece1 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece1 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece2() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece2 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece2 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece3() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece3 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece3 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece4() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece4 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece4 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece5() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece5 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece5 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece6() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece6 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece6 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece7() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece7 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece7 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece8() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece8 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece8 = this.oPiece;
      console.log(this.oPiece);
    }
  }
  onAddPiece9() {
    this.turnValue++;
    if( this.turnValue % 2 !== 0 ) {
      this.currentPiece9 = this.xPiece;
      console.log(this.xPiece);
    } else {
      this.currentPiece9 = this.oPiece;
      console.log(this.oPiece);
    }
  }
}

