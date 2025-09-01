---
title: 'GTP Emulator'
date: '2020-08-31'
---

I had been working on a smaller project by myself for a client called Assa Abloy. It was relatively a simple site, with a Dematic Multishuttle (DMS) system with two aisles and linked to two Goods-to-Person Stations. I had set up the test environment, went through the usualy functional check list, and tested away the usual decant, cycle count and picking functionalities. 


The challenging aspects of working on these smaller projects alone was that I needed to learn how to setup the emulation myself, rather than waiting on other teams or my boss to set it up for me. I learnt to covert the ruby multishuttle emulator from a different project and adapted to this project, mostly by reducing the number of conveyors and shuttles to suit this site. I also updated the data generation script to generate a list of download data from Warehouse Management System (WMS) to our software for each test we use. The most interesting emulator for this project I had to setup however was the GTP Emulator.


At a later stage of testing, we would usually setup volume tests with a lot of totes, stock and orders. We achieve this automated test by the use of GTP Emulator, where instead of having a person decanting or picking and pressing the buttons, the emulator would interpret the messages behind the scene, and respond to the GTPController directly with the appropriate message, which emulates the pressing of the buttons. For most cases this was fairly straight forward, many buttons share the same XML representation state of NEXT_TASK. However for some cases, we had to do additional calculation based on stock level, choices to perform when experiencing stock shortage or weight issues and such. To allow the emulator to cover all grounds, I had to manually perform the tasks first, inspect each messages undeneath the application, and then update the emulator to replicate each message in its work flow.


Once the emulator was functional, there were also some additional challenges in the actual volume test itself. First was the interaction with the multishuttle emulator, where some defensive measures need to take in place to make sure totes are correctly transferred from one emulator to another during decant operations. Another was the speed, the emulation would perform tasks instantly, which was a bad representation of the real world operation. I had to slow down both the multishuttle emulator and GTP Emulator with some delays to correctly represent the production environment, so we could make sure the picking rates could be realistically achieved during production under stress. 