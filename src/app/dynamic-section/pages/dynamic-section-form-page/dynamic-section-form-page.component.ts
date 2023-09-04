import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DynamicSectionFormComponent } from '../../dynamic-section-form/dynamic-section-form.component';
import { SectionDataService } from './../../services/section-data.service';
import { SectionData } from '../../models';

@Component({
  selector: 'app-dynamic-section-form-page',
  standalone: true,
  imports: [CommonModule, RouterModule, DynamicSectionFormComponent],
  templateUrl: './dynamic-section-form-page.component.html',
  styleUrls: ['./dynamic-section-form-page.component.scss'],
})
export class DynamicSectionFormPageComponent {
  private dataService = inject(SectionDataService);

  protected readonly data$ = this.dataService
    .getData()
    .then((value) => value ?? ('undefined' as const));

  protected async onDataChange(data: SectionData): Promise<void> {
    await this.dataService.setData(data);
  }
}
