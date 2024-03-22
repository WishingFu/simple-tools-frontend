import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileShareService } from '../file-share.service';
import { LocalFile } from '../common';
import { HttpApiService } from '../http-api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TextContentPreviewComponent } from '../text-content-preview/text-content-preview.component';

@Component({
  selector: 'app-file-preview',
  standalone: true,
  imports: [TextContentPreviewComponent],
  templateUrl: './file-preview.component.html',
  styleUrl: './file-preview.component.css'
})
export class FilePreviewComponent implements OnInit{

  private fileId: string = '';

  file?: LocalFile;

  fileContent: string = '';

  showPreview = false;

  constructor(
    private route: ActivatedRoute,
    private service: FileShareService,
    public http: HttpApiService,
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fileId = params['fileId'];
      this.getFileInfo();
    });
  }

  async getFileInfo() {
    this.file = (await this.service.getFileInfo(this.fileId)).data;
  }

  downloadFile() {
    open(`${this.http.host}/file-share/download/${this.file?.id}`);
  }

  get previewUrl(): SafeUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(`${this.http.host}/file-share/preview/${this.file?.id}`);
  }

  get fileType(): string{
    const fileName = this.file!.originName;
    const parts = fileName?.split(".");
    return parts[parts?.length - 1];
  }
}
