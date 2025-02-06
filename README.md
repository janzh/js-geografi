# Triage-frontend

## Local development

### Install dependencies
`npm install`

### Run application
`npm run start`

### Run tests
`npm run test`

#### Check test coverage in the application
`npm run test:coverage`

### Check formatting and linting, tests
`npm run app:check`

### Fix formatting and linting errors
`npm run app:fix`

### Build application
`npm run build`

### Test docker file
`docker run -p 8080:8080 $(docker build -q .)`


### Build to Capacitor
First time on project:
`npx cap init`

Build for Android:
`npm run build`
`npm install @capacitor/android`
`npx cap add android`

### Sync your Vite build with the native projects
`npx cap sync`

### Opening and Running Your App
`npx cap open android`
Alternatively, you can open Android Studio and import the android/ directory as an Android Studio project.

### Republis app
1. `npm run build`
2. `npx cap open android`
3. Genereate signed APK with Android Studio.
4. Upload APK to Google Drive.
5. Download APK from  Google Drive, and install/update from already installed.
