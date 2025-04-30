# BestKabu Browser Extension
A Simple Browser extension that makes Digikabu.de better. This is a Fork of [@ouihq](https://github.com/ouihq/betterKabu)

# Usage

### Chromium: [here](https://chromewebstore.google.com/detail/bestkabu/okajcjigbfoadcmmhckdpbopohdkhcpg)
### Firefox*: Use the .xpi file in the latest -fire release
**Note:** If you find a relayable way to install the Extension on Firefox on andorid, please let me know. It already should work fine in debugger mode.

**Hint:** On some browsers the Extension shows the link to digikabu.de even if you're on the website. Please check your Privacy settings and Extension permissions.

## Lesson highlighting
**Note:** Please submit (create an github issue) your school lesson abbreviations to set presets for the color.

## Login by Extension

### With Encryption:
1. Open the extension on the digikabu.de website.
2. Enable Login by Extension
3. Enter your username, password, and an encryption key (Note: using a key longer than your credentials is unnecessary).
4. Check the "Enable Password Protection" option.
5. Click the "Save Login" button.
   
**Note:** If no username or password is entered, the existing credentials won't be overwritten.

**To log in:** 
- Open the extension, enter your encryption key, and click "Login."

### Without Encryption:
1. Open the extension on the digikabu.de website.
2. Enable Login by Extension
3. Enter your username and password.
4. Click the "Save Login" button.
   
**Note:** If no username or password is entered, the existing credentials won't be overwritten.

## Preview
![](./screenshots/schedule.png)

## Colorpicker
To change the color of the highlighting: Open the Extension on the digikabu.de website and enter a HEX code in the input field. If you don't know them from memory, click on the link and copy the HEX code from there. A HEX code is always a "#" and 6 digits, that can be "0,1,2,...9, A, B, C, D, E, F".

## Current features:
- Dark mode toggle
- Login by Extension to make login faster
- Custom highlighting of the Subject colors and highliting for the day and hour
- Time remaining until the next lesson

# Contribution Guide

## Intro

If you want to contribute, you are free to do so. If you have any questions, you are free to do so. If you have found issues oder want to suggest features, you can submit that in GitHub.

## General

For anything, create a pull request with the naming scheme (featue/…  |  fix/…   | refactor/…) and if avalible the reference to the issue, and we test it, or change some things and then merge it into main. For git commit messages please follow this guide: https://www.conventionalcommits.org/en/v1.0.0/. And the commit git e-mail should be the same as your GitHub e-mail. For further questions, please contact us.

### Note
The Makefile is for packaging and only works on Linux. Just ignore it if you're not experienced.

#### Firefox

    $ make pack-fire

#### Chromium

    $ make pack-chr


# Warranty
** We don't provide any sort of warranty on this programm **

**contact: lilithtechs@protonmail.com**


\* the update server is currently offline

## Contributors ✨

<p>Thanks to all the contributors who helped improve this project:</p>
<a href="https://github.com/Random-user420/bestKabu/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Random-user420/bestKabu" />
</a>

# Copyright
For Everything that is comitted under "Random-user420" or as "les"
(C) 2025 Lilith

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
