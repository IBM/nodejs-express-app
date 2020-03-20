#### Experience Testing

This application includes a UI test for the application experience written in Python, using Selenium, that you can extend as you further develop your application.

To run the experience test, first you need to [install Python](https://www.python.org/downloads/) on your system.

Then install selenium.
```bash
pip install selenium
```
[Set up the Chrome WebDriver](https://chromedriver.chromium.org/getting-started) on your system, you will also need to install the [Chrome Browser](https://www.google.com/chrome/) if you do not have it. If you prefer, you can update the experience test experience_test.py to use the [Firefox WebDriver](https://developer.mozilla.org/en-US/docs/Web/WebDriver). Make sure that you have added the driver to your system PATH.

With the application running locally (with `npm run start` or `ibmcloud dev run`), export the necessary environment variables, and run the Python web experience test in this directory.
```bash
export APP_URL=https://localhost:3000 # default value for the local application
python3 experience_test.py
```
