import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
  // template: `
  //   <p style="background-color:mediumpurple;color:wheat" #pRef>
  //     Styled inline!
  //   </p>
  // `,
})
export class DebugComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
