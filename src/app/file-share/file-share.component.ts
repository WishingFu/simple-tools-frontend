
import { Component, OnInit } from '@angular/core';
import { FileShareService } from '../file-share.service'
import { LocalFile } from '../common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-file-share',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './file-share.component.html',
  styleUrl: './file-share.component.css'
})
export class FileShareComponent implements OnInit{

  fileList: LocalFile[] = [];

  checkList : {[key: string]: boolean}= {};

  constructor(private service: FileShareService) {

  }

  async ngOnInit() {
    const result = await this.service.getFileList();
    
    if(result.code === 0) {
      this.fileList = result.data!;
    }
  }

  async deleteFiles() {
    const deleteFileNames = Object.keys(this.checkList).filter(k => this.checkList[k]);
    if(!deleteFileNames.length) {
      return;
    }
    const fileNames = deleteFileNames.join('】,【');
    const del = confirm(`确定要删除文件【${fileNames}】吗？`);
    if(del) {
      await this.service.deleteFiles(deleteFileNames);
      this.fileList = (await this.service.getFileList()).data!;
    }
  }

}
