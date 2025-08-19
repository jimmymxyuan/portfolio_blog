---
title: 'Test Scenarios'
date: '2020-01-13'
---

Since I joined Dematic at such an odd time, I did not start doing real work until couple of weeks later, after few different inductions and holiday break. When I finally dived in, I was surprised to see a very in depth test framework being distributed among our team to be used for various scenarios. 


To test each project, a test artefact is built over an existing test framework written in Ruby. It consisted of a number of emulators, environment setup scripts, and a lot of test scenarios. The test scenarios are very interestingly written, it is mainly represented in a spreadsheet, with a series of test steps and actions. Once the test starts, the test framework would translate this spreadsheet into actual test actions and run through the system to load the environment and start the test. After the actions are performed, it also had the option to check through the changes and validate the test results, as well as storing the results to allow later inspections. 


Each scenario usually covers a portion of the functionalities, it can vary in steps but usually comes down like this:


1. Run a script to stop all existing Warehouse Control System (WCS) Services
2. Clean and restore a database snapshot suitable for the test
3. Start all the WCS services
4. Download some messages to WCS
5. Start some emulators and scripts necessary for the test
6. Once test performed, validate and store test results


Although the test framework had the capability to fully automate each test, it was very rare to create it due to the nature of our product. If we were only testing some specific modules, that would be the right way to do, but instead we are testing 30 ~ 40 different modules together in a complex system, which meant it was very hard to keep track of every module and very database changes during the test to fully automate it. So most of the scenarios were semi-auto, where it would automate starting and setting up, but relying on us to perform certain actions and check test results. 


It was a very interesting system to use, not perfect but had a lot of capabilities and depth. Very impressive considering that the whole system were developed without any Research and Development budgets, the cost of building and maintaining were integrated into each project instead. I was looking forward to contribute to it in the future. 