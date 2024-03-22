import { Component, Input, OnInit } from '@angular/core';
import { FileShareService } from '../file-share.service';
import { FileWebsocketService } from '../file-websocket.service';

@Component({
  selector: 'app-text-content-preview',
  standalone: true,
  imports: [],
  templateUrl: './text-content-preview.component.html',
  styleUrl: './text-content-preview.component.css'
})
export class TextContentPreviewComponent implements OnInit{

  @Input("fileId") fileId: string = '';

  fileContent = '';

  constructor(
    private service: FileShareService,
    private websocket: FileWebsocketService
  ) {}

  async ngOnInit() {
    this.fileContent = await (this.service.getFileContentString(this.fileId));
  }

}
