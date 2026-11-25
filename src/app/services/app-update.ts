import { inject, Service } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Service()
export class AppUpdate {
  private updates = inject(SwUpdate);

  constructor() {
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_READY') {
          if (confirm('A new version is available. Load it?')) {
            window.location.reload();
          }
        }
      });
    }
  }
}
