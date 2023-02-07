# azure-resume
My own Azure resume, following ACG project video. 

## First steps

- Frontend folder contains the website.
- main.js contains visitor counter code. 

## Issues I experieced

- I confused the CosmosDB account name with the container/database name. This was causing an object null reference. 
- The counter was working but it would not display on the html. After inspecting the code in the browser it listed an error in the main.js file. Further inspection of that code revealed the suggestion on line 9 to change functionApi to functionsApi. There apparently was a reference to that in the local.settings.json because when I ran the function build again in the Azure section it prompted me that it was different and asked if I wanted to compare and overwrite. I chose overwrite and then saved it. The counter started displaying after that. 