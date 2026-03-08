# Web Development Project 2 - *Spanish Flashcards*

Submitted by: **Abel Tapia**

This web app: **This project is a flashcard web app built with React that helps users practice Spanish vocabulary. Users can click a card to flip between the English word and the Spanish translation, and move through the flashcards using a Next Card button.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src="./src/assets/flashcard-demo.gif" width="600" alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  

[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

One challenge I encountered while building the app was implementing the flip functionality.  
Since the flashcard itself is not a button, I had to think about how to use the `onClick` event on a `div` element instead. Another challenge was understanding how to move between cards using state and loops. I needed to figure out how to update the current card index and loop back to the first card after reaching the last one.

## License

    Copyright [2026] [Abel Tapia]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
