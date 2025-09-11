---
title: 'Autostore Volume Test'
date: '2022-04-19'
---

Functional tests were completed for BWX project at this point, and I started making volume tests for it. In terms of emulation update, it was not so hard, as very little was changed for it. The only addition was the addition of a reserve slot for order cartons when picks were shorted, which I had to update the emulator and check the state of the order cartons as orders were being picked. However, due to the nature of Autostore storage speed, there was another major limitation when performing Volume Test - Multiplicity issue. 


The main drawback of Autostore was the retrieval speed, totes at the bottom of the rack cannot be retrieved directly. The totes above it needed to be digged out first, placed somewhere else, then the totes at the bottom could be retrieved. This normally would not be an issue for small number of picks, but for volume tests, if a lot of orders all require specific totes at the bottom, a lot of delays would be showing causing the overall pick rates to drop substantially. In order to combat this, I had to create a lot more stock than normal, as well as distributing stocks evenly in a wide area rather than concentrated in one. By doing these, the pick rates were able to be maintained at adaquate level. Notes were made for commissioning as well as notifying the client regarding the retrieval behaviours for production preparation.


There also had been further software development to prepare some frequently used stock from bottom to the surface at midnight in preparation of the picks tomorrow. Calculations were done prior to classify stocks depending on their frequent of use to bring the most frequently picked to the top and leaving unused stock at the bottom. This also helped bringing the pick rates up and solve the potential multiplicity issue as well. 


One finaly issue was the autostore emulator itself sometimes causes desync when running at high speed against our location tracking. This was not a huge issue as we would just be running tests in the background at normal speed instead which was also a better indication of real world behaviour. The volume tests helped identify some production environment potential issues and allowed us to resolve it before finding them in production. 