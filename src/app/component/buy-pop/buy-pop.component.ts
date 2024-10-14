import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-pop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-pop.component.html',
  styleUrl: './buy-pop.component.css'
})
export class BuyPopComponent {
  constructor(private router: Router, private matDialog: MatDialog) { }

  onButtonClick() {
    this.router.navigate(['/']);
    this.matDialog.closeAll();
  }
}
