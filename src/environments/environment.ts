// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  debuggingPresentation: true,
  birthdaysURL: 'http://localhost:8000/birthdays',
  birthdayURL: 'http://localhost:8000/birthday',
  giftsURL: 'http://localhost:8000/gifts',
  giftedGifts: 'http://localhost:8000/gifted-gifts',
  giftURL: 'http://localhost:8000/gift',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
