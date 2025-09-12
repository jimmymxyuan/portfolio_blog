---
title: 'Teamcity Deployment'
date: '2022-07-05'
---

Initially in Dematic as a Software Test Engineer, my job was only to test software and developing tools around software testing. However as I dived a bit deeper, my support role had expanded, I ended up helping with project configurations, improving software build process and maintaing Continuous Integration (CI) tools. One of such tools was Teamcity, we used it to automatically build various solutions which were then combined with configuration documents into deployable Warehouse Control System software. 


Previously, Teamcity was only used to build CSharp solutions. The deployment package was then built using MSBuild separately. This process had several limitation, it required user to remote access to build machine and ran the script manually to trigger the build which means it cannot support multiple users at the same time. An auto-build system via scheduled task was available, but it was not always reliable. So my boss and I had developped a separate solution in Teamcity itself which will build deployments, one step closer for a full CI CD pipeline. 


Now with Teamcity deployment, the auto deployment now triggers reliably, and could retry if failed. It also allowed anyone with permission to trigger the deployment build without any limitation, allowing much more control over the process. The auto-build in the morning was also being built a lot more consistent, only failing if the solution build also failed due to other issues. The deployment still cannot be deployed to any server automatically, but that current was a little too difficult to process, as it required too many OS wide services installation as well as database installation in a virtual machine, but I hope one day we could achieve a full automatic pipeline.