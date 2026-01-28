import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  
  if (!auth.isLogged()) {

      

    if (state.url === '/login') {
      return true;
    }

    router.navigate(['/login'], {
      replaceUrl: true
    });

    return false;
  }

  
  return true;
};
