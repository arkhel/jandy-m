// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    apiUrl: "https://api.sigma-alimentos.com/budgets/travelexpenses-management",
    production: false,
    baseHref:"/jandy/"
};
  
  try {
    environment.baseHref = $ENV.baseHref ? $ENV.baseHref : environment.baseHref;
    environment.apiUrl = $ENV.apiUrl ? $ENV.apiUrl : environment.apiUrl;
    
    console.log("Environment: ")
    console.log($ENV)
  } catch (e) {
    console.warn(e);
  }
  
  