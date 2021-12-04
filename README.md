Welcome to my My Playlist Application!

With this tool you are able to create a 'playlist' with multiple songs with information for each including title, artist, album, and isrc #. Users are only able to access the songs that they input into the system themselves using a personal login.

NOTE: Although functionality is limited to for now, we have plans to build this out into a music recommendation engine using Spotify's API and the python library Spotipy. 

See below the ERD for current deployment:

    **USER**        -- 1: Many -->       **SONG**
    Email                                Name
    Password                             Album
    ID                                   Artist
                                         ISRC
                                         ID

Link to deployed application:
    https://trevorlomba.github.io/my-playlist-client/