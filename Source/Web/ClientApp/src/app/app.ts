import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  protected readonly isMenuOpen = signal(false);
  protected readonly drawNumbers = ['01', '03', '04', '07', '09', '10', '13', '15', '18', '20', '21', '22', '23', '24', '25'];
  protected readonly metricGroups = [
    [{ label: 'Pares', value: '7' }, { label: 'Ímpares', value: '8' }, { label: 'Soma', value: '215' }],
    [{ label: 'Primos', value: '5' }, { label: 'Sequências', value: '4' }, { label: 'Repetidas', value: '9' }],
    [{ label: 'Moldura', value: '9' }, { label: 'Internas', value: '6' }, { label: 'Amplitude', value: '24' }]
  ];
  protected readonly activeMetricGroup = signal(0);
  protected readonly chartBars = [
    { number: '01', height: 42 }, { number: '03', height: 79 }, { number: '04', height: 57 },
    { number: '07', height: 33 }, { number: '09', height: 68 }, { number: '10', height: 46 },
    { number: '13', height: 88 }, { number: '15', height: 62 }, { number: '18', height: 73 },
    { number: '20', height: 51 }, { number: '21', height: 38 }, { number: '22', height: 84 },
    { number: '23', height: 59 }, { number: '24', height: 70 }, { number: '25', height: 45 }
  ];
  private metricsRotationId?: ReturnType<typeof setInterval>;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.metricsRotationId = setInterval(() => {
      this.activeMetricGroup.update((current) => (current + 1) % this.metricGroups.length);
    }, 3600);
  }

  ngOnDestroy(): void {
    if (this.metricsRotationId) clearInterval(this.metricsRotationId);
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
