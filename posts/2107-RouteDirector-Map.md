---
title: 'RouteDirector Mapping'
date: '2021-07-01'
---

Another technology being used for the South Australia Health project was Routedirector, it was a technology that allows the routing of containers in a series of conveyors while updating the status of the containers as they were being transported from picking to despatch area. In Dematic, for certain technologies, they had been very stable and used for a long time that very little further code developments were required, so that only configurations and mappings were needed for them to be packaged as part of the Warehouse Control System solution. Routedirector was one of such technology. 


Since very little developments were required to setup Routedirector, it was usually the responsibility of the test team to map and configure it. We would start by reading the CAD drawings from the control team, and create a series of logical renamed conveyors more readable by the software, as well a series of renamed nodes at each scanner point for mapping purposes, all represented in a visual diagram document. Once this document was created, we would use it to create the maps, which would initialize the nodes, conveyors and their appripriate links. Once the basic mappings were done, we would create mapping rules as well as integration rules that allowed Routedirector to communicate with other modules when interacting with the containers and their statuses. 


Once mappings were done, we would then configure the conveyor emulator for the Routedirector conveyors, which represents the actual PLC of the conveyors. The emulator would communicate with Routedirector, and we can place containers onto the emulated conveyors and test the actual behaviour of the software. The routing logic were usually easy to test, the tricky part to test was integration with other modules, we often needed to create another emulator to control the transfer of the container from one system to another in order to perform integration test and finally end-to-end test. This could take a lot of trial and error as other modules were often changing rapidly which may or may not have regression issues while communicating with Routedirector, and emulation might not fully represent the actual PLC in some specific interations. 


For SA Health project, Routedirector would integrate with both Goods-to-person (GTP) picking and Voice Picking closely, and I had to make a few addons to allow containers coming from these two modules are added to the RouteDirector conveyors correctly during end-to-end tests. The volume tests created were not perfect, it needed some manual intervention in certain exceptions, but it was adequate to fully test the integration of the all the modules under stress. 