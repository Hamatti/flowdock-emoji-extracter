# Flowdock Emoji Extracter

If you are using [Flowdock](https://flowdock.com) as your communication channel with your organization, odds are you have accumulated a long list of custom emojis. We had over 1100 when I wrote this script.

Flowdock does not provide an "export all" functionality so I built my own.

## How to use

1. Create a folder `images/`

2. Since Flowdock's emoji control is behind login, you need to copy-paste the code in `extract.js` into your browser dev tools when you are in `https://www.flowdock.com/organizations/:id/emoji` page.

3. Then copy the output JSON and save it into this folder with the name `emojis.json`.

4. Run `python download.py` and the script will download all your emojis to `images/` folder.
