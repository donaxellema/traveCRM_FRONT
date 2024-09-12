import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgSwitch, NgSwitchCase } from '@angular/common';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ParametrosComponent } from './parametros/parametros.component';
import { CuentasComponent } from "./cuentas/cuentas.component";
import { EmpresaComponent } from "./empresa/empresa.component";
import { EtiquetasComponent } from "./etiquetas/etiquetas.component";

@Component({
  selector: 'app-configuraciones',
  standalone: true,
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './configuraciones.component.html',
  styleUrl: './configuraciones.component.scss',
  //imports: [CommonModule],
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, NgFor, NgClass, NgSwitch, NgSwitchCase, ParametrosComponent, CuentasComponent, EmpresaComponent, EtiquetasComponent],

  
})


export class ConfiguracionesComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
    drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    panels: any[] = [];
    selectedPanel: string = 'tiwilio';
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
    )
    {
    }

    ngOnInit(): void
    {
        // Setup available panels
        /* this.panels = [
          {
              id         : 'tiwilio',
              icon       : 'heroicons_outline:user-circle',
              title      : 'Tiwilio',
              description: 'Configura tus credenciales de twilio',
          },
          {
              id         : 'parametros',
              icon       : 'heroicons_outline:lock-closed',
              title      : 'Parametros',
              description: 'habilita o deshabilita parametros del sistema',
          }, */
          /* {
              id         : 'plan-billing',
              icon       : 'heroicons_outline:credit-card',
              title      : 'Plan & Billing',
              description: 'Manage your subscription plan, payment method and billing information',
          },
          {
              id         : 'notifications',
              icon       : 'heroicons_outline:bell',
              title      : 'Notifications',
              description: 'Manage when you\'ll be notified on which channels',
          },
          {
              id         : 'team',
              icon       : 'heroicons_outline:user-group',
              title      : 'Team',
              description: 'Manage your existing team and change roles/permissions',
          }, */
      //];

        this.panels = [
            {
                id         : 'tiwilio',
                icon       : 'heroicons_outline:user-circle',
                title      : 'Tiwilio',
                description: 'Configura tus credenciales de twilio',
            },
            {
                id         : 'parametros',
                icon       : 'heroicons_outline:cog',
                title      : 'Parametros',
                description: 'Habilita o deshabilita parametros del sistema',
            },
            {
                id         : 'empresa',
                icon       : 'heroicons_outline:building-office',
                title      : 'Empresa',
                description: 'Configuración de la empresa',
            },
            {
                id         : 'etiquetas',
                icon       : 'heroicons_outline:bookmark',
                title      : 'Etiquetas',
                description: 'Creacion, actualizacion y eliminacion de etiquetas',
            },
            /* {
                id         : 'plan-billing',
                icon       : 'heroicons_outline:credit-card',
                title      : 'Plan & Billing',
                description: 'Manage your subscription plan, payment method and billing information',
            },
            {
                id         : 'notifications',
                icon       : 'heroicons_outline:bell',
                title      : 'Notifications',
                description: 'Manage when you\'ll be notified on which channels',
            },
            {
                id         : 'team',
                icon       : 'heroicons_outline:user-group',
                title      : 'Team',
                description: 'Manage your existing team and change roles/permissions',
            }, */
        ];


        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) =>
            {
                // Set the drawerMode and drawerOpened
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
      }

      


      ngOnDestroy(): void
      {
          // Unsubscribe from all subscriptions
          this._unsubscribeAll.next(null);
          this._unsubscribeAll.complete();
      }
  
      // -----------------------------------------------------------------------------------------------------
      // @ Public methods
      // -----------------------------------------------------------------------------------------------------
  
      /**
       * Navigate to the panel
       *
       * @param panel
       */
      goToPanel(panel: string): void
      {
          this.selectedPanel = panel;
  
          // Close the drawer on 'over' mode
          if ( this.drawerMode === 'over' )
          {
              this.drawer.close();
          }
      }
  
      /**
       * Get the details of the panel
       *
       * @param id
       */
      getPanelInfo(id: string): any
      {
          return this.panels.find(panel => panel.id === id);
      }
  
      /**
       * Track by function for ngFor loops
       *
       * @param index
       * @param item
       */
      trackByFn(index: number, item: any): any
      {
          return item.id || index;
      }

}
