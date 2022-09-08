# WORDY - English Flashcards 

Wordy is a Single Page Application built with React that serves to learn English words with the help of flashcards.

[Homepage] contains a list of all words with their translations and transcriptions.
Data are fetched from an external server with the help of an API. Note, that all the words are grouped by collection. If you want, you can select only one single collection to be shown. You can both edit, delete and add words to the list (realised with React Context, but if you prefer MobX - just switch to mobx branch).

[Gamepage] represents a training mode: flashcards are shown one by one. You can have a look at translation by clicking "check" button. A counter shows the number of words learned during one session.
<br><br>
<img width="45%" alt="HomePage" src="../main/screenshots/Capture web_5-9-2022_1591_alenagm.github.io.jpeg">
<img width="44.5%" alt="ErrorPage" src="../main/screenshots/Capture web_6-9-2022_114127_localhost.jpeg">
<img width="45%" alt="GamePage" src="../main/screenshots/Capture web_5-9-2022_151255_alenagm.github.io.jpeg">
<br><br>
## Demo

[Wordy]

## Features

- Possibility to edit, add and delete words in a list;
- All words or a single collection of words can be shown at a time;
- A counter for words learned during one training session.

## Tech stack

&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; React<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Functional Components<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Custom Hooks<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; SASS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Fetch API, Get and Post requests<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; React Router<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; React Context<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Mobx (in separate branch)<br>

## Installation

The following commands install and run the development version:

```bash
# Clone this repository
$ git clone https://github.com/AlenaGM/flashcards-app.git)

# Go into the repository
$ cd flashcards-app

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Contributing

Contributions are always welcome! If you want to contribute:

```bash
# Clone repo and create a new branch:
$ git checkout https://github.com/AlenaGM/flashcards-app -b name_for_new_branch

#  Make changes
#  Submit Pull Request with description of changes
```

## License

Wordy is released under the under terms of the [MIT License](LICENSE).
<br><br><br>

##

  
  \* _Weeks 26-34 Learning Project in [ITGirlSchool]_ 
  

   [ITGirlSchool]: <https://itgirlschool.com/en>
   [Wordy]: <https://alenagm.github.io/flashcards-app/?)>
   [Homepage]: <https://alenagm.github.io/flashcards-app/?)>
   [Gamepage]: <https://alenagm.github.io/flashcards-app/?)#/game>
