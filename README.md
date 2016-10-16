# openaid

## Inspiration
Open source projects are difficult to contribute to, especially for budding developers like ourselves. It's impossible to wrap our heads around humongous code bases and how to build them. Even understanding what issues need to be solved and what features need to implemented is a challenging task. We wanted to make it easier for developers, designers and managers to contribute to open source projects. They could learn how to solve code issues and respond to specs, in turn, learning how to contribute to bigger code bases, develop software and learn how big organizations work. This would not only hone their skills but also help the open source community grow faster. 

## What it does
Stakeholders of open source projects can register their repositories on our service. We scan their repositories for issues and related tags. We then provide a comfortable environment for developers to find specs in their areas of interest or skill. We also encourage repo managers to design welcoming specs and readmes for newcomers. 

## How we built it
The entire service was centered around popular javascript frameworks. The server side was built in Node and Express with the complete server and the database on AWS EC2 instance. We used Jade for front end development. We also used MongoDB to store details about users, repositories and issues. We extensively used the github api and the rapid api to get relevant data, label it, and share with our users.

## Challenges we ran into
Learning new technologies. Deciding between sql and no-sql databases. Having to distribute work between 4 people and also make sure to work as efficiently as possible. Moreover, we had to figure out the various api calls for github and read through many documents and specifications for all our technologies.

## Accomplishments that we're proud of
Building an entire service in one night that has most of the structure we set out to build. An entire server side in node and express, writing front end code in Jade that none of us had used before. Utilizing databases and setting up APIs was pretty challenging as well. Also, wrapping text in CSS is a lot harder than it looks.

## What we learned
Firstly, we like sleep a lot more than we think we do. Secondly, the importance of skills outside just writing code. A lot of things like user research, product design and management skills play a huge role in the success and fulfillment of a project. Quite often we were going to the whiteboard discussing over and over again what we wanted to build. 

## What's next for OpenAid
Making a more extensive and friendlier environment for open source development would be a great start. One of the features we were most excited about was peer review of code. Snippets of code would be reviewed by volunteers and stakeholders well before they would be finally merged and published. This would not only ensure higher quality code for projects but would also serve as a learning platform for developers who want to contribute to the open source community.
