---
title: 1 Writing articles in markdown
description: 'This is a starter guide for writing blog posts using markdown in this project.'
image: 'https://res.cloudinary.com/cheapflix/image/upload/v1598585539/projects-images/covid-19-rt_2.png'
tags:
  - Tag A
  - Tag B
  - Tag C
  - Tag D
  - Tag E
  - Tag F
isExternal: false
published: false
createdAt: September 3,2020
featured: true
---

This is a starter guide for writing blog posts using markdown in this project.

## Heading H2

### Heading H3

#### Heading H4

## Links

[Markdown Link to Blog](/articles) - A link created using the markdown syntax for links.

<a href="/articles">HTML Link</a> - A link created using the HTML syntax for links.

## Images

You can create images using 2 methods. Either making use of markdown (mostly for regular images) and making use of the `<figure>` tag if you want to include captions.

### Markdown Image

![Covid 19 in Nigeria](https://res.cloudinary.com/cheapflix/image/upload/v1598577796/projects-images/Nigeria-against-covid-19_4.png)

### HTML Image Using <figure>

<figure>
  <img src="https://res.cloudinary.com/cheapflix/image/upload/v1598585539/projects-images/covid-19-rt_2.png" alt="Apogee: Data pipeline">
  <figcaption>Allows you to include captions</figcaption>
</figure>

## Italics and Bold

This is simply to italize this text _Writing italics is pretty straightforward_

Simply make this text bold **So is writing a bold text**

## Lists

### Ordered Lists

Ordering items is simple

1. Number 1
2. Number 2
3. Number 3
4. Number 4
5. Number 5
6. Number 6

### Unordered Lists

Now for unordered lists

- Number 1
- Number 2
- Number 3
- Number 4
- Number 5
- Number 6

## Tables

| Wrestler                | Origin       | Finisher           |
| ----------------------- | ------------ | ------------------ |
| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |
| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |
| Randy Savage            | Sarasota, FL | Elbow Drop         |
| Vader                   | Boulder, CO  | Vader Bomb         |
| Razor Ramon             | Chuluota, FL | Razor's Edge       |

## BlockQuote

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto et provident ipsa, eum explicabo delectus veniam ipsum fugit, neque necessitatibus illo pariatur! Perspiciatis, cupiditate maiores ut dolores ipsum quod?

## Footnotes

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

## Code

<button class="code-toggle">view code</button>
<!-- <icon-twitter class="w-5 h-5"></icon-twitter> -->

```js{1,5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body)
    })
  })
  .listen(3000)
```

```python
def test_without_bracket:
    print('This gives space to try things')

for i in range(20):
  test_without_bracket()

print('This works')
```

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.
