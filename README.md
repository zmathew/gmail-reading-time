# Email Reading Time Gmail Chrome Extension
Chrome extension for Gmail to display the reading time of your email while composing it.

![Screenshot of email reading time displayed in Gmail](https://github.com/zmathew/gmail-reading-time/blob/demo/demo/gmail-example.png?raw=true "Email Reading Time Gmail Chrome Extension")


## Installation

* Clone or [download this repo as a zip](https://github.com/zmathew/gmail-reading-time/archive/master.zip).
* Extract the zip. You should see a folder called `gmail-reading-time-master`.
* Open chrome://extensions in your browser.
* Enable **Developer mode** (top right).
* Click **Load Unpacked**.
* Browser to the folder `gmail-reading-time-master` and click **Select**.
* Go to (or reload) Gmail and start composing an email. After typing a few words you should see "< 1 min read" below the Send button.

## Development / Modification

Currently the calculation is based on reading at 180 words per minute. You can change this in `content.js`;

* Clone repo.
* Open [`content.js`](content.js).
* Change `WORDS_PER_MINUTE = 180` to whatever you want.
* Open chrome://extensions in your browser.
* Click the reload extension icon below the extension.
* Reload Gmail for changes to take effect.
