import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from '../services/games.service';


@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  games: Game[] = [];

  constructor(private router: Router, private toastr: ToastrService, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getAllGames()
  }

  getAllGames() {
    this.gamesService.getAllGames().subscribe({
      next: (res) => {
        this.games = res;
      },
      error: (err) => {
        this.toastr.error('Une erreur est survenue!', 'Erreur!');
      }
    })
  }

  handleJoin(id: string) {
    let exist: Boolean;
    this.gamesService.doesExist("72e6be41-edbf-4e12-a72d-6c4574daed9c").subscribe(
      res => {
        this.gamesService.getOneGame("72e6be41-edbf-4e12-a72d-6c4574daed9c").subscribe(
          {
            next: (res) => {
              //traitement pour rejoindre game
              console.log("join game " + id)
            },
            error: (err) => {
              console.log("error");
              console.log(err);
            }
          }
        )
      }
    )
    console.log("rejoindre id " + id);
  }

  addGamePopup() {
    Swal.fire({
      title: 'Créer une nouvelle partie',
      html: `<input type="text" id="nom" class="swal2-input" placeholder="Nom de la partie">
            <input type="text" id="theme" class="swal2-input" placeholder="Thème">`,
      input: 'radio',
      inputOptions: {'prive': 'Privée', 'publique': 'Publique'},
      confirmButtonText: 'Créer',
      showCancelButton: true,
      preConfirm: () => {
        const nom = (<HTMLInputElement> document.getElementById("nom")).value
        const theme = (<HTMLInputElement> document.getElementById("theme")).value;
        if (!nom || !theme) {
           Swal.showValidationMessage(`Tous les champs sont obligatoires`)
         }
        return { nom: nom, theme: theme }
      }
    }).then((result) => {
      if(result.value) {
        // Swal.fire(`
        //   Nom: ${result?.value.nom}
        //   Theme: ${result?.value.theme}
        // `.trim())
        this.addGame(result?.value.nom, result?.value.theme);
      }
      })
  }

  addGame(nom: string, theme: string) {
    if(! sessionStorage.getItem("username")) {
      this.toastr.error('Vous devez vous connecter pour créer une partie!', 'Authentification requise!');
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/parties' }})
    }
  }

}
