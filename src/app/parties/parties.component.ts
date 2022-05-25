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
      html: `<input type="text" id="theme" class="swal2-input" placeholder="Thème de la partie">
            <input type="number" id="joueurs_max" class="swal2-input" placeholder="Nombre de joueurs">
            <br>
            <br>
            <input type="radio" id="pr" name="rtype" value="1"> <b>Privée</b>
            <input type="radio" id="pb" name="rtype" value="2" style="margin-left: 25px;"> <b>Publique</b>
            <br>
            <br>
            <b style="justify-content: left;">Rejoindre cette partie?</b>
            <br>
            <br>
            <input type="radio" id="yes" name="ouinon" value="1"> Oui
            <input type="radio" id="no" name="ouinon" value="0" style="margin-left: 25px;"> Non`,
      confirmButtonText: 'Créer',
      showCancelButton: true,
      preConfirm: () => {
        const theme = (<HTMLInputElement>document.getElementById("theme")).value;
        const joueurs_max = (<HTMLInputElement>document.getElementById("joueurs_max")).value;
        // Room type
        let room: string;
        const prv = (<HTMLInputElement>document.getElementById("pr"));
        const pub = (<HTMLInputElement>document.getElementById("pb"));
        if (prv.checked) {
          console.log("prv= " + prv);
          room = prv.value;
        } else {
          room = pub.value;
        }

        // WithJoin
        let WithRegister: string;
        const oui = (<HTMLInputElement>document.getElementById("yes"));
        const non = (<HTMLInputElement>document.getElementById("no"));

        oui.checked ? WithRegister = "true" : WithRegister = "false";

        if (!theme || !joueurs_max) {
          Swal.showValidationMessage(`Tous les champs sont obligatoires`)
        }
        return {theme: theme, type: room, joueurs_max: joueurs_max, WithRegister: WithRegister }
      }
    }).then((result) => {
      if (result.value) {
        // Swal.fire(`
        //   Nom: ${result?.value.nom}
        //   Theme: ${result?.value.theme}
        // `.trim())
        this.addGame(result?.value.theme, result?.value.type, result?.value.joueurs_max, result?.value.WithRegister);
      }
    })
  }

  addGame(theme: string, type: string, joueurs_max: string, WithRegister: string) {
    sessionStorage.setItem("username", "amine");
    if (!sessionStorage.getItem("username")) {
      this.toastr.error('Vous devez vous connecter pour créer une partie!', 'Authentification requise!');
      this.router.navigate(['/login'], { queryParams: { returnUrl: '/parties' } })
    } else {
      let nom = sessionStorage.getItem("username");
      this.gamesService.createGame(WithRegister, nom!, joueurs_max, type).subscribe({
        next: (res) => {
          this.getAllGames();
          console.log("created");
        },
        error: (err) => {
          this.toastr.error('Une erreur est survenue!', 'Erreur!');
        }
      })
    }
  }

}
