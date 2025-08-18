---
title: 'Conveyor Emulator'
date: '2020-01-26'
---

In order to test the Warehouse Control System (WCS) Software for Dematic, a lot of work had been put in simulating the conveyor system in a virtual environment, allowing us to emulate loading a lot of totes into the system without any physical work. At the time I joined, there were 3 simulation options for the project, each were used in different circumstances depending on the project.

First was a simple UI interface that allowed manual messages to be sent / received by the simulated PLC controlling the conveyor system. We could use it to send one message as tote appeared at a position, another message as it reached the next location, and a final message as it ended up in the destination. This was a very manual process but can be useful to test very simple conveyor network with limited number of totes in the system. 

Second was a back-end only ruby emulator to simulate the message interaction between the PLC and WCS automatically. It listened to a TCP Port and responded with a set of messages depending on its own iteratation of where the totes were in the conveyor system. My boss Craig helped me set this up in the project I worked on but as I observed, it had a core fixed framework emulating the multi-shuttle part of the conveyor system, and a updated part in the outside conveyor system which required some additional scripting. Although it had no UI, it transmitted the messages very fast with WCS and allowed easy access for volume test with a lot of totes moving constantly. 

Third was a full-stack emulator built in Unity 3D, named Dematic Virtual Facility (DVF). It had a back-end system talking to WCS as well as a fully rendered front end visually displaying where the totes were at each conveyor. We can also directly interact with each tote by moving it manually or remove/add each one as we need. This emulator allowed us to visually observe the totes as we ran each test so we had a good grasp of where the problem might arise should the system gets stuck. However it also had some limitation as some totes might get stuck due to bad collisions, and we also had very little control of the back-end interaction of the emulator as opposed to our ruby emulator. 

So far I only used the second and third emulator in the 2 projects I worked on briefly, but I was looking forward to understand them all better so I could develop and utilize them better in the future in complex projects to test in. 