---
title: 'Multishuttle and Pick-To-Light Racks'
date: '2020-05-18'
---

After joining Dematic for several mmonths, I finally had the chance to assist on testing a big project called Redmart Phase 3, where it had multiple large storage modules to test. 


The main storage module used were the racks in the Dematic Multishuttle (DMS), where stock would be decanted in Goods-To-Person (GTP) stations into totes, then moved to DMS via conveyors, and a series of lift and shuttles would move the tote to a multi-level racking system automatically. When the orders from the Warehouse Management System (WMS) comes down, the stock will be brought over by the shuttles, lifts and conveyors, to a GTP station dedicated for picking into Cartons, where it can then be shipped out to the end users. For Redmart, the DMS was simulated with Dematic Virtual Facility (DVF), so we could use it to visually monitor the totes as we test out the decant and picking functionalities. It was very interesting to observe each part of the conveying system with the simulation on. 


Another storage modules Redmart used were the Automatic Replenishment Racks, delivered by the conveyors from DMS to a separate picking system called Pick-To-Light (PTL). The idea is that stock being used very frequently will be automatically replenished into this system so that the operators can use the PTL system to pick in conjunction with DMS and GTP system. The racks here had a series of light modules installed, where when orders are downloaded, cartons scanned here will prompt operator to pick from specific racks with stocks replenished. In order to test this, I had to recreate part of the light modules using the ones we have in the office test room, connect them up in a light rail, and link up to a MOXA connection module, which was then interfacing to a separate router. The network setup took a long time, as we had to make sure each device was working correctly, connected to the right network, and have the correct network driver installed and pointing to the right COM port. After that, we also had to map each light device so that they sync up with the mapping data in the database. Finally, we could then use the light devices to pick any stock as we download any orders to it. 


Both systems took sometime to setup to test, but after the setup phase was done, it was very satisfying to see them working, displaying stock one way or another, and I could imagine how they operate in production. When the system became more stable, we could then setup volume test in both systems to let them operate automatically in stress to simulate the actual production environment.  