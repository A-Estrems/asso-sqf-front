import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {ButtonDirective} from 'primeng/button';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-home',
  imports: [
    Card,
    ButtonDirective,
    Carousel,
    PrimeTemplate
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  articles: any[];
  responsiveOptions: any[];

  constructor() {
    this.articles = [
      {
        title: 'Un parcours de santé dans le temps',
        image: 'assets/article1.jpg',
        content: 'Le parcours de santé de Saint-Quentin-Fallavier, niché dans un cadre verdoyant, propose des stations d\'exercices variées le long de sentiers ombragés. Accessible à tous, il invite à combiner sport et détente en pleine nature, offrant un espace idéal pour se ressourcer et prendre soin de sa santé.'
      },
      {
        title: 'Une ville grandissante',
        image: 'assets/article2.jpg',
        content: 'Saint-Quentin-Fallavier connaît une expansion significative grâce à son dynamisme économique et sa position stratégique entre Lyon et Grenoble. Avec le développement de zones résidentielles modernes et l’essor des infrastructures, la ville attire de nouveaux habitants tout en renforçant ses services. Ce développement s’accompagne d’un équilibre entre urbanisation et respect de l’environnement, faisant de Saint-Quentin-Fallavier un lieu de vie attractif et en plein essor.'
      },
      {
        title: 'Un chateau animé',
        image: 'assets/article3.jpg',
        content: 'Le château médiéval de Saint-Quentin-Fallavier devient chaque année le théâtre d’événements captivants qui replongent les visiteurs dans le Moyen Âge. Tournois de chevaliers, reconstitutions historiques, ateliers d’artisanat et spectacles vivants animent les lieux dans une ambiance authentique. Ces festivités, idéales pour petits et grands, offrent une immersion unique dans l’histoire et mettent en valeur le patrimoine du château dans un cadre enchanteur.'
      },
      {
        title: 'Un place dans le temps',
        image: 'assets/article4.jpg',
        content: 'Au fil du temps, Saint-Quentin-Fallavier a su évoluer tout en préservant son identité. Depuis ses origines médiévales, marquées par son château, jusqu’à son développement industriel et résidentiel actuel, la ville s’est adaptée aux époques. Aujourd’hui, elle allie patrimoine historique et modernité, reflétant un équilibre entre tradition et dynamisme.'
      },
      {
        title: 'Un lac prisé',
        image: 'assets/article5.jpg',
        content: 'Le lac de Saint-Quentin-Fallavier est un havre de paix niché au cœur de la nature. Idéal pour une balade ou un moment de détente, il offre un cadre paisible où se mêlent faune et flore locales. Ce lieu prisé des habitants invite à la contemplation, au pique-nique et à des activités de plein air, faisant le bonheur des amoureux de la nature.'
      },
      {
        title: 'La vie à l\'époque',
        image: 'assets/article6.jpg',
        content: 'Dans les années 1900, la vie à Saint-Quentin-Fallavier était rythmée par l’agriculture et les traditions rurales. Les habitants, pour la plupart paysans, vivaient au gré des saisons, cultivant leurs terres et élevant du bétail. Le village, encore modeste, était un lieu de vie simple, marqué par la solidarité entre voisins et les fêtes locales qui animaient la communauté. Le château, témoin du passé, surplombait un quotidien authentique et paisible.'
      }
      // Ajoutez autant d'articles que nécessaire
    ];

    // Options pour rendre le carousel responsive
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  truncContent(text: string, limit: number = 100): string {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  }
}
