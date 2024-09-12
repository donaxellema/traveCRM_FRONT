import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { SystemServices } from 'app/servicesTRAVE/systemServices/alerts.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { campaniasServiceCRM } from 'app/servicesTRAVE/campanias/campanias.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-campanias-all-dialog',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule,MatFormFieldModule,FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './campanias-all-dialog.component.html',
  styleUrl: './campanias-all-dialog.component.scss'
})
export class CampaniasAllDialogComponent  implements OnInit{
  private searchSubject: Subject<string> = new Subject();

  searchTerm: string = '';
  public index:number = 0
  public limit:number = 5
  public offset:number = 0
  totalElementos = 0;
  public pageEvent: PageEvent = new PageEvent;

  campaniasDataCambiante = new BehaviorSubject<any[]>([]);
  campaniasData:any;


  

  constructor(
    
    //private _personaService: personasServiceCRM,
    private _systemServices:SystemServices,
    private _campaniasServices: campaniasServiceCRM,
  public dialogRef: MatDialogRef<CampaniasAllDialogComponent>,

  )
  {
    /* this.searchSubject.pipe(
      debounceTime(300), // Retardo de 300 ms para evitar múltiples llamadas rápidas
      distinctUntilChanged() // Evita llamadas si el valor no ha cambiado
    ).subscribe(searchTerm => {
      if (searchTerm.length >= 3) {
        //this.performSearch(searchTerm);
        this.getCampaniasSearch()
      }else{
        this.getCampanias()
      }
    }); */
  }


ngOnInit(): void {
  this.getCampanias()
}



  onSearchChange(searchTerm: string): void {
    this.searchSubject.next(searchTerm);
  }

  getCampaniasSearch(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      buscar:this.searchTerm,
      opcion:"S",
      _limite:this.limit,
      _offset:this.offset
  }

    this._campaniasServices.getCampaniasSearch(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        //this.campaniasDataCambiante.next(response.data)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }




  getCampanias(){
    console.log(this.limit)
    console.log(this.offset)
    const obj={
      etiq_id:"",
      opcion:"C",
      _limite:this.limit,
      _offset:this.offset
  }

    this._campaniasServices.getCampanias(obj).subscribe(
      (response:any) => {
        console.log(response)
        this.totalElementos = response.totalItems
        //this.campaniasDataCambiante.next(response.data)
        this.campaniasData= response.data

        console.log("this.personDataCambiante")
        //console.log(this.campaniasDataCambiante.value)
      },
      (error) => {
         
        console.log(error);
          this._systemServices.showAlertError(error.error.error);
        //this.messageService.add({ severity: 'error', summary: 'Error!', detail: error.error.error });

      }
    );
  }



  public getServerData(event: PageEvent): PageEvent {
    this.index = event.pageIndex
    this.limit = event.pageSize
    this.offset=this.index * this.limit
    this.getCampanias();
    return event
  }



  onCancel(): void {
    this.dialogRef.close();
  }

}
