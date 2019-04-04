InboxSDK.load('1', 'sdk_reading-time_cfb63eef93').then(function(sdk){

    const WORDS_PER_MINUTE = 180;

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		const statusBarView = composeView.addStatusBar({height: 23});
		statusBarView.el.classList.add('hb');
		statusBarView.el.style.cssText = "font-size: 0.7em; padding-bottom: 0; margin-top: -0.5em; height: 23px";

		const timer = setInterval(function () {
			const content = composeView.getTextContent();
			if (!content) return;

			const stats = readingTime(content, {wordsPerMinute: WORDS_PER_MINUTE});
			let text = stats.text;
			if (stats.time < 30000) {
				text = `< 1 min read`;
			}
			statusBarView.el.innerHTML = text;
		}, 1000);
	});

	// readingTime function taken from https://github.com/ngryman/reading-time/blob/master/lib/reading-time.js
    function readingTime(text, options) {
        var words = 0, start = 0, end = text.length - 1, wordBound, i

        options = options || {}

        // use default values if necessary
        options.wordsPerMinute = options.wordsPerMinute || 200

        // use provided function if available
        wordBound = options.wordBound || ansiWordBound

        // fetch bounds
        while (wordBound(text[start])) start++
        while (wordBound(text[end])) end--

        // calculate the number of words
        for (i = start; i <= end;) {
            for (; i <= end && !wordBound(text[i]); i++) ;
            words++
            for (; i <= end && wordBound(text[i]); i++) ;
        }

        // reading time stats
        var minutes = words / options.wordsPerMinute
        var time = minutes * 60 * 1000
        var displayed = Math.ceil(minutes.toFixed(2))

        return {
            text: displayed + ' min read',
            minutes: minutes,
            time: time,
            words: words
        }
    }

    function ansiWordBound(c) {
        return (
            (' ' === c) ||
            ('\n' === c) ||
            ('\r' === c) ||
            ('\t' === c)
        )
    }
});
