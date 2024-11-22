import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

import { AuthServiceCRM } from 'app/servicesTRAVE/auth.service';

import { of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (route, state) =>
{
    const router: Router = inject(Router);
    const _authenticated=  localStorage.getItem('authenticated');
    var _authval: boolean=false;
    if(_authenticated =="true")
    {
        _authval=true;
    }
    // Check the authentication status
    return inject(AuthServiceCRM).check().pipe(
        switchMap((authenticated) =>
        {
            // If the user is not authenticated...
            if ( authenticated != true )
            {
                // Redirect to the sign-in page with a redirectUrl param
                const redirectURL = state.url === '/sign-out' ? '' : `redirectURL=${state.url}`;
                const urlTree = router.parseUrl(`sign-in?${redirectURL}`);

                return of(urlTree);
            }

            // Allow the access
            return of(true);
        }),
    );
};
