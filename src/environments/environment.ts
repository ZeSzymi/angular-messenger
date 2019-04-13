// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'X81FKcNm73RGh8Sha2giJVQHm0vCz0sh',
    domain: 'urbanik.eu.auth0.com',
    audience: 'https://floating-lake-53127.herokuapp.com/',
    redirect: 'https://floating-lake-53127.herokuapp.com/callback',
    scope: 'openid profile email'
  }
};