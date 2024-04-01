import { CanActivateFn, Router } from '@angular/router';

export const timeGuard: CanActivateFn = (route, state) => {
  console.log("time validate!")
  let hour = new Date().getHours()
  console.log(hour)
  if(hour>=18 && hour<=23){
    return true
  } else {
    return false
  }
};
