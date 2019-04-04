# Email Reading Time Gmail Chrome Extension
Chrome extension for Gmail to display the reading time of your email while composing it.

![Screenshot of email reading time displayed in Gmail](https://github.com/zmathew/gmail-reading-time/blob/demo/demo/gmail-example.png?raw=true "Email Reading Time Gmail Chrome Extension")


## Installation

* [Download this repo as a zip](https://github.com/zmathew/gmail-reading-time/archive/master.zip).
* Open [Chrome Extensions Tab](chrome://extensions).
* Enable **Developer mode** (top right).
* Drag the downloaded zip into the browser window.
* Reload Gmail and start composing an email. After typing a few words you should see "< 1 min read" below the Send button.

## Development / Modification

Currently the calculation is based on reading at 180 words per minute. You can change this in `content.js`;

* Clone repo.
* Open [`content.js`](content.js).
* Change `WORDS_PER_MINUTE = 180` to whatever you want.
* Zip the folder (or use "Load unpacked extension") and re-install the extension.

