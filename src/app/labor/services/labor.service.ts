import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LABOR, LABORS } from './../datas/labor.data';
import { LaborModel } from './../models/labor.model';

@Injectable({
  providedIn: 'root',
})
export class LaborService {
  constructor() {}

  getLabors(
    pageIndex: number,
    pageSize: number,
    keyword: string
  ): Observable<LaborModel[]> {
    return of(LABORS);
  }

  getLaborById(id: number): Observable<LaborModel> {
    return of(LABOR);
  }
}
