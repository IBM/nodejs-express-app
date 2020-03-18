#### Experience Testing

This application comes with a UI test for the application experience written in Python, using Selenium, that you can extend as you further develop your application.

To run the experience test, first you need to [install Python](https://www.python.org/downloads/) on your system.

Then install selenium.
```bash
pip install selenium
```
[Setup the Chrome WebDriver](https://chromedriver.chromium.org/getting-started) on your system. Make sure that you have added the driver to your system PATH.

With the application running locally (with `npm run start` or `ibmcloud dev run`), export the necessary environment variables, and run the Python web experience test in this directory.
```bash
export APP_URL=https://localhost:3000 # default value for the local application
python3 nodejs_express.py
```
