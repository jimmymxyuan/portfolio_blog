---
title: 'Database Replication'
date: '2022-08-22'
---

I had recently started working on a new project called Westrac Tomago, apart from the usual creating deployment, setting up project configurations and creating test framework for it, I had also been tasked on setting up a Replication Server on our test environment to check a few improvements made on our usual setup. The Replication setup in our backup server was a process that continously copy all content from the database over, so that in the event of primary server failure, the client could switch over to the backup server without any data lose.


The replication process was usually very seamless and problem free, however we discovered a rare case of a specific sequence of database update from our volume test which caused the replication to not keep up and end up with permanent desynchronization of the two servers. A fix was applied but we needed to test it locally before installing it in the client server eventually. 


To setup the replication process, I had to setup the network of the primary and backup server so that they could communicate in all required ports. The windows account also needed required rights in the SQL server to replicate all database updates from both side. Finally, a distribution setup was required in the primary server to automatically upddate the backup server. The last step was done in a script made by our team already, but some modifications were required with the latest version of the SQL server that we were using, after a few trial and errors, I finally managed to get it working. 


The setup was the tricky part, once that part was done, the tests to reproduce the issue before the fix and verifying the fix was very straight forward, I simply had to monitor the database at the problematic areas as I ran through the volume tests, and check a few variations post fix to make sure there was no regression issues and no possibly areas we missed, and incorprate the fix in our setup scripts and reapply the test. Luckily the fix applied worked really well and I saw no other issue, and was able to finish testing it relatively quickly. 