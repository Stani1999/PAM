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
mkdir -p styles             # For all styles in the project
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
a # to open Android emulator
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
mkdir -p components             # components              (I.9.3.)
touch components/Header.tsx     # ├── Header.tsx          (I.9.3.)
touch components/Footer.tsx     # ├── Footer.tsx          (I.10.3.)
touch components/ListItem.tsx   # └── ListItem.tsx        (II.1.2.)
mkdir -p screens                # screens                 (II.1.0.)
mkdir -p styles                 # styles                  (I.10.1.)
touch styles/indexStyles.tsx    # ├── indexStyles.tsx     (I.10.2.)
touch styles/FooterStyles.tsx   # ├── FooterStyles.tsx    (I.10.3.)
touch styles/HeaderStyles.tsx   # ├── HeaderStyles.tsx    (II.1.1.)
touch styles/ListItemStyles.tsx # └── ListItemStyles.tsx  (II.1.2.)
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

[`styles/ListItemStyles.tsx`](./my-app/styles/ListItemStyles.tsx)

```tsx
export const styles = StyleSheet.create({
    ...
    // Add style for location
    location: {
        fontSize: 12,
        color: "#888",
        marginTop: 4,
        fontStyle: "italic",
    },
});
```

[`components/ListItem.tsx`](./my-app/components/ListItem.tsx)

```tsx
type ListItemProps = {
    ...
    location: string; // Add location field in props
};

export default function ListItem({ title, description,
     location // add location in props
    }: ListItemProps) {
    return (
        <View style={styles.container}>
            ...
            <Text style={styles.location}>{location}</Text>  {/* Add location in View */}
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

## **Lab III: Navigation and Multi-screen Application (React Navigation + TypeScript)**

## III.1. Installation of React Navigation

### III.1.1. Install the core package

```bash
npm install @react-navigation/native
```

### III.1.2. Install Expo dependencies

```bash
npx expo install react-native-screens react-native-safe-area-context
```

### III.1.3. Install Stack Navigator

```bash
npm install @react-navigation/native-stack
```

## III.2. New Project Structure

### III.2.1. Create screens directory and files

```bash
mkdir -p screens                    # screens                     (II.1.0.)
touch screens/HomeScreen.tsx        # ├── HomeScreen.tsx          (III.2.2.)
touch screens/DetailScreen.tsx      # └── DetailScreen.tsx        (III.2.3.)
mkdir -p styles                     # styles                      (I.10.1.)
touch styles/HomeScreenStyles.tsx   # ├── HomeScreenStyles.tsx    (III.2.2.)
touch styles/DetailScreenStyles.tsx # └── DetailScreenStyles.tsx  (III.2.3.)
mkdir -p types                      # types                       (III.4.)
touch types/Navigation.ts           # └── Navigation.ts           (III.4.)
```

### III.2.2. Create the first screen — HomeScreen

[`styles/HomeScreenStyles.tsx`](./my-app/styles/HomeScreenStyles.tsx)

```tsx
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
```

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
import { View, Text, Button } from "react-native";
import { styles } from "../styles/HomeScreenStyles";

export default function HomeScreen({ navigation }
  : any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Events List</Text>

      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Details", {
            title: "React Lecture",
            description: "Room GM-46, 9:45",
          })
        }
      />
    </View>
  );
}
```

### III.2.3. Create DetailScreen

[`styles/DetailScreenStyles.tsx`](./my-app/styles/DetailScreenStyles.tsx)

```tsx
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
```

[`screens/DetailScreen.tsx`](./my-app/screens/DetailScreen.tsx)

```tsx
import { View, Text } from "react-native";
import { styles } from "../styles/DetailScreenStyles";

export default function DetailsScreen({ route }: any) {
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
```

## III.3. Configuring Stack Navigator

### III.3.1. Open App.tsx (or [`index.tsx`](./my-app/app/(tabs)/index.tsx)) and replace the content with the following code

[`app/(tabs)/index.tsx`](./my-app//app/(tabs)/index.tsx)

```tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}
```

### III.3.2. Test the application

```bash
npm start
a # to open Android emulator
```

* If application wasn't turned off, it should automatically reload
* After clicking "Go to details" button, it should navigate to the details screen with the title and description displayed.

### III.3.3. Problem with `any`

* For now, Routing is untyped
* It's a bad practice
* In TypeScript, it is necessary to explicitly define the parameters for each screen

## III.4. Typing routing

### III.4.1. Add types for navigation in `types/Navigation.ts` (insted of in `index.tsx`)

[`types/Navigation.ts`](./my-app/types/Navigation.ts)

```tsx
export type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
    description: string;
  };
};
```

### III.4.2. Use the defined types in `App.tsx` (or [`index.tsx`](./my-app/app/(tabs)/index.tsx))

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
import { RootStackParamList } from "../../types/Navigation";
...
const Stack = createNativeStackNavigator<RootStackParamList>(); // () -> <RootStackParamList>()
...
```

## III.5. Typing navigation and route

### III.5.1. Type `navigation` in `HomeScreen`

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
// Add imports for NativeStackNavigationProp and RootStackParamList
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/Navigation";
...

// Add type definition
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) { // any -> HomeScreenProps
  ...
}
```

### III.5.2. Type `route` in `DetailScreen`

[`screens/DetailScreen.tsx`](./my-app/screens/DetailScreen.tsx)

```tsx
// Add imports for RouteProp and RootStackParamList
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/Navigation";
...
// Add type definitions
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

// Add type for props
type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: DetailsScreenProps) { // any -> DetailsScreenProps
  ...
```

## III.6. Practical and homework tasks

### III.6.1. Add `eventId: number` to the route params

[`types/Navigation.ts`](./my-app/types/Navigation.ts)

```ts
export type RootStackParamList = {
  ...
  Details: {
    eventId: number; // Add eventId
    ...
  };
};
```

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
...
export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      ...
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Details", {
            ...
            eventId: 1, // <Add eventId to integrate code>
            ...
    </View>
```

### III.6.2. Display `eventId` in `DetailsScreen`

[`styles/DetailScreenStyles.tsx`](./my-app/styles/DetailScreenStyles.tsx)

```tsx
export const styles = StyleSheet.create({
  eventId: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  ...
});
```

[`screens/DetailScreen.tsx`](./my-app/screens/DetailScreen.tsx)

```tsx
...
export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { eventId, ... } = route.params; // extract eventId

  return (
    <View style={styles.container}>
      ...
      <Text style={styles.eventId}>Event ID: {eventId}</Text> {/* <Add> */}
      ...
    </View>
  );
}
```

### III. 6.3. Add a second button passing different data

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
    ...
    <View style={styles.container}>
      ...

      {/* Add second button */}
      <Button
        title="Go to React Lab"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 2,
            title: "React Lab",
            description: "Room 101, 11:30",
          })
        }
      />
    </View>
  );
}
```

### III.6.4. Change `Details` screen title dynamically

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
      ...
      <Stack.Navigator>
        ...
        {/* Replace simple Screen definition with dynamic title option */}
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
...
```

### III.6.5. Add list of 5 events (Buttons?)

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
    ...
    <View style={styles.container}>
      ...
      {/* Add 5 more buttons (list?) for the homework: */}
      <Button
        title="Go to Lecture: React"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 3,
            title: "Lecture: React",
            description: "10:00, A1",
          })
        }
      />

      <Button
        title="Go to Workshop: AI"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 4,
            title: "Workshop: AI",
            description: "12:00, B2",
          })
        }
      />

      <Button
        title="Go to Meeting: Coding Club"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 5,
            title: "Meeting: Coding Club",
            description: "15:00, C3",
          })
        }
      />

      <Button
        title="Go to Seminar: Mobile Dev"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 6,
            title: "Seminar: Mobile Dev",
            description: "17:00, D4",
          })
        }
      />

      <Button
        title="Go to Hackathon Kickoff"
        onPress={() =>
          navigation.navigate("Details", {
            eventId: 7,
            title: "Hackathon Kickoff",
            description: "19:00, E5",
          })
        }
      />
    </View>
    ...
```

## **Lab IV: FlatList and dynamic data rendering**

## IV.1. ListItem implementation

### IV.1.1. Preparing the ListItem component

[`styles/ListItemStyles.tsx`](./my-app/styles/ListItemStyles.tsx)

```tsx
...
export const styles = StyleSheet.create({
    ...
    },
    container: {
        marginHorizontal: 12, // Add horizontal margin
        marginVertical: 6,    // Add vertical margin
        ...
    },
    title: {
        fontSize: 18, // increase font size
        ...
    },
    // Add style for description
    description: {
        fontSize: 14,
        color: "#555",
    },
});
```

Add missing location in [`types/Navigation.ts`](./my-app/types/Navigation.ts)

```tsx
export type RootStackParamList = {
  ...
  Details: {
    ...
    location: string; // Add location
  };
};
```

[`components/ListItem.tsx`](./my-app/components/ListItem.tsx)

```tsx
import { Pressable, ... } from "react-native";                    // View -> Pressable
...
type ListItemProps = {
    ...
    onPress: () => void;
};

export default function ListItem({ 
    ...
    , onPress 
}: ListItemProps) {
    return (
        <Pressable onPress={onPress} style={[ ...                 // View -> Pressable onPress={onPress}
         ...]}>
            ...
            <Text style={styles.description}>{description}</Text> {/*Add style={styles.description}>*/} 
        </Pressable>                                              // View -> Pressable
    );
}
```

### IV.1.2. Creating an events list in HomeScreen

[`styles/HomeScreenStyles.tsx`](./my-app/styles/HomeScreenStyles.tsx)

```tsx
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // Add padding and background color to the container
    backgroundColor: "#f2f2f2",
    paddingTop: 20,
    ...
  },
  header: { // title -> header
    //
    fontWeight: "bold",
    marginHorizontal: 12,
    ...
  },
});

```

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
import ListItem from "../components/ListItem"; // Add import for ListItem
import { FlatList, ... } from "react-native";  // Add import for FlatList
...

// Add type for event item
type EventItem = {
  eventId: number;
  title: string;
  description: string;
  location: string;
  isHighlighted: boolean;
};

// Create events array
export default function HomeScreen({ navigation }: HomeScreenProps) {
  const events: EventItem[] = [
    { eventId: 1, title: "Lecture: React", description: "10:00", location: "A1", isHighlighted: true },
    { eventId: 2, title: "Workshop: AI", description: "12:00", location: "B2", isHighlighted: false },
    { eventId: 3, title: "Meeting: Coding Club", description: "15:00", location: "C3", isHighlighted: true },
    { eventId: 4, title: "Seminar: Mobile Dev", description: "17:00", location: "D4", isHighlighted: false },
    { eventId: 5, title: "Hackathon Kickoff", description: "19:00", location: "E5", isHighlighted: true },
  ];

  // Replace Buttons (list?) with FlatList
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wydarzenia</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.eventId.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              description={item.description}
              location={item.location}
              isHighlighted={item.isHighlighted}
              onPress={() =>
                navigation.navigate("Details", {
                  eventId: item.eventId,
                  title: item.title,
                  description: item.description,
                  location: item.location,
                })
              }
            />
          )}
        />
    </View> 
  );
}
```

### IV.1.3. Updating DetailsScreen

[`styles/DetailScreenStyles.tsx`](./my-app/styles/DetailScreenStyles.tsx)

```tsx
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ...
  // Add padding to the container
  container: {
    padding: 20,
    ...
  },
  // Add margin and textAlign to the title
  title: {
    marginBottom: 10,
    textAlign: "center",
    ...
  },
  // Add style for description
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  // Add style for location
  location: {
    fontSize: 16,
    marginTop: 8,
    color: "#888",
  },
});
```

[`screens/DetailScreen.tsx`](./my-app/screens/DetailScreen.tsx)

```tsx
...
export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { eventId, title, description, location } = route.params;       // Add location to destructuring

  return (
    <View style={styles.container}>
    ...
      <Text style={styles.description}>{description}</Text>             {/* Add style={styles.description */}
      <Text style={styles.location}>{location}</Text>                   {/* Add location text with style */}
    </View>
  );
}
```

### IV.1.4. Update navigation options in `index.tsx`

[`app/(tabs)/index.tsx`](./my-app/app/(tabs)/index.tsx)

```tsx
      <Stack.Navigator>
        {/* Add options={{ title: "Start" }} */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Start" }} />
      </Stack.Navigator>
...
```

### IV.2. Practice tasks

### IV.2.1. Add field location to all of the events

Not needed, already added in the code above by integrating with previous labs.

### IV.2.2. Extend the `ListItem` to display the location

Already done in [II.2.1.](#ii21-add-field-location-to-the-events)

### IV.2.3. Pass location to DetailsScreen

Not needed, already done in the previous steps by integrating with earlier labs.

### IV.2.4. Add minimum 8 events

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
  const events: EventItem[] = [
    ...
    { eventId: 6, title: "Lab: Database Design", description: "09:00", location: "F6", isHighlighted: false },
    { eventId: 7, title: "Lecture: TypeScript", description: "11:00", location: "G7", isHighlighted: true },
    { eventId: 8, title: "Workshop: UI/UX", description: "13:00", location: "H8", isHighlighted: false },
    { eventId: 9, title: "Networking Session", description: "15:30", location: "I9", isHighlighted: true },
    { eventId: 10, title: "Seminar: Cloud Services", description: "17:30", location: "J0", isHighlighted: false },
    { eventId: 11, title: "Code Review Panel", description: "19:00", location: "K1", isHighlighted: true },
    { eventId: 12, title: "Workshop: Testing", description: "09:30", location: "L2", isHighlighted: false },
    { eventId: 13, title: "Closing Ceremony", description: "20:00", location: "Main Hall", isHighlighted: true },
    { eventId: 14, title: "After Party", description: "22:00", location: "Village", isHighlighted: true },
  ];
```

### IV.2.5. Change ListItem style to look more like a card

[`styles/ListItemStyles.tsx`](./my-app/styles/ListItemStyles.tsx)

```tsx
    ...
    container: {
        ...
        borderRadius: 16,  //  8 -> 16
        elevation: 5,      //  3 -> 5
        // Add shadow styles
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
    },
      ...
```

## IV.3. Expanding DetailsScreen with time

### IV.3.1. Update types types to include the time parameter

[`types/Navigation.ts`](./my-app/types/Navigation.ts)

```tsx
export type RootStackParamList = {
  ...
  Details: {
    ...
    time: string;
  };
};
```

### IV.3.2. Update the EventItem type, mock data, and navigation call

[`screens/HomeScreen.tsx`](./my-app/screens/HomeScreen.tsx)

```tsx
...
// Add time field to the EventItem type
type EventItem = {
  ...
  time: string;
};
...
  // Add time field to all events 
  const events: EventItem[] = [
    { ... , time: "10:00" },
    { ... , time: "12:00" },
    ...
  ];
...           // Add time to navigation parameters
              navigation.navigate("Details", {
                ...
                time: item.time,
              })
...
```

### IV.3.3. Add text styling for the time

[`styles/DetailScreenStyles.tsx`](./my-app/styles/DetailScreenStyles.tsx)

```tsx
...
export const styles = StyleSheet.create({
  ...
  time: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
```

### IV.3.4. Extract the time from parameters and render it on the screen

[`screens/DetailScreen.tsx`](./my-app/screens/DetailScreen.tsx)

```tsx
...
export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { ..., time } = route.params;

  return (
    <View style={styles.container}>
      ...
      <Text style={styles.time}>Time: {time}</Text>
      ...
    </View>
  );
}
```
