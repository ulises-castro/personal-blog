---
title: How to install Nodejs in the right way using NVM
author: Ulises Castro
date: '2020-09-11'
hero: images/rhiw1nE.jpg
---
A long time ago, I installed Nodejs using [the official installer](https://nodejs.org/en/download/). However, I was facing several issues and I can bet you that even you have faced issues once you have installed Nodejs with the official installer.

But whats wrong using the official installer?

Well, the problem could emerge when:

* You have several projects and they have to be run at a certain version of Node
* You want it to use a newer/older version.

## So, what we have to do?

Install [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm#installing-and-updating), which allows us to install and use any version of Node, isolating installed noder versions on your computer, so that, we can install  different packages per installed version,

**First of all**

You have to install on your system `git`, `curl`, or `wget` to download `nvm.`

If you are using a distro based on Arch Linux

`sudo pacman -S git wget`

or using Yay

`yay -S git wget`

**Ubuntu**

`sudo apt install git wget`

**Note: If you using Linux, you have to refresh your Bash profile, to do that, just type on a terminal:**

`source ~/bashrc`

***If you are using Oh my Zsh***

***`zsh`***

**Windows (I don't recommend use windows for development to be honest).**

Windows has several issues, but it has its own version.

<https://github.com/coreybutler/nvm-windows>

*I recommend switch to Linux. At least to use the Ubuntu terminal on Windows could save you a lot of time on incompatibilities concerns.*

**First Steps using NVM.**

We suppose, we want to install version 12.18.3.

Just type the following command on your terminal

`nvm install 12.18.3`

If you want use it

`nvm use 12.18.3`

What If want to use it as my default node version?

`nvm default 12.18.3`

## Conclusion

We learn how to manage our Nodejs versions using NVM, so we can switch them easily from version 12 to 8 and vice-versa.
