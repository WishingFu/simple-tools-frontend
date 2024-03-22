import { Routes } from '@angular/router';

import { FileShareComponent } from './file-share/file-share.component'
import { FilePreviewComponent } from './file-preview/file-preview.component'

export const routes: Routes = [
    { path: "file-share", pathMatch:"full", component: FileShareComponent},
    { path: "file-share/preview/:fileId", pathMatch: 'full', component: FilePreviewComponent}
];
