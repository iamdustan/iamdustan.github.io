---
layout: post
title: Books of 2014
tags:
- reading list
summary:
---

2014 was my year off from reading. Well, I read the Game of Thrones series. Now
I sit here waiting for George R.R. Martin to finish the Winds of Winter so I can
move on with my life for a month before waiting another 7 years for the 7th
installation in the series. But alas, here is the list:

## The List

<table class="numbered">
  <thead>
    <tr>
      <th scope="col"><span class="visuallyhidden">Number</span></th>
      <th scope="col">Book</th>
      <th scope="col">Author</th>
      <th scope="col" style="width:7em">Finished Date</th>
    </tr>
  </thead>
  <tbody>
    {% for book in site.data.2014_books %}
    <tr>
      <td>{{ forloop.index }}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.author }}</td>
      <td>{{ book.completed_date }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>


