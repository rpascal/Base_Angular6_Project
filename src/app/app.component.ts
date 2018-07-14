import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NavigationNode } from '@core/navigation/navigation-node.model';
import { NavigationService } from '@core/navigation/navigation.service';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'scraper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentYear: number;
  isSideNavOpen: boolean;
  showSpinner: boolean;
  sideNavMode: 'over' | 'push' | 'side';
  mobileQuery: MediaQueryList;
  sideNavMenu: NavigationNode[];

  private mobileQueryListener: () => void;
  private sideNavWidthVisible = 768; // equivalent to Bootstrap "md" class for medium screens
  private takeUntilSubject: Subject<void>;

  constructor(
    media: MediaMatcher,
    private router: Router,
    private changeRef: ChangeDetectorRef,
    private navigationService: NavigationService
  ) {
    this.takeUntilSubject = new Subject<void>();
    this.currentYear = new Date().getFullYear();
    this.mobileQuery = media.matchMedia(
      `(max-width: ${this.sideNavWidthVisible}px`
    );
    this.mobileQueryListener = () => {
      this.checkScreenSize();
      changeRef.detectChanges();
    };
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.takeUntilSubject.next();
    this.takeUntilSubject.complete();
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.sideNavMenu = this.navigationService.getNavigationInfo();
    this.checkScreenSize();

    this.router.events
      .pipe(
        filter(e => e instanceof NavigationStart),
        takeUntil(this.takeUntilSubject)
      )
      .subscribe(e => {

      });

    this.router.events
      .pipe(
        filter(
          e =>
            e instanceof NavigationEnd ||
            e instanceof NavigationCancel ||
            e instanceof NavigationError
        ),
        takeUntil(this.takeUntilSubject)
      )
      .subscribe(e => {

      });


  }

  private checkScreenSize(): void {
    this.isSideNavOpen = !this.mobileQuery.matches;
    this.sideNavMode = this.isSideNavOpen ? 'side' : 'over';
  }
}
