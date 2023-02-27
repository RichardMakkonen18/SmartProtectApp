import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private db: AngularFireDatabase) {
    //MODIFICAR VALORES DEVARIABLE CON SU VALOR
    this.db.object('user').set(true);
    this.db.object('contactos').set(true);

    //DETECTAR CAMBIOS DE VARIABLE
    this.db
      .object('alerta')
      .valueChanges()
      .subscribe((data) => {
        console.log(data);
      });
  }

  registrarContacto() {
    this.db.list('contactos').push({ nombre: 'kdddk', telefono: '3463637383' });
  }

  registrarUser() {
    this.db
      .list('user')
      .push({
        nombre: ' ',
        apellido: ' ',
        edad: 19,
        telefono: '4493011624',
        email: 'example@example.com',
      });
  }
}
