import os, time, sys, datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

# Do an action on the app's landing page
options = Options()
options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
driver = webdriver.Chrome(options=options)
driver.get(os.environ["APP_URL"]); # Open a browser to the app's landing page
time.sleep(3)

# Verify the expected content is present
# TODO change this when we change the landing page
title_text = driver.title
print("The title text is: {}".format(title_text))
if title_text == "IBM Cloud Web Starter":
    print("Experience Test Successful")
else:
    sys.exit("Experience Test Failed: unexpected title text {}".format(title_text))
