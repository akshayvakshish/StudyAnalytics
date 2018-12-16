import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  player: YT.Player;
  constructor() { }

  ngOnInit() {
  }
 
  private id: string = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    player.duration(player.getDuration()-2);
    console.log("video length-"+player.getDuration());
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
    
  }
}
