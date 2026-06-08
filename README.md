# Mobile Application Design - React Native + Expo

This repository contains the laboratory assignments for the **Mobile Application Design** course at the **Warsaw University of Technology** (Politechnika Warszawska).

## **Lab I: Project Setup and Configuration**

## I.1. Environment Setup

### I.1.1. Install [Node.js](https://nodejs.org/en/download)

* Recommended [Version LTS](https://nodejs.org/en/blog/release/v24.15.0) (Long Term Support):

    ```bash
    # Download and install nvm:
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

    # in lieu of restarting the shell
    \. "$HOME/.nvm/nvm.sh"

    # Download and install Node.js:
    nvm install 24

    # Verify the Node.js version:
    node -v # Should print "v24.15.0".

    # Verify npm version:
    npm -v # Should print "11.12.1".
    ```

### I.1.2. Install Expo CLI

```bash
npx create-expo-app@latest
```

* Follow the prompts to create a new Expo project. (`y` and enter 2 times)

* Wait for the installation to complete. This may take a few minutes.

### I.1.3. Create a new Expo project

```bash
cd my-app ## my-app | project-name from I.1.2.
npm start
```

### I.1.4. Quit the development server

* Press `Ctrl + C`


## I.2. Emulator Setup (`Android Studio emulator`)

### I.2.1. Download the newest tar.gz [Android Studio](https://developer.android.com/studio?hl=en)

* Find the section "Android Studio downloads"

* Click on Linux (64-bitowy) and Accept the terms and conditions to download the file.

* Go to downloads folder

```bash
cd ~/Pobrane # cd ~/Downloads, depending on system language
```

### I.2.2. Extract and install Android Studio

```bash
tar -xvzf android-studio-panda4-patch1-linux.tar.gz # android-studio-*-linux.tar.gz

sudo mv android-studio /opt/

sudo ln -sf /opt/android-studio/bin/studio.sh /usr/local/bin/android-studio
```

### I.2.3. Run Android Studio and set up the emulator

```bash
android-studio
```

* Follow the setup wizard to install the necessary components:
  * Next > (Choose -> Standard) Next > Next > (Terms -> Accept) Next > Next > (Wait for Downloading Components) Finish
  * Close the welcome screen and open the AVD Manager (Android Virtual Device Manager) from the toolbar.

## I.3. Installation CLI tools

### I.3.1. Create SDK directory

```bash
mkdir -p $HOME/Android/Sdk/cmdline-tools
cd $HOME/Android/Sdk/cmdline-tools
```

### I.3.2. Download the latest command line tools

* Check it on the same page like in step [I.2.1](#i21-download-the-newest-targz-android-studio) [Android Studio](https://developer.android.com/studio?hl=en)

* Find the section `Command line tools only`

* Copy title from column `SDK tools package` for `Linux`

    ```bash
    wget https://dl.google.com/android/repository/commandlinetools-linux-14742923_latest.zip # replace /commandlinetools-linux-*-latest.zip with the actual file name
     ```

### I.3.3. Extract the downloaded file

```bash
unzip commandlinetools-linux-14742923_latest.zip # replace with the actual file name
```

### I.3.4. Change the directory name to `latest`(it's important!)

```bash
mv cmdline-tools latest
```

### I.3.5. Checkout the final structure

* Should look like this:

```bash
$HOME/
└──Android/
   └──Sdk/
      └──cmdline-tools/
         └──latest
```

## I.4. Set environment variables

### I.4.1. Open the configuration file

```bash
nano ~/.bashrc # or ~/.zshrc, depending on the shell you use
```

### I.4.2. Add the following lines at the end of the file

```bash
# Mobile Application Design

export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
```

### I.4.3. Apply the changes

```bash
# Reload the configuration file
source ~/.bashrc
```

### I.4.4. Verify the installation

* Verify if the sdkmanager is recognized

    ```bash
    sdkmanager --version
    ```

* List available SDK packages to confirm it's working

    ```bash
    sdkmanager --list
    ```

## I.5. Create new emulator

### I.5.1. List available system images

```bash
sdkmanager --list 
```

### I.5.2. Download image for Android 36 with Google APIs (x86_64 architecture)

```bash
sdkmanager "system-images;android-36;google_apis;x86_64" # replace with the actual image name if different
```

### I.5.3. Create a new emulator based on Pixel 9

```bash
avdmanager create avd -n pixel_9_36 -k "system-images;android-36;google_apis;x86_64" --device "pixel_9"
```

### I.5.4. Start the emulator

```bash
emulator -avd pixel_9_36
```

### I.5.5. Verify the emulator is running (on a new terminal)

```bash
adb devices
```

* Should show the emulator as a connected device, similar to this:

    ```bash
    List of devices attached
    emulator-5554   device
    ```

## I.6. In case of issues

### I.6.1. Kill emulator processes

```bash
pkill -f emulator`
```

### I.6.2. Factory reset

```bash
emulator -avd pixel_9_36 -wipe-data
```

### I.6.3. Turn off Snapshots (for better performance)

Run the emulator with the `-no-snapshot-load` option to disable loading snapshots, which can improve performance and reduce startup time.

```bash
emulator -avd pixel_9_36 -no-snapshot-load
```

* On emulator rigth bar -> click on `...`  -> Snapshot -> Take Snapshot

* Go to Settings in Snapshot and uncheck `Auto-save current state to Quickboot` -> No

* On pop-up click `yes`. Emulator will restart and load the default state instead of the snapshot

## I.6.4. Performance Tuning `nano ~/.android/avd/pixel_9_36.avd/config.ini`

```bash
...
hw.keyboard=yes # Enable hardware keyboard support for easier text input
...
hw.gpu.enabled=yes # Enable GPU emulation for better graphics performance
...
hw.ramSize=4G # 4GB (per emulator)
...
vm.heapSize=512 # or 512 for 512MB (per application)
```

## I.7. Project structure

### I.7.1. The most important files

[`index.tsx`](./my-app/app/(tabs)/index.tsx) (replaces the old `App.tsx`) entry point of the application

[`package.json`](./my-app/package.json) project configuration and dependencies

[`tsconfig.json`](./my-app/tsconfig.json) TypeScript configuration

### I.6.2. Style by StyleSheet

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### I.7. Exercise 1 - Create screen

### I.7.1. Replace [`index.tsx`](./my-app/app/(tabs)/index.tsx) content with the following code

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Campus</Text>
      <Text style={styles.subtitle}>My first mobile application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
});
```

### I.7.2. Run the application to see the changes

```bash
npm start
```

* Open Android by tapping `a` in the terminal to launch the app on the emulator.

* Wait for Installing Expo Go on pixel_9_36... and the `entry.js` to load.

* In case of issues back to [`I.6.`](#i6-in-case-of-issues)

## I.8. Interactivity - useState

### I.8.1. Add simple interactivity to the screen, change [`index.tsx`](./my-app/app/(tabs)/index.tsx) content to the following code

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
// Add import for Button and useState
import { ... Button } from 'react-native';
import { useState } from 'react';
...
// Initialize state for the counter
export default function App() {
  const [count, setCount] = useState<number>(0);
...
// Add counter to the screen
    <View style={styles.container}> 
      ...
      <Text style={styles.title}>Counter:</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      ...
    </View>
...
// Add styles for the counter
const styles = StyleSheet.create({
  ...
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ...
})
```

### I.8.2. Test the application

* If application wasn't turned off, it should automatically reload

## I.9. Exercise 2 - Custom Component

### I.9.1. Create a new file `components/Header.tsx`

```bash
touch components/Header.tsx
```

### I.9.2. Add the following code to [`components/Header.tsx`](./my-app/components/Header.tsx)

[`components/Header.tsx`](./my-app/components/Header.tsx)

```tsx
import { Text, View } from 'react-native';

export function Header() {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Student Application</Text>
    </View>
  );
}
```

### I.9.3. Import and use the `Header` component in [`index.tsx`](./my-app/app/(tabs)/index.tsx)

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
// Add import for Header
import { Header } from '../components/Header';
...
export default function App() {
  ...
  return (
    <View style={styles.container}>
      <Header /> {/* Use the Header component */}
      ...
    </View>
  );
  ...
}
```

* If application wasn't turned off, it should automatically reload

### I.9.4. Commit the changes to Git

```bash
git init # if not already initialized
git add .
git commit -m "Lab 1 - RN basics"
```

## I.10. Homework

### I.10.1. Change the background color of application

```bash
mkdir -p styles       # For all styles in the project
touch styles/indexStyles.ts # For main application styles
```

* Move the `styles` object from [`index.tsx`](./my-app/app/(tabs)/index.tsx) to [`styles/indexStyles.ts`](./my-app/styles/indexStyles.ts)

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
import { styles } from '@/styles/indexStyles'; // Import styles from the new file
import { Text, View, Button } from 'react-native'; // Remove StyleSheet import if not used in this file anymore
...
```

[`styles/indexStyles.ts`](./my-app/styles/indexStyles.ts)

```tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ // Add prefix export
  container: {
    flex: 1,
    backgroundColor: '#ff0000', // Change to your desired color
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
```

### I.10.2. Add second button "decrease"

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
export default function App() {
  ...
  return (
    <View style={styles.container}>
      ...
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      ...
    </View>
  );
  ...
}
```

### I.10.3. Add component [`Footer`](./my-app/components/Footer.tsx) with StyleSheet in [`FooterStyles.tsx`](./my-app/styles/FooterStyles.tsx)

```bash
touch styles/FooterStyles.tsx
touch components/Footer.tsx
```

[`styles/FooterStyles.tsx`](./my-app/styles/FooterStyles.tsx)

```tsx
import { StyleSheet } from 'react-native';

export const FooterStyles = StyleSheet.create({
  FooterContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#000',
  },
  FooterText: {
    fontSize: 12,
    color: '#333',
  },
});
```

[`components/Footer.tsx`](./my-app/components/Footer.tsx)

```tsx
import { Text, View } from 'react-native';
import { FooterStyles } from '@/styles/FooterStyles';

export function Footer() {
  return (
    <View style={FooterStyles.FooterContainer}>
      <Text style={FooterStyles.FooterText}>2026 Warsaw University of Technology</Text>
    </View>
  );
}
```

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
// Add import for Footer
import { Footer } from '../components/Footer';
...
export default function App() {
  ...
  return (
    <View style={styles.container}>
      ...
      <Footer /> {/* Use the Footer component */}
    </View>
  );
  ...
}
```

### I.10.4. Test the application

```bash
npm start
```

* If application wasn't turned off, it should automatically reload

### I.10.5. Commit the changes to Git

```bash
git add .
git commit -m "Lab 1 - RN basics+"
```

## **Lab II: Components, Props, Project Structure**

## II.1. Refactoring - Project Structure

### II.1.0. Create this structure in main directory

```bash
mkdir -p components             # components      (I.9.3.)
touch components/Header.tsx     # ├── Header.tsx  (I.9.3.)
touch components/Footer.tsx     # ├── Footer.tsx  (I.10.3.)
touch components/ListItem.tsx   # └── ListItem.tsx (II.1.2.)
mkdir -p screens                # screens         (II.1.0.)
mkdir -p styles                 # styles          (I.10.2.)
touch styles/indexStyles.tsx    # ├── indexStyles.tsx (I.10.2.)
touch styles/FooterStyles.tsx   # ├── FooterStyles.tsx (I.10.3.)
touch styles/HeaderStyles.tsx   # ├── HeaderStyles.tsx (II.1.1.)
touch styles/ListItemStyles.tsx # └── ListItemStyles.tsx (II.1.2.)
```

### II.1.1. Refactor in `components`

[`HeaderStyles.tsx`](./my-app/styles/HeaderStyles.tsx)

```tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#4A90E2",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
});
```

[`Header`](./my-app/components/Header.tsx)

```tsx
...
import { styles } from '@/styles/HeaderStyles';

// Add type for props
type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) // add props in () { 
  return (
    <View style={styles.container}> // add style = {styles.container}
      <Text style={styles.title}>{title}</Text> // replace old Text
    </View>
  );
  ...
```

[`index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
...
    <View style={styles.container}>
      {/* Replace: <Header/>
      And <Text style={styles.title}>Smart Campus</Text> */}
      <Header title = "Smart Campus"/>
      ...
    </View>
    ...
```

### II.1.2. Create new component `ListItem`

[`ListItemStyles.tsx`](./my-app/styles/ListItemStyles.tsx)

```tsx
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        margin: 10,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        elevation: 3,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 5,
    },
});
```

[`ListItem.tsx`](./my-app/components/ListItem.tsx)

```tsx
import { View, Text } from "react-native";
import { styles } from "@/styles/ListItemStyles";

type ListItemProps = {
    title: string;
    description: string;
};

export default function ListItem({ title, description }: ListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{description}</Text>
        </View>
    );
}
```

### II.1.3. Rendering many elements

[`index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
import ListItem from '@/components/ListItem';
import { ..., ScrollView // Add ScrollView import
} from 'react-native';
  ...
  const [count, setCount] = useState<number>(0);
  const events = [
    { id: 1, title: "Lecture: React", description: "A1 10:00"},
    { id: 2, title: "Workshop: AI", description: "B2, 12:00" },
    { id: 3, title: "Meeting: Coding Club", description: "C3, 15:00" },
  ];
  ...

  <view style={styles.container}>
    ...
    <ScrollView>
      {events.map(event => (
        <ListItem 
          key={event.id} 
          title={event.title} 
          description={event.description} />
      ))}
    </ScrollView>
    ...
  </View>
  ...
```

## II.2. Practice

### II.2.1. Add field `location` to the events

[`ListItem.tsx`](./my-app/components/ListItem.tsx)

```tsx
type ListItemProps = {
    ...
    location: string; // <II.2.1./>
};

export default function ListItem({ title, description,
     location // add location in props
    }: ListItemProps) {
    return (
        <View style={styles.container}>
            ...
            <Text>{location}</Text> {/* Add location in View */}
        </View>
    );
}
```

### II. 2.2. Modify ListItem to display location

[`index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
import { ... ScrollView } from 'react-native'; // add ScrollView import

  // Add location field to events (remove location from description)
  const events = [
    { ... , description: "10:00", location: "A1" },
    { ... , description: "12:00", location: "B2" },
    { ... , description: "15:00", location: "C3" },
  ];
  ...
    // Add ScrollView to View and render ListItem for each event
      <View style={styles.container}>
      ...
      <ScrollView>
        {events.map(event => (
          <ListItem 
            key={event.id} 
            title={event.title} 
            description={event.description} 
            location={event.location} />
        ))}
      </ScrollView>
      <Footer />
    </View>
```

### II.2.3. Add props `isHighlighted: boolean` and if `true -> background change color`

[`ListItemStyles.tsx`](./my-app/styles/ListItemStyles.tsx)

```tsx
export const styles = StyleSheet.create({
    highlightedContainer: {
        backgroundColor: "#ffeb3b", // highlighted background color
    },
    ...
});
```

[`ListItem.tsx`](./my-app/components/ListItem.tsx)

```tsx
type ListItemProps = {
    isHighlighted: boolean;
    ...
};

export default function ListItem({ ... isHighlighted }: ListItemProps) { // add isHighlighted in props
    return (
      // Add conditional style for highlighted items:
        <View style={[styles.container, isHighlighted && styles.highlightedContainer]}>
            ...
        </View>
    );
```

[`index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
  // Add isHighlighted field to events
  const events = [
    { ... , isHighlighted: true },
    { ... , isHighlighted: false },
    { ... , isHighlighted: true },
  ];
...
      <ScrollView>
        {events.map(event => (
          <ListItem
          ...
            isHighlighted={event.isHighlighted} />
        ))}
      </ScrollView>
```

### II.2.4. Add more elements to the list (min. 5)

[`index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
  ...
  const events = [
    ...
    { id: 4, title: "Lecture: React", description: "10:00", location: "A1", isHighlighted: true },
    { id: 5, title: "Workshop: AI", description: "12:00", location: "B2", isHighlighted: false },
    { id: 6, title: "Meeting: Coding Club", description: "15:00", location: "C3", isHighlighted: true },
    { id: 7, title: "Seminar: Mobile Dev", description: "17:00", location: "D4", isHighlighted: false },
    { id: 8, title: "Hackathon Kickoff", description: "19:00", location: "E5", isHighlighted: true },
  ];
  ...
```
