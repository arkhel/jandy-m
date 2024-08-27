// /* SystemJS module definition */
// declare var module: NodeModule;
// interface NodeModule {
//   id: string;
// }


declare var $ENV: Env;
interface Env {
  apiUrl : string;
  storageUrl: string;
  baseHref : string;
  gtagId: string;
  appInsightsKey: string;
}
