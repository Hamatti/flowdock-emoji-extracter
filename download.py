import json
import urllib.request

files = json.loads(open('emojis.json').read())

emoji_count = len(files)

for (i, file) in enumerate(files):
    filename = 'images/' + file['command'].replace(':', '') + '.png'
    print(f'{i}/{emoji_count}: {filename}')
    url = file['image']
    urllib.request.urlretrieve(url, filename)
