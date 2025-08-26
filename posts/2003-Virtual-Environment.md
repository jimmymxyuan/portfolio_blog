---
title: 'Virtual Environment'
date: '2020-03-09'
---

In Dematic, we often worked on several projects at the same time, and each project required different setup to develop and test. In order to differentiate them, we used virtual environment for each project so that we can test the Warehouse Control System (WCS) software against each project separately. There were two different virtual system being used, one was Oracle Virtual Box, second was Microsoft Hyper-V virtualization. 


Oracle Virtual Box was the main tool we used for testing different projects at this time locally. We would first copy over a standard Windows Server virtual box image with set of libaries and tools already installed, then branch out a separate image for each project. Once setup, we would take a snapshot, install the required project WCS deployment, and start testing from there. 


Hyper-V virtualization was another tool we used, but mainly to create test servers. We had a Hyper-V host setup in a server rack, which we used to host various testing tools, software in development, and third party software used in conjunction with ours for testing. Occassionaly, mainly for big projects, we would create test servers mainly to run volume tests independently to stress test the stability of the software over a long period. Similar to Virtual Box, we would copy over an existing disk image with most software pre-installed, then create a new VM based on it. We would document the IP address, project name and uses for it in detail, and then host it on the server to be used in the duration of the project development. The Hyper-V server resources were limited in terms of total RAM, disk and CPU, so we had to carefully distribute it to the projects most needed in order to maximise our efficiency. 


I asked my boss the possibility of using other containers like Docker instead, but this was not possible due to WCS being so integrated with various Windows Server capabilities, as well as potentially needing to communicate with PLC and other hardwares separately. However, for development and devops, this was still an option to explore on. 