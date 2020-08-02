import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LaborComponent } from './containers/labor/labor.component';
import { effects } from './effects';
import { LaborRoutingModule } from './labor-routing.module';
import { reducers } from './store/index';

@NgModule({
  declarations: [LaborComponent],
  imports: [
    CommonModule,
    LaborRoutingModule,
    StoreModule.forFeature('labor', reducers),
    EffectsModule.forFeature(effects),
  ],
})
export class LaborModule {}
