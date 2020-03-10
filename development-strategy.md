# Even of Odd: development strategy

Building this site one step at a time

## 0. Setup

* index.html and folder structure with empty files

## 1. Data & Log

* data/strings.js & log.js are completed

## 2. Init (not finished!)

* The code in `init.js` that renders the current list for users is complete.
* I write the renderList DOM Component function.
* index.html is complete, just waiting for the code behind it

## 3. User Story: 'reset' (completed)

* A user can reset stat & see a cleared User Interface
* I wrote the code in listeners/reset.js & handlers/reset.js
* The handler function resets the `strings` object to it's initial values (the values in the source code), and re-renders the same UI as `init.js`.  in `listeners/reset.js` the handler is connected to the UI with a `click` event.?

## 4. User Story: save 

> * a user can save odd, even and nany values using the UI. 
> * i wrote the code in listeners/save.js & handlers/save.js
> * the listener listens for the save user action to be clicked and calls the handler to save as even, odd or nany values.

## 5. User Story: evens

> * a user can see saved even numbers in the strings array using the UI.
> * i wrote the code in listeners/display-evens.js & handlers/display-evens.js
> * the listener/display-evens listens for the even button to be clicked then calls the display-evens.js handler to display the even numbers stored in the array to the UI. 

## 6. User Story: odds

> * a user can see saved odd numbers in the strings array using the UI.
> * i wrote the code in listeners/display-odds.js & handlers/display-odds.js
> * the listener/display-odds listens for the odds button to be clicked then calls the display-odds.js handler to display the odd numbers stored in the array to the UI. 

## 7. User Story: nany

> * a user can see saved NaNy values in the strings array using the UI.
> * i wrote the code in listeners/display-nany.js & handlers/display-nany.js
> * the listener/display-nany listens for the nany button to be clicked then calls the display-nany.js handler to display the nany values stored in the array to the UI. 
