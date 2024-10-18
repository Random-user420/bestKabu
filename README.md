# BestKabu Browser Extension
A Simple Browser extension that makes Digikabu.de better. This is a Fork of [@ouihq](https://github.com/ouihq/betterKabu)

# (Version < 2.0.0) is unstable, use on your own risk

Here’s a clearer and more readable version of the text:

## Autologin Setup

### With Encryption:
1. Open the extension on the digikabu.de website.
2. Enter your username, password, and an encryption key (Note: using a key longer than your credentials is unnecessary).
3. Check the "Enable Password Protection" and "Enable Login" option.
4. Click the "Save Login" button.
5. Refresh the page to activate the changes.
   
**Note:** If no username or password is entered, the existing credentials won't be overwritten.

**To log in:** 
- Open the extension, enter your encryption key, and click "Login."

### Without Encryption:
1. Open the extension on the digikabu.de website.
2. Enter your username and password.
3. Check the "Enable Login" option.
4. Click the "Save Login" button.
5. Refresh the page to activate the changes.
   
**Note:** If no username or password is entered, the existing credentials won't be overwritten.

## Colorpicker
To change the color of the highlighting: Open the Extension on the digikabu.de website and enter a HEX code in the input field. If you don't know them from memory, click on the link and copy the HEX code from there. A HEX code is always a "#" and 6 digits, that can be "0,1,2,...9, A, B, C, D, E, F".

## Current features:
- Dark mode toggle
- Autologin
- Custom highlighting
- Time remaining until the next lesson

# Contribution Guide

## Intro

If you want to contribute, you are free to do so. If you have any questions, you are free to do so. If you have found issues oder want to suggest features, you can submit that in GitHub.

## General

For anything, create a pull request with the naming scheme (featue/…  |  fix/…   | refactor/…) and if avalible the reference to the issue, and we test it, or change some things and then merge it into main. For git commit messages please follow this guide: https://www.conventionalcommits.org/en/v1.0.0/. And the commit git e-mail should be the same as your GitHub e-mail. For further questions, please contact us.

### Note
The Makefile is for packaging and only works on Linux. Just ignore it if you're not experienced. For packaging for Firefox: `pack-fire`. Chromium: `pack-chr`. That removes the -SNAPSHOT from version and for Chromium removes it the gecko options from the manifest.

**contact: bestkabu@vleov.de**

## Contributors ✨

<p>Thanks to all the contributors who helped improve this project:</p>
<a href="https://github.com/Random-user420/bestKabu/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Random-user420/bestKabu" />
</a>
