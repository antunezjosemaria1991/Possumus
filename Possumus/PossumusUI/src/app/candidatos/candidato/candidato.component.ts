import { Component, OnInit } from "@angular/core";
import { CandidatosService } from "src/app/shared/candidatos.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-candidato",
  templateUrl: "./candidato.component.html",
  styleUrls: ["./candidato.component.css"],
})
export class CandidatoComponent implements OnInit {
  constructor(
    private service: CandidatosService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      id: 0,
      Nombre: "",
      Apellido: "",
      FechaDeNacimiento: null,
      Email: "",
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0) this.insertRecord(form);
    else debugger;
    this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postCandidato().subscribe(
      (res) => {
        debugger;
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        debugger;
        console.log(err);
      }
    );
  }
  updateRecord(form: NgForm) {
    debugger;
    this.service.putCandidato().subscribe(
      (res) => {
        this.resetForm(form);
        this.service.refreshList();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
