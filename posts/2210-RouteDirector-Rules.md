---
title: 'RouteDirector Routing Rules'
date: '2022-09-14'
---

For Westrac Tomago Project, on top of testing the Autostore Warehouse Control Software, I was also tasked setting up Routedirector for Order Carton from the Goods to Person station to dispatch area. This site had a relatively simple dispatch layout, but it also required a specific routing ruleset to allow weigh checking of the order carton and some specific QA reaction.


The Routedirector module allowed us to configure the mapping and routing rules in a way that we can decide exactly what happens to the Order Carton as it was routed over to the dispatch area. The main reason for the routing rules was to cover the handling of Order Carton during exception case when the Order Carton is weighed unexpectedly, either lower or higher than the calculated weight. This way, the Order Carton could be sent to QA and reprocessed before it would be dispatched incorrectly. It could also include some specific tags that require some post-processing before being sent to dispatch. 


Both the mapping and routing rules were done as direct database entries, I would create the visual diagram showing the conveyors, and the intended destinations for the containers in normal cases as well exception cases, then first write up mapping entires then apply routing rules using our Routedirector database entry templates. These database initialisation scripts were then be included in our SQL Deployment from our CI tools, which we would then test in our test environment. Normal routing sequences were straight forward enough, for exception cases, we would then teleport the containers around as well as manipulating the weights unexpectedly, and check that their behaviours match our expection in our rulesets. 


The Routedirector routing rules were limited to interaction within the module itself, it had some basic communication interaction with other modules but not enough to directly affect external databases. This means some additional modules configuration might be required for some specific interactions. For Westrac Tomago, there were some use cases where Warehouse Management System (WMS) might download an order that require the Order Carton to go to QA no matter what, or requiring cycle count after picking. This would require additional interactions between other parts of WCS to Routedirector. In this case, I would write up routing rules in anticipation on receiving this information, then work with other engineers to update other part of WCS for it. Once all changes were done and tested, we could then perform full end-to-end tests. 