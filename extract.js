/*
 * This file should be run inside Javascript console after being logged into
 * Flowdock and being on page https://www.flowdock.com/organizations/:id/emoji
 *
 * It will output a JSON string that can then be copied and processed elsewhere.
 */

function getURL(emoji) {
    return emoji.style.backgroundImage.replace("url(\"", "").replace("\")", "")
}

var rows = document.getElementsByClassName('clear')

var emojis = Object.values(rows).map(function(row) {
  var tds = row.getElementsByTagName('td');
  var command = tds[0].textContent.replace("\n", '').replace("\n", '')
  var image = getURL(tds[1].getElementsByClassName('emoji')[0])

  return {command, image}
})

JSON.stringify(emojis)
