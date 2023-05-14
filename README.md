# Project Name
Cherry - Your real-time personal assistant

![image](https://github.com/idaraekong/Task_Manager_Cherry/assets/9981595/0d8c9a6d-8af8-4c08-810c-10a6ec20ab39)


## Introduction

This project was built on React a JavaScript framework that is a declarative, flexible, and open-source library for building user interfaces based on UI components. It's typically used to develop web applications that require constant data changes on their UIs. A typical approach would require us to reload the entire website when we click on any component, but React avoids reprocessing every line of code using components. I chose React because of its flexibility features aligned well with our project requirements and would improve the user experience. The database is Firestore which is a fully managed, scalable, and serverless document database. It effortlessly scales to meet any demand, with no maintenance while accelerating development of mobile, web, and IoT apps with direct connectivity to the database. It has a built-in live synchronization and offline mode that makes it easy to develop real-time applications. It has a customizable security and data validation rules that ensures the data is always protected. It has a seamless integration with Firebase and Google Cloud services like Cloud Functions and BigQuery or Google Authentication which is a security requirement for our project.

The task manager app is intended to solve the problem of managing the status of planned activities on daily, weekly or monthly routine. Many people struggle with remembering what they had planned to do on daily basis, especially when trying to manage their time efficiently while also trying to balance mental and physical wellbeing. This app aims to provide a real-time solution by  keeping track and ensuring all planned activities are easily accessible to the user when there is urgent need to confirm what to do at any time of the day by the user..

The task manager app will not solve the problem of suggesting activities for the users as they are supposed to make manual entries by themselves. Additionally, the app will not be able to provide reminders in this current version as at when each activity is due, as it will only display details earlier entered by the user about each tasks on the list for certain period. However, reminders will be added on future upgrades.


## Installation
### 1. Clone the repository
```bash 
git clone https://github.com/idaraekong/Task_Manager_Cherry.git
```

### 2. Navigate to the project directory
```bash 
cd Task_Manager_Cherry
``` 

### 3. Install dependencies
```bash 
npm install
```

### 4. Create a copy of the firebase.config.js file in the source directory and fill the configuration variables:
```bash
# ------------------------
# Firebase Configuration
# ------------------------



### 5. Start the development server
```bash
npm start
# or
yarn start
# or
pnpm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

*   Log in with an existing google account
*   Click on add todo button then create new records through the modal interfaace
*   Click the add button to save records
*   View your dashboard of entire records

## Contributing
Contributions are welcome! To contribute, follow these steps:

*   Fork the repository
*   Create a new branch 
```bash 
git checkout -b feature/<feature-name>
```
*   Commit your changes 
```bash 
git commit -m "Add some feature"
```
*   Push to the branch 
```bash 
git push origin feature/<feature-name>
```
*   Open a pull request

## Features
![image](https://github.com/idaraekong/Task_Manager_Cherry/assets/9981595/1d8103a0-608c-412e-b867-25e29a1aed13)

- Firebase real-time database
- Google authentication
- React responsive UI


## Related Projects
Cherry 

## Feedback

If you have any feedback, please reach out to me at idaraekong2@gmail.com

## Achievements

https://trello.com/b/DiwxDVY8/mvp 

## License

[MIT](https://choosealicense.com/licenses/mit/)
