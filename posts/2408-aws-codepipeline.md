---
title: 'Setting up AWS CodePipeline'
date: '2024-08-09'
---

Managed to setup AWS Code deploy for this website today, took sometime to setup the pipelines, IAM roles, server configurations and different links but eventually got it working.
Now whenever I push a change to GITHUB, the AWS Code Pipe Line will automatically pull the source from Github, rebuild the web app, and restart pm2 with the updated app installed. It&apos;s pretty neat.