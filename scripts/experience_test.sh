#!/usr/bin/env bash

echo "Installing Chrome web driver..."
source <(curl -sSL "${DEVX_SKIT_ASSETS_GIT_URL_RAW:-https://github.com/IBM/devex-skit-assets/raw/v1.2.3}/scripts/install_chrome.sh")

echo "Starting Chrome web driver..."
source <(curl -sSL "${DEVX_SKIT_ASSETS_GIT_URL_RAW:-https://github.com/IBM/devex-skit-assets/raw/v1.2.3}/scripts/start_chrome.sh")

echo "Upgrade pip"
pip3 install --upgrade pip
pip3 -V

echo "Installing Selenium Python package..."
apt-get update
pip3 install selenium

echo "Running UI test using Selenium..."
python3 experience_test.py
