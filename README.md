# Rock, Paper, Scissors Game in JavaScript

Descripton: I am currently studying Python by reading and coding along with [Al Sweigart's book *Automate the Boring Stuff*](https://automatetheboringstuff.com/).  At the end of Chapter 2, I learned how to code a Rock, Paper, Scissors game.  Here, I use what I learned in the lesson to code a similar game in JavaScript.

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [The Directions](#frontend-mentor---qr-code-component) 

## Overview

The biggest challenge of this project was translating a program written in Python to JavaScript. Through this project, I learned the importance of careful planning, and how to approach breaking the plan into clear and concise steps for readability and clean coding.  This serves as my first original JavaScript project!

### Screenshots

| <b>Click the image to view in full screen</b> | 
|:--:|
| [![Link to full-screen view](https://raw.githubusercontent.com/Faraja17/rps-game-js/main/Screen%20Shot%202022-07-10%20at%2012.50.31%20AM.png)](https://raw.githubusercontent.com/Faraja17/rps-game-js/main/Screen%20Shot%202022-07-10%20at%2012.50.31%20AM.png) |
| [Direct Link to Am I Responsive website](https://ui.dev/amiresponsive?url=https://codepen.io/faraja17/full/rNdeZQp)|

### Links

- Live Site URL: [GUI Version of Rock Paper Scissors Game on CodePen](https://codepen.io/faraja17/full/rNdeZQp)

- Live Site URL: [The Terminal Version of Rock Paper Scissors Game on CodePen](https://codepen.io/faraja17/pen/xxYWKoq?editors=1112)


## My process

I challenged myself to write the Python code on my own, by reviewing what I had learned in chapter 2, before viewing Sweigart's solution. I was almost able to get the game fully running independently! I just needed to learn how to randomize the computer's turn, so I peeked for that part. I suddenly became interested in exploring the rock paper scissors game more, by challenging myself to write it in [my son's new language AFlat](https://github.com/DeForestt/aflat). I put a pause on that idea while he updates some of the AFlat docs. Meanwhile, I decided to try coding the rock paper scissors game in JavaScript.  

My first step in the process was to use comments to write an outline of my plan.  Basically, I copied the comments from Sweigart's code.  Then, I wrote the relevant code underneath each comment (or sometimes I moved the comment next to the relevant code).  This approach helped me to keep my code organized.  I think it is a great idea, and will continue to map out my code beforehand in this way.  I had tried making flow charts before writing code, but that quickly became too laborious.

Since spending the last couple of weeks focused on Python, I have become quite rusty in JavaScript, so I had to do heavy research, throughout the entire process, on W3Schools, MDN, Stackoverflow, etc. I also went back to [Dr. Yu's Udemy course](https://www.udemy.com/course/the-complete-web-development-bootcamp/).  I haven't formally taken the JavaScript section yet, but fortunately, I had watched a few of the videos to get a sneak peek, and I remembered something about executing JavaScript in the Google Chrome inspector tool. This information was extremely helpful when I could not figure out how to run the program in VS code (through research, I learned that it has something to do with Node.js). There are two other problems that I am still working to solve: I am currently unable to get the prompt box to close after completing each prompt, and I have not yet found a translation for the Python function `sys.exit()`. Therefore, the program doesn't end when the user enters `q`.

Finally, I took a video screencast of myself executing the program. In the video, I demonstrate what happens when you enter each of the requested prompts and how the game calculates and stores each round. I also demonstrate what happens if the user enters random characters. I am so pleased with the results, and I look forward to developing this program in JavaScript further, eventually connecting it to HTML and CSS.

5/30/22 As I am solidifying my JS learning, I have been able to fix the serious issues with this program.  Now I'm able to run it in CodePen with no problem!  I also changed all the instances of `var` to `let`, bringing my code up to JS ES6 standards.


### Built with

- JavaScript ES6

### What I learned

What was most interesting when I compared the Python version that I had coded on my own to Sweigart's, was my overall approach.  First, I had coded what would fully happen, from the beginning to the end of the round, if the player selected paper, then I repeated for rock, then scissors, and finally quit.  This approach made my code a bit repetitive.  Sweigart's approach was to combine the player selection, and to code all of the possibilities of one round in parts.  So, in the first part of the round, the player selects r, p, s, or q.  It made sense to code what happens with q first, so that the program doesn't have to iterate further than that line.  The next part of the round involves displaying to the player what they selected, then what the computer selected.  In the final part of the round, the program compares the computer choice to the player choice, and then records and displays the cumulative wins, losses, and ties.  Sweigart's code was much cleaner and efficient than my code.  His code took 70 lines compared to mine, which took 74.  His was also much easier to read and follow. So, I learned an important lesson about thoughtful planning and breaking the code into comprehensible parts.

Overall, I learned through experience, that Python and JavaScript are translatable in some ways.  This project helped me to see, first-hand, how learning one language can help me to become familiar with others.

5/30/22 I also learned that when I first completed this project and wrote the above, I had very little skill in JS. I really was not ready to successfully write the program at that time, but I'm glad that I pushed myself anyway.  Now I can reflect upon how my skills are improving!  I am most happy that my logic skills are getting stronger.  Now I have successfully written to JS programs independently--this one and the my plant tracker!

### Continued development

I plan to create an AFlat version of this game.  My son DeForestt also suggested that I manipulate the DOM in order to make this program interactive.  I agree--that would be a worthy pursuit, so I look forward to revisiting this project soon.

### Useful resources

- [*Automate the Boring Stuff*](https://automatetheboringstuff.com/) by Al Sweigart
- W3Schools
- MDN
- Stackoverflow
- [The Complete 2022 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

## Author

Faraja Thompson

- [My Personal Website](https://faraja17.github.io/my-website/)
- [My Blog: Teacher to Techie](https://faraja17.github.io/)
- [Faraja Thompson, M.Ed. on LinkedIn](https://www.linkedin.com/in/faraja-thompson-m-ed-70885b8/)

## Acknowledgments

I'd like to acknowledge my son and mentor [DeForestt Thompson](https://github.com/DeForestt).  His steadfast support and encouragement keep me motivated!  Thanks for forcing me to use the command-line, Son <3 <3 <3.
