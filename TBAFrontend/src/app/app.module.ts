import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { TudasComponent } from './tudas/tudas.component';
import { RestfulApiComponent } from './restful-api/restful-api.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  { component: FrontComponent, path: 'front' },
  { component: ProfilComponent, path: 'profil' },
  { component: TudasComponent, path: 'tudas' },
  { component: RestfulApiComponent, path: 'restfulapi' },
  { component: KapcsolatComponent, path: 'kapcsolat' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    TudasComponent,
    RestfulApiComponent,
    KapcsolatComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCK4I3-yXZYYjG1SNmcsn55wABdYfAS7xY'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
