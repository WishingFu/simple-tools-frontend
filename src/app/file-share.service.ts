import { Injectable } from '@angular/core';
import { HttpApiService } from './http-api.service';
import { LocalFile, Result } from './common';

@Injectable({
  providedIn: 'root'
})
export class FileShareService {

  constructor(private http: HttpApiService) { }

  public async getFileList(): Promise<Result<LocalFile[]>> {
    return await this.http.get("/file-share/file/list");
  }

  public async getFileInfo(fileId: string): Promise<Result<LocalFile>> {
    return await this.http.get(`/file-share/file/${fileId}`);
  }

  public async getFileContentString(fileId: string): Promise<string> {
    return await this.http.getString(`/file-share/preview/${fileId}`);
  }

  public async deleteFiles(fileNames: string[]): Promise<Result<number>> {
    return await this.http.delete(`/file-share/files`, fileNames);
  }
}
