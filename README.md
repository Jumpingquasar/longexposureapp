# General Information
This is an Instagram clone, made in three days. As it utilizes a mock API, you don't need to create an account, nor do you need to enter valid credentials.
Every login credential responds with a success.

## Development Decisions
I have chosen to use FlatList for rendering the posts as FlatList does not render items when ther are not visible on the screen, helping with performance. 
Though this was a great addition I've encountered massive performance issues when multiple videos were on display on Search Screen. To counter this,
I've implemented a pressable that changes a redux state which dictates which video is played, only one at a time.

This app uses MirageJS mockAPI. Any requests are made internally by the app but for the contents to load, internet connection is required.




## Starting Metro

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Installing Packages

```bash
# For Android
npm install
# For iOS
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

## Building Packages

```bash
# Android
npx react-native run-android --mode=release
cd android && ./gradlew bundleRelease

# output location:
android/app/build/outputs/bundle/release/

# iOS
npx react-native run-ios --mode=release
```