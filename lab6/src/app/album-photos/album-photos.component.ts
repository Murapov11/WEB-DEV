import { Component } from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute} from "@angular/router";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
    photos : Photo[];
    constructor(private route: ActivatedRoute,
                private albumsService: AlbumsService) {
      this.photos = [];
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      console.log(id);
      this.albumsService.getPhoto(id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }
}
