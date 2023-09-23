import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => { //can I activate that route
  if (localStorage.getItem('token')){
    return true
  }
  alert("You don't have permission to access this page")
  return false
};
