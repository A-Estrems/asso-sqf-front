import { Component } from '@angular/core';
import {TinymceEditorComponent} from '../utils/tinymce-editor/tinymce-editor.component';

@Component({
  selector: 'app-test-tiny',
  imports: [
    TinymceEditorComponent
  ],
  templateUrl: './test-tiny.component.html',
  styleUrl: './test-tiny.component.scss'
})
export class TestTinyComponent {

}
