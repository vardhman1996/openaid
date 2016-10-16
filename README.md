# openaid

## Inspiration
Open source projects are incredibly difficult to contribute to, especially for budding noobs like ourselves. It's impossible to wrap our heads around humongous code bases and how to build them. Even understanding what issues need to be solved and what features need to implemented is a challenging task. We wanted to make it easier for developers, designers and managers to contribute to open source projects. They could learn how to solves code issues and respond to specs, in turn, learning how to contribute to bigger code bases, develop software and learn how big organizations work. This would not only hone their skills but also help the open source community grow faster. 

## What it does
Stakeholders of open source projects can register their repositories on our service. We scan their repositories for issues and related tags. We then provide a comfortable environment for developers to find specs in their areas of interest or skill. We also encourage repo managers to design welcoming specs and readmes for newcomers. 

## How we built it
The entire service was centered around popular javascript frameworks. The server side was built in Node and Express. We used Jade for front end development. We also used MongoDB to store details about users, repositories and issues. We extensively used the github api to get relevant data, label it, and share with our users.

## Challenges we ran into
Learning new technologies. Deciding between sql and no-sql databases. Having to distribute work between 4 people and also make sure to work as efficiently as possible. Moreover, we had to figure out the various api calls for github and read through many documentations and specifications for all out technologies.
