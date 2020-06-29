import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CandidatoComponent } from "./candidatos/candidato/candidato.component";
import { CandidatoListComponent } from "./candidatos/candidato-list/candidato-list.component";
import { CandidatosComponent } from "./candidatos/candidatos.component";
import { CandidatosService } from "./shared/empleos.service";
import { FormsModule } from "@angular/forms";
import { EmpleosComponent } from "./empleos/empleos.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from "ngx-toastr";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    CandidatoComponent,
    CandidatoListComponent,
    EmpleosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
    // BrowserAnimationsModule,
    // ToastrModule.forRoot(),
  ],
  entryComponents:[EmpleosComponent],
  providers: [CandidatosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
