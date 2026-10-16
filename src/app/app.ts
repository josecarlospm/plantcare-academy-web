import { Component } from '@angular/core';
import { ArchetypeViewComponent } from './archetype-view.component';

@Component({
  imports: [ArchetypeViewComponent],
  selector: 'app-root',
  template: `
    <main>
      <sf-archetype-view />
    </main>
  `,
})
export class App {
  readonly title = 'PlantCare Academy';
}
