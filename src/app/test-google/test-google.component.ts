import { Component } from '@angular/core';
import {GoogleAffichageComponent} from '../utils/google-affichage/google-affichage.component';

@Component({
  selector: 'app-test-google',
  imports: [
    GoogleAffichageComponent
  ],
  templateUrl: './test-google.component.html',
  styleUrl: './test-google.component.scss'
})
export class TestGoogleComponent {

}
