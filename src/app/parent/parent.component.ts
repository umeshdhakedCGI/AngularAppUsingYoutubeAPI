import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'YoutubeTrending';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showplaylist() {
    this.router.navigate(['/showPlaylist', 'myList']);
  }

}
