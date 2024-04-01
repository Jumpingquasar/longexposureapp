### Starting Metro

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Installing Packages

```bash
#For Android
npm install
#For iOS
pod install
```
### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Building Packages

```bash
# Android
npx react-native run-android --mode=release
cd android && ./gradlew bundleRelease

#output location:
android/app/build/outputs/bundle/release/

# iOS
npx react-native run-ios --mode=release
```
## General Information
This app used MirageJS mockAPI. Any requests are made internally by the app but for the contents to load, internet connection is required.
There is no need to register, as any login request directs the user to Home Screen.