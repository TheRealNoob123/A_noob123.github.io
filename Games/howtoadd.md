# Adding Games
first make a file (or change one)
for example, you could change diep.html to football.html (write click -> rename)
next on the Games/index.html find that card (diep.io card)
change it to say football.html as the link and Football Bros as the title
change these 3 lines in the new football.html page

1. <title>Diep.io</title> to <title>Football Bros</title>
2.  <h1>Diep.io</h1> to  <h1>Football Bros</h1>
3.  <main>
        <div class="game-box">
            <iframe src="https://diep.io/" frameborder="0" allowfullscreen></iframe>
        </div>
    </main>

    to 

     <main>
        <div class="game-box">
            <iframe src="LINK HERE>" frameborder="0" allowfullscreen></iframe>
        </div>
    </main>

    run in the terminal:  python3 -m http.server 
    then go to https://psychic-space-trout-q76q457w4pvg2x6vq-8000.app.github.dev/
   