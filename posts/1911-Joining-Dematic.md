---
title: 'Joining Dematic'
date: '2019-11-11'
---

Today I joined Dematic as a Software Test Engineer. Dematic is a Logistic Solution provider, specialising in building automated warehouses for clients with large amount of rotating stocks. It is a primarily an engineering firm, where controls and system engineers occupies majority of the workforce, but recently it has expanded on the software side, building its own Warehouse Control System (WCS) software and expanded its capability to support a variety of different hardware as well. 


Basically, our clients would tell us how much stock in take they have, how much storage was needed, how often were stocks being picked to their clients, and we would design and build a system consisting of a series of decant stations, conveyors, multi-shuttles, storage racks, pick stations and despatch stations to meet their needs. The conveyors are controlled by PLCs, but the overall system would be controlled by the WCS software in the back end, while providing a communication channel from their Warehouse Management System (WMS) to manage their stock input/output, and also a WCS UI to view the status of the warehouse as stock are being processed. 


My role in the software department would be testing the WCS using test environment before bring it to site to be commissioned, thus minimizing the commissioning time. Instead of using real conveyors, PLC and other bulk hardware, we will be emulating them by only conveying the messages sent by the PLC to WCS, reducing cost and allowing agile testing during development. We will also be emulating WMS by sending different messages to our system both manually and automatically using a test framework that reads an excel spreadsheet instructing a series of steps to perform for each test. This way, we can separate the test by functionalities, and cover each functional points using different steps and data. 


Both the emulators and test framework are built in Ruby, a language that I knew nothing about. However it was was somewhat similar to Python, which I used extensively in my first job, so I managed to pick it up very quickly. The main advantage of ruby I gathered so far seemed to be fast and easy string manipulation, which was very helpful in emulating the low level messages sent by PLC, as well as translating different scripts we used in our test framework into actual steps to perform. I look forward to learn more about it so I can utilize it to test such a complex WCS system. 