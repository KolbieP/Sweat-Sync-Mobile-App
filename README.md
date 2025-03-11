<p align="center">
    <img src="comp265-a2/assets/blue-full-logo.png" alt="Sweat Sync Image" width="300">
</p>
<h1>Sweat Sync</h1>
<p><strong>Sweat Sync</strong> is a multi-screen mobile application built with React Native, Expo, and Expo Router. This app allows users to log and track their workouts, providing an intuitive and interactive experience.</p>

<h2>Table of Contents</h2>
<ul>
  <li>Features</li>
  <li>Installation</li>
  <li>Screens</li>
  <li>Navigation</li>
  <li>Third-Party Modules</li>
  <li>Code Quality</li>
  <li>Contributing</li>
</ul>

<h2>Features</h2>
    <ul>
        <li>Log completed workouts with a simple tap.</li>
        <li>Track workout history and progress.</li>
        <li>Navigate between multiple screens using Stack Navigation, Tab Navigation, and Modals.</li>
        <li>Interactive elements that allow page content to be updated.</li>
        <li>Scrollable views for easy navigation.</li>
        <li>Visually appealing layout following mobile design patterns.</li>
    </ul>

<h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/sweat-sync.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd comp265-a2</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the Expo development server:
            <pre><code>npm run android</code></pre>
        </li>
    </ol>

<h2>Screens</h2>
  <ul>
    <li><strong>Home Screen</strong>: Provides an overview of the app with dynamic fitness tips.</li>
    <li><strong>Log Workouts</strong>: Add completed workouts and activities to track your fitness journey, including details such as type, duration, and intensity.</li>
    <li><strong>Gym Workouts</strong>: Book your next workout within the app. Choose your location and view upcoming workouts available for booking.</li>
    <li><strong>Dashboard</strong>: View your fitness dashboard to monitor your current fitness status across various metrics.</li>
    <li><strong>Profile</strong>: Log in to your app profile. Here, you can update preferences and view a summary of activities tied to your account.</li>
    <li><strong>Settings</strong>: Customize the app experience to suit your needs.</li>
  </ul>

<h2>Navigation</h2>
<p>Sweat Sync uses Expo Router for navigation, incorporating the following features:</p>
    <ul>
        <li><strong>Tabs</strong>: Three tabs for easy access to different sections.</li>
        <li><strong>Stack</strong>: Eleven unique screens for comprehensive navigation.</li>
        <li><strong>Modals</strong>: Model screen for additional interactions.</li>
        <li><strong>URL Parameters</strong>: Screen supporting parameters for dynamic content.</li>
    </ul>

<h2>Third-Party Modules</h2>
<p>Sweat Sync utilizes the following third-party modules:</p>
  <ul>
    <li><a href="https://docs.expo.dev/guides/routing-and-navigation/">Expo Router</a>: For managing navigation within the app.</li>
    <li><a href="https://github.com/react-native-picker/picker">React Native Picker</a>: For dropdown menu functionality.</li>
    <li><a href="https://docs.expo.dev/versions/latest/sdk/async-storage/">AsyncStorage</a>: For persistent storage of user data.</li>
    <li><a href="https://docs.expo.dev/guides/icons/">Expo Vector Icons</a>: For using vector icons in the app.</li>
</ul>

<h2>Code Quality</h2>
    <ul>
        <li>Written in valid JavaScript.</li>
        <li>Uses modern JavaScript practices:
            <ul>
                <li><code>let</code> and <code>const</code> keywords.</li>
                <li>Template literals for string interpolation.</li>
                <li>Function expressions and arrow functions.</li>
            </ul>
        </li>
    </ul>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork the repository and submit a pull request.</p>
    
