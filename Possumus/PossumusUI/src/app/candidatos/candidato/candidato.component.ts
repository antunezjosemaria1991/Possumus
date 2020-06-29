import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { CandidatosService } from "src/app/shared/empleos.service";
import { NgForm } from "@angular/forms";
import { HttpEventType, HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmpleosComponent } from 'src/app/empleos/empleos.component';

@Component({
  selector: "app-candidato",
  templateUrl: "./candidato.component.html",
  styleUrls: ["./candidato.component.css"],
})
export class CandidatoComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private service: CandidatosService, private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.service.formData = {
      CandidatoId: 0,
      Nombre: "",
      Apellido: "",
      FechaDeNacimiento: null,
      Email: "",
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.CandidatoId == 0) {
      debugger;
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
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

  AddOrEditEmpleo(orderItemIndex, EmpleoId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, EmpleoId };
    this.dialog.open(EmpleosComponent, dialogConfig).afterClosed().subscribe(res => {
      //this.updateGrandTotal();
    });
  }

  public uploadFile = (files) => {

    debugger;
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);

    this.http
      .post("http://localhost:53755/api/upload", formData, {
        reportProgress: true,
        observe: "events",
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = "Upload success.";
          this.onUploadFinished.emit(event.body);
        }
      });
  };
}
