// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB5NVHGz3QSwoSZKJ4oY8tsxQUJKzGJMmM',
    authDomain: 'your authDomain',
    databaseURL: 'https://angularfirebase-f3959.firebaseio.com',
    projectId: 'angularfirebase-f3959',
    storageBucket: 'angularfirebase-f3959.appspot.com',
    messagingSenderId: '147426021111',
    appId: '1:147426021111:web:101240500c8a27ac1b8df2',
  }
};
