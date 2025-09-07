---
title: 'Voice Testing'
date: '2021-05-17'
---

One of the new technologies we deployed for South Australia Health project was Voice Picking. This technology employs the use of a voice headsets that was linked to a scanner as well as to the central voice server console which was also integrated to our main Warehouse Control System. The operator can use the headset to pick products while moving about with a trolley to gather them as instructed. 


To use voice picking, the operator would wear the headset, login with their operator ID, then use the linked scanner to scan an Order Carton to start picking. The voice headset would direct the user to the appropriate rack to pick from specific locations to the Order Cartons repeatedly until all fullfillments were completed. Alternatively the operator could also scan a trolley and then multiple Order Cartons on the trolley, and fulfill all orders as directed at the same time. Once all orders were finished, the operators would be instructed to bring the order cartons to the despatch conveyors and let the dispatch team handle the process. 


To test this feature, we needed to setup the voice console, link it up to our test server, as well as train the voice headset with our voice template, so that the system can recognize our voice during the operation. We would need to repeat every word that could be picked up by the system several times until the system was confident with the voice recognition of the users. Once all were setup, we would then setup scenarios that download the orders and start picking them with a different combination of tests. 


One particular challenge was the test integration of voice picking with other modules. Since the voice server console was licensed in a way that it could only be hosted on a specific test server, we had to use a different test server as opposed a test VM in our own computer in order to link up to this voice server console. The conveyor emulator that transports the totes also needed to be hosted on the server, so that we can transport the order cartons to the voice area as well as to the dispatch area during the picking process. It took sometimes until all the emulators were talking to each other as well as to the overall system itself. We even managed to setup Volume tests to perform large voice stress test that automatically moves the Order Carton as orders were being picked through, which allowed us to verify the stability of the system. 