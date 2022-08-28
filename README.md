# Email App

This is a back-end application which sends speaks to a React front-end to send emails.

## 📋 Aims of App

- Allow the user to be able to send emails

## 👩‍💻 Technical Details

- NodeJS
- Nodemailer
- CORs
- Express

## 🔧 How to Run the App

- `npm install`
- `npm start`

## Setting up .env credentials

- In order to use this app alongside the `reminders app` you will need to set up an `.env` file
- Create a `.env` file in the root of the emails-app directory
- In the .env file add the follow:

```
EMAIL= <your-gmail-email>
WORD= <you-gmail-password>
OAUTH_CLIENTID= <token-generated-below>
OAUTH_CLIENT_SECRET= <token-generated-below>
OAUTH_REFRESH_TOKEN= <token-generated-below>
```

- To generate the client ID and client secret token:

  - Head over to Google Cloud Platform
  - Select new project
  - Give the project a name and then, go to APIs and Services (on the left hand side)
  - Select OAuth consent screen
  - Select external and then use your gmail acc as user support email (ignore app domain)
  - Click next on scope page
  - Add yourself (gmail acc) as test user
  - Click on credentials on the left hand menu. Click the plus sign and then click OAuth client ID
  - Select web application as the application type
  - In URI add the url: https://developers.google.com/oauthplayground
  - Once you click create you should see a client ID and client secret

- To generate the refresh token:
  - Header over to https://developers.google.com/oauthplayground/
  - Click on the gear icon on the right and check the user your own OAuth credentials box
  - Put in the client ID and secret generated above
  - On the left menu, select Gmail API v1
  - Click continue on 'vertified this app'
  - Click exchange authorization code for tokens
  - You should see a refresh and access token

## 💭 Future Improvements

- Send emails at a specific date and time (prompted by user on front-end)
