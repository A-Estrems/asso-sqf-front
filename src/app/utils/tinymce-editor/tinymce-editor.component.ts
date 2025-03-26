import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {EditorComponent} from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-tinymce-editor',
  imports: [
    EditorModule,
    FormsModule,
    EditorComponent
  ],
  templateUrl: './tinymce-editor.component.html',
  styleUrl: './tinymce-editor.component.scss'
})
export class TinymceEditorComponent {

  articleContent: string = '';

  saveArticle() {
    localStorage.setItem('savedArticle', this.articleContent);
    alert('Article sauvegardé avec succès !');
  }

  loadArticle() {
    this.articleContent = localStorage.getItem('savedArticle') || '';
  }
}
