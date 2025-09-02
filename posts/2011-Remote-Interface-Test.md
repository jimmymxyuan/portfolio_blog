---
title: 'Remote Interface Test'
date: '2020-11-02'
---

After working for the Assa Abloy project for a while, one of the steps in the timeline was to provide remote interface test for the customers, where they will send a series of messages to our Warehouse Control System (WCS) and check the results so they can better prepare their Warehouse Management System (WMS) for production. 


This particular test could be done by setting up a proper remote channel to our test server, so they could send the messages directly to the our test server from their test WMS server. However, this method had a lot of security risk, and also WMS was often not ready at the time of the test, so the test was instead conducted by customer sending us a series of messages manually attached on the email, and we process it manually in our test server. 


The test could take several weeks, due to the nature of exchanging messages over emails. In order to preserve the state of the test, I had to setup specific test scenarios to download the messages received from customer email, perform decant/cyclecount/pick tasks, then take a database snapshot at the end of the test, thus able to continue the next test without interupting my other functional/volume test at the time. When a new set of messages were received, I would create a new test, initilize it with the database snapshot from the previous test, then download any new messages and continue the test. 


Normally, the test would be smooth, but sometimes there would be small issues noticed such as some datetime formatting differences, or barcode generated not quite accepted by WMS or WCS. When that occurred, we need to communicate and fix it in one side (Usually our side), then repeat the test afterwards. There sometimes would be human errors as well, where messages for the test were formatted wrong, or missing brackets here and there, we would then carefully inform the customer about it, and repeat the test again once corrected. The process was slow and painful, but ultimately helped preparing for the production environment later on. 