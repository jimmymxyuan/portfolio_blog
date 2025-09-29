---
title: 'WMS Emulator'
date: '2023-09-04'
---

After Shimano Upgrade Project finished up, my attention was directed full on to another project called Metcash. This medium sized project involved a brand new warehouse that housed a decent sized Dematic MultiShuttle (DMS) system with 7 aisles. Although the physical size was impressive, it did not have too many new technologies involved, everything was relatively standard apart from certain different messaging standards. Thus I would be the sole tester responsible for it.


One major new development involved for Metcash was that their Warehouse Management System (WMS) did not communicate with our Warehouse Control System (WCS) in a straight forward TCP connection, instead, it required constant heartbeat update both ways to ensure both sides were always aware of the connection status of each other. The heart beat message sent and received required a constantly incrementing number, otherwise it would determine that connection was lost and threw an error. In order to test this, I had to develop a WMS emulator from ground up, as we never had a WMS acting like this before. Luckily the low level messaging bits were very similar to another project where we had a library for it, I modified it and updated it to work with Metcash, and developped the heart beat system with it. 


Once the heart beat communication was working, I had to also include allowing WMS Emulator to support downloading and receiving all other interface messages, as well as configuring the automatic response it would reply on these messages. This took a long time to implement as many of these messages also required the system to track the state of the stock inventory, meaning I had to make a psuedo database system whenever inventory were added or modified, and respond accordingly when there were updated. Eventually, I got them all working and was able to use the emulator to communicate with WCS fully and test all the interfaces as if we were connected to the production WMS. 