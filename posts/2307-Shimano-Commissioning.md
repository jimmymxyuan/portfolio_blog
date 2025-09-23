---
title: 'Shimano Project Commissioning'
date: '2023-07-17'
---

I had recently been working on a project for a client called Shimano, a small upgrade project that provided no functionality change but newer UI and system which should streamline the order receival a bit better, as well as providing some bug fixes from the code update. This would be also the first commissioning project that I would attend to since I became a father, which might be a bit of a challenge as my wife still relied on me watching over the baby at night as she was often exhausted looking after him during the day. 


The inhouse testing was very smooth as all functionalities were existing and almost no bugs were found apart from the initial misconfiguration issue. Preparing for commissioning test was a bit tough as site wanted as little downtime as possible, and only provided us a small selection of storing locations for testing, and require all other locations to remain untouched for production. We had to modify our testing scripts to prevent other locations from being touched or moved during commissioning. 


However, during the first night of commissioning, a disaster occurred. Even though we made sure only the locations assigned for testing were enabled and all other locations were disabled, we failed to consider that the system would still access certain disabled locations with the Internal Aisle Transfer (IAT) functionality, to more efficiently move totes across aisles, which would end up moving the totes in the old system, causing desync. Luckily we found this early on and stopped it immediately, after a quick discussion, we made a script to find all affected totes and brought them out using new system to be reloaded back in using old system so they could all be resynced with the old system for production tomorrow. It was a lot of physical works bring all these unexpected totes out then back in, but I was glad that we recovered from the issue relatively quick without upsetting the client. 


Over the next few days, we managed to commission much more smoothly after learning our mistakes, with a lot more restrictions added to our test process. The client was especially happy with the minimal disruptions we caused to production, where the actual switch over to the new system only took one night. There were some issues reported after switch over but most were simply operational, the documentations needed to be updated and client better informed about the changes. It was one of the most smooth projects I had ever worked on. 