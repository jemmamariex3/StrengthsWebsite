This file will contain information about the files that can be found on this computer as well the structure of the files in 
the strengths website project.


In the desktop there are only a few files & Apps 

VSCode: Best text editor out (besides webstorm)
Spotify: Use this to have a fun time
Slack: To keep in touch with everyone
htdocs: This pc is already equipped with php so simply drag php related projects into this folder, start up xampp and start coding!

The projects folder contain the various protoypes of different projects.
**The key files to refer to will be**
    -ChatBot 
    -Strengths_orig
    -StrengthsDemo
    -VidTeamForm
    -Strengths

I. You can use the ChatBot file as reference for setting up new chat bots in the future.
    Some very useful links in finding out more info on how to use the chatbox are 
        https://playground.pandorabots.com/en/quickstart/
        https://playground.pandorabots.com/en/tutorial/
        I used this repo https://github.com/pandorabots/talk.js as reference for setting up Cinty on the Strengths website.

        Here are the credentials for logging into https://developer.pandorabots.com/
        username: anapen1
        password: Vidteam2017
    
    Moreover you will also need to create a free account at https://playground.pandorabots.com/en/ in order to upload the bots logic files.

II. Strengths_orig 
        This file simply contains the original files that were on filezilla before Ana went on vacation.

III. StrengthsDemo 
        This file contains the files for the first Demo of the website

IV. VidTeamForm    
        This file contains the code http://www.vidteamcc.com/vidTeamForm/
        It uses PHP mailer (https://github.com/PHPMailer/PHPMailer) in order to send emails to the desired recipient 


V. Strenghts 
    The Strengths folder contains the code in production for the strengths website.
        -- Key features that will need to be fixed/ added include ~~
                -Making the website responsive 
                -Implementing more logic to the chat bot

_______________________________________________________________________________________________________________________________________________________________________________

This section will go over the file structure for the Strengths Website.

- card-images: contains the images for all the strengths card trackers.
- cardDesc: contains pdf files with more in depth descriptions of each individual strength.
- cinthy: contains the bot logic for the chat bot
- css: As you will notice a majority of the css files have been minified and generated with Adobe Muse. The Adobe Muse css files that I have directly made 
        changes to will have comments at the top to indicate what values have been modified.
        - in particular-- index.css has been modified
    
    These are the css files that I have added in addition to the generated ones:

        carousel.css: contains the styling for the carousel that holds the various tracker images. The file also has the 
                     styling for the machine that is located in the home page.

        chat.css: contains the styling for the chatbot.

        navbar.css: contains the styling for the dropdown elements that were in the front page (this file can most likely be removed)

        strengthsContent.css: containg the styling for the cards in 34-strengths.html


- icons: This folder contains the individual SVGs of the trackers figures.
- images: contains some images that were used with Adobe muse and also the images that the machine uses
- img: contains images for Cinthy as well as more images for the machine.

- js: The key files to look into will be 
    - mainBot.js
        - contains the logic to output bot responses as well as the logic that handles animations.
        - I suggest checking this https://github.com/pandorabots/talk.js for reference

    - strengths.js
        - This file contains the logic for the table of strengths that can be found in 
          34-strengths.html.

          