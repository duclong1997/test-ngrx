import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LaborsState } from '../../store';
import { getData, getLabor } from '../../store/selectors/labor.selector';
import { LaborModule } from './../../labor.module';
import { LaborModel } from './../../models/labor.model';
import { getDetailLabor, loadLabor } from './../../store/actions/labor.action';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.scss'],
})
export class LaborComponent implements OnInit {
  pageIndex = 0;
  pageSize = 10;
  keyword = '';

  labors: LaborModule[] = [];

  labor: LaborModel = {
    id: 1,
    name: '',
    title: '',
    age: 1,
    gender: 1,
  };

  constructor(private store: Store<LaborsState>) {}

  ngOnInit(): void {
    this.store.dispatch(
      loadLabor({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        keyword: this.keyword,
      })
    );

    this.store.select(getData).subscribe((data) => {
      this.labors = data;
      console.log('labors: ', this.labors);
    });

    this.store.dispatch(
      getDetailLabor({
        id: 1,
      })
    );

    this.store.select(getLabor).subscribe((data) => {
      this.labor = data;
      console.log('labor: ', this.labor);
    });
  }
}
