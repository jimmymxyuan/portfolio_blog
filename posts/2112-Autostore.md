---
title: 'Autostore'
date: '2021-12-06'
---

We started working with a new technology called Autostore recently, for a client called BWX. Autostore was a very specific storage technology using framework of racks stored on top of each other directly, and having robots rolling at the top of the racks which were capable of placing and retrieving totes deep under the racks from above. 


The best way to visualise this was to imagine a cluster of spider webs layered on top of each other, with square holes that can be used to place totes from bottom to top. The little spider robots at the top have wheels to travel along the webs and able to dig up the totes all the way from the bottom using hooks, as well as placing totes anywhere around the web system. This particular technology was very space efficient, as it employed every space imaginable, only requiring some space at the top for the robots to move around. The draw back was that it could potentially take a long time to retrieve stock located at the bottom of the racks, as the robots need to dig out all the totes above it first. 


To develop and test with this technology, we were given an Autostore Emulator, which acts as the server that controls all the robots. It also had a visualiser that displayed a grid, showing the position of the racks and robots. Our Singapore engineering team was responsible for developing a Warehouse Control Software interface to Autostore, and I was responsible for testing it. The main challenge was that unlike our usualy Dematic Multishuttle software where we understood and had full control of the low level communication of the messages. For Autostore, it was like a blackbox to us, we do not know at the start why robots were not moving, or why totes were not being delivered. In addition, Autostore had its own database keeping in track of locations and totes, and we do not have full control over it, which made setting up test scenarios difficult. 


To overcome these problems, I had to modify our usual test scenario setup. Instead of stopping and starting all services and completely rewrite databases, I had to run groups of scripts starting a selection of services including the Autostore ones in order, and also only perform partial restore of the database, then once the services were connected with each other, update the relevant database again to force autostore database sync up with our ones. After a lot of trial and error, I eventually got the test scenario working and got into decent progress with functional testing for BWX. 