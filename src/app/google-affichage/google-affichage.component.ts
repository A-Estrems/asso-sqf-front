import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-affichage',
  imports: [],
  templateUrl: './google-affichage.component.html',
  styleUrl: './google-affichage.component.scss'
})
export class GoogleAffichageComponent implements OnInit {
  googleDocsUrl = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://docs.google.com/document/d/2PACX-1vRP-EdMNBp3CDOFP_Bb8Z4s8QiJujj04onV6_XI-DSFIgvaQwPVE3IsBSfNh7at-Zt1psSuveO_w6lt/export?format=pdf";

  documentContent: string = '';

  ngOnInit() {
    fetch(this.googleDocsUrl)
      .then(response => response.text())
      .then(html => {
        this.documentContent = html;
        this.injectStyles();
      })
      .catch(error => console.error('Erreur de chargement:', error));
  }

  injectStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
    .document-content {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }
  `;
    document.head.appendChild(style);
  }
}
