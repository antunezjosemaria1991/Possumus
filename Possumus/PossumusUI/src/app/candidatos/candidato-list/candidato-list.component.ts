import { Component, OnInit } from "@angular/core";
import { CandidatosService } from "src/app/shared/candidatos.service";
import { Candidato } from "src/app/shared/candidato.model";

@Component({
  selector: "app-candidato-list",
  templateUrl: "./candidato-list.component.html",
  styleUrls: ["./candidato-list.component.css"],
})
export class CandidatoListComponent implements OnInit {
  constructor(private service: CandidatosService) {}

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: Candidato) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id) {
    if (confirm("Are you sure to delete this record ?")) {
      this.service.deleteCandidato(id).subscribe(
        (res) => {
          debugger;
          this.service.refreshList();
          //this.toastr.warning('Deleted successfully', 'Register');
        },
        (err) => {
          debugger;
          console.log(err);
        }
      );
    }
  }
}
