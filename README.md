# My Playlist by Trevor Lomba

A single-page application with user authentication that interacts with a custom API served by Express. Registered users can create, read, update, and delete songs as part of a database of playlists, which is mapped to rows of a table and displayed on the DOM.

Quick Links - 

[deployed app](https://trevorlomba.github.io/my-playlist-client/)

[frontend repo](https://github.com/trevorlomba/my-playlist-client)

[backend repo](https://github.com/trevorlomba/my-playlist)

With this tool you are able to create a 'playlist' with multiple songs with information for each including title, artist, album, and isrc #. Users are only able to access the songs that they input into the system themselves using a personal login.

Future plans include building this out into a sample/music recommendation engine using Spotify's API. 

See below wireframes and user stories for current deployment:

    [wireFrame1](lib/imagesForReference/wireFrame1.png)
    [wireFrame2](lib/imagesForReference/wireFrame2.png)

User Stories:
    As a user I can sign in/up, change password, and sign out
    As a user I can add songs to a 'playlist' of favorite songs using identifying information eg song title, artist name, album, ISRC Code
    As a user I can remove songs from said playlist
    As a user I can favorite songs without adding them to a playlist
