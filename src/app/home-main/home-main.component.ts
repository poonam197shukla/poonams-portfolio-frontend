import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent {
  
  constructor(private http: HttpClient) { }

  downloadFile() {
    // Replace 'your_file_url' with the URL of the file you want to download
    const fileUrl =  'D:/Poonam/Poonam-Files/Learning/FullStack/FullStack-portFolio/Frontend/Poonam-Portfolio/src/app/home-mainPoonam_Shukla_Resume.pdf'
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Poonam_Shukla_Resume.pdf'; // Replace 'filename.ext' with the desired file name and extension
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }


}
