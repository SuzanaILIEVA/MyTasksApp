# MyTasks - Task Management App

MyTasks is a simple and effective React Native app that helps users manage tasks effortlessly. The app allows users to add, delete, view details, and update the status of each task, making it easy to stay organized and on top of to-do lists. Built with a focus on functionality and a user-friendly interface, MyTasks is suitable for daily task management needs, helping users prioritize and track progress efficiently.

# Features

- Add Tasks: Users can easily create new tasks with titles, descriptions, and statuses.
- Delete Tasks: One-tap task deletion allows users to remove tasks they no longer need.
- Task Status Update: Users can change task statuses (e.g., ongoing, completed, pending,cancel) to keep track of their progress.
- View Task Details: View detailed information for each task, including its title, description, creation date, and current status.
- User-Friendly Interface: Built with UI Kitten for an aesthetically pleasing and functional design.
- Data Persistence: Tasks are stored using AsyncStorage, ensuring tasks remain saved even if the app is closed or restarted.

# Libraries Used

- @eva-design/eva: Provides theming and design system support, used together with UI Kitten for a consistent look and feel across the app.
- @react-native-async-storage/async-storage: Enables persistent data storage, allowing tasks to be saved locally on the user's device.
- @react-navigation/native: Core library for handling navigation within the app, allowing users to navigate between screens.
- @react-navigation/native-stack: Implements stack-based navigation, which provides a stack-like transition between screens.
- @ui-kitten/components: UI components library based on Eva Design System, used for building the user interface with a clean and modern design.
- formik: A form management library that simplifies handling form state and validation, improving the user experience for creating and updating tasks.
- iconsax-react-native: Icon library for React Native, used to add icons that enhance visual cues and user interactions.
- moment: Library for managing and formatting dates, used here for displaying task creation dates and due dates in a user-friendly way.
- react: JavaScript library for building user interfaces, the core framework for creating React Native applications.
- react-native: Core framework for building cross-platform mobile applications.
- react-native-safe-area-context: Provides safe area support to ensure the UI aligns with device boundaries, especially on notched devices.
- react-native-screens: Optimizes navigation and screen transitions by providing native navigation performance enhancements.
- react-native-svg: Provides SVG support, allowing the use of vector images and icons within the app.
- react-native-uuid: Library for generating unique identifiers (UUIDs) for each task, ensuring each task has a unique ID.
- yup: Schema builder for form validation, used together with Formik to validate form inputs and ensure data integrity.

# Gif

![](./src/assets/MyTasks.gif)
