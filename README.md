# Project Title 
 student-Sphere
# Project Description
- This is a mobile student companion application that aggregates student learning activities.Its aim is to make access to learning resources easier and to enhance student's time management by providing a student-based task manager and reduce time wastage by aggregating student resources.

# Project Setup/Installation instructions
- In order to use this application,you need to ensure that you have the Node LTS(Long Term Support) version and Expo installed on your computer.

## Node JS installation
Student-sphere requires the latest LTS version of Node.js.
### Steps
- Go to the official [Node JS Installation page](https://nodejs.org/en/download/package-manager).
- Click on the Prebuilt Installer option
- Choose the latest LTS version
- Click on download Node.js.


## Visual Studio Code installation
### Steps
- Go to the official [Visual Studio Code Installation page](https://code.visualstudio.com/download)
- Click on your operating system and click on the download button.


 ## Expo installation
 ### On computer


 ### On phone
 #### Steps on Android
- On your Android device, go to Play Store.
- Search for the Expo Go app.
- Download it.
- After the download is complete,open the application.
- Inorder to be able to run your application,you will be asked to create an Expo account.




 #### Steps on IOS 
 - Open the App store.
 - Click on the seacrh bar and search for Expo.
 - Download the application.
 - Open the application
 - Create your account.


 ## Repositiory setup
 - Create an empty folder anywhere on your computer and Name it "Application".
 - Open Visual Studio Code.
 - Open the "Application folder" in using Visual Studio Code.
 - Open the Integrated Terminal (Press Ctrl+` keys or In the top menu bar,click on View then click on Terminal).
 - Type  "git clone https://github.com/SMK-008/Student-Sphere.git" in the terminal and press enter.
 
 ```
git clone https://github.com/SMK-008/Student-Sphere.git
 ```
## Package/Depency installation
```
cd main-project/
npm i or npm install
```

 # Usage instructions
 ## How to run
 - Ensure you navigate into the main-project directory.
 ```
 cd main-project
npx expo start
 ```
 - You will see a QR code in the output of the previous command.
 - Open the camera app of your mobile device and point it towards the QR code(make sure your camera is able to view the entire barcode).
 
 To close the server,Type CTRL + C.

## Examples

## Input/Output
### Input
- The application takes in multiple types of inputs depending on the different modules:
##### Authentication Module
Takes in user's name,password,user's role and phone number.
##### Task management module
Takes in deadline,task weight,title and description.
##### Announcement's module
Takes in images,description and URL.
##### Unit's module
Takes in File,description text,Title text.

### Output
- The authentication module's output is access to the user's account and application features
- The unit's module's output involves downloading files posted.
- The task management module is the user being able to manage their time 
# Project Structure

```
Student-Sphere/
├── main-project
│   ├── App.js                                  # Serves as entry point of application
│   ├── app.json                                # Config file that holds metadata about the application
│   ├── assets                                  # This folder holds all the images that are used in this project
│   ├── babel.config.js                         # Responsible for configuring Babel    
│   ├── firebase.js                             # Holds configuration information for the Project's Firebase database
│   ├── package.json                            # List the dependencies and scripts needed for the project
│   ├── package-lock.json                       # Captures exact versions of packages and dependencies
│   └── screens                                 # Contains screens that the user uses to interact witht the application
├── package.json                                #Lists the expo dependencies needed for the project
├── package-lock.json                           # Captures exact versions of Expo dependencies
└── README.md                                   # Holds the project's documentation 
```
