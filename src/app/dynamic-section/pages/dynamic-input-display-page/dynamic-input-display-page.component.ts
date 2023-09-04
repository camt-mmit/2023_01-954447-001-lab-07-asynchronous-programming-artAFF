import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDataService } from '../../services/section-data.service';
import { DynamicInputDisplayComponent } from '../../dynamic-input-display/dynamic-input-display.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-dynamic-input-display-page',
  standalone: true,
  imports: [CommonModule, DynamicInputDisplayComponent],
  templateUrl: './dynamic-input-display-page.component.html',
  styleUrls: ['./dynamic-input-display-page.component.scss'],
})
export class DynamicInputDisplayPageComponent {
  private readonly dataService = inject(SectionDataService);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.params.pipe(
    switchMap(
      async (params) =>
        ((await this.dataService.getData()) ?? [])[params['index']],
    ),
  );
}
