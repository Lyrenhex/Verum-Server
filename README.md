# Verum Server

[![Join the chat at https://gitter.im/freechat-project/Verum-Server](https://badges.gitter.im/freechat-project/Verum-Server.svg)](https://gitter.im/freechat-project/Verum-Server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Code for a Verum Node. Can be used to start up a new Node.

## Verum Node Rules
In order to preserve user security, **all Nodes should adhere to the following security rules**:

- When a client requests a user's Public Key, the user's Public Key must be provided - not a Node Key. The user will have the capability of verifying this, so violators will be found.
- Messages should *only* be stored **during transit**. Once the messages have been sent to their recipient, they should be irrevocably deleted.
- Messages should be encrypted at rest. Compliancy with the first rule with messages from a secure client make compliancy with this default (and almost impossible not to do).

**Key point:** Verum Nodes store no Secret Keys whatsoever, only Public Keys. They should also never come into contact with a Secret Key: if one does, **please report it!**

## Usage

Verum Nodes are used by users to keep hold of their Public Key and allow contact from other Verum users. The same user may be registered on multiple Verum Nodes, and Nodes are not tracked nor indexed officially (in effect, it's _almost_ peer-to-peer networking). Rather, users must be identified by _user_@_node_, such that _node_ is a domain / IP address of a Node, which Verum clients will connect to to send messages to _user_ on that _node_.

## Running a Node

You may use this if you wish, but be aware that it is still early in development and may not actually work as it should do eventually.

These instructions require Node.JS to be installed on your system, and that you have already cloned the repository.

1. Run `npm install` to install required dependencies (`verum`).
2. Run `npm start` to run the program

## Updating a Node

**Be warned that these instructions are pretty much guaranteed to wipe all user data! Make sure to back up Node data before doing this.**

The data warnings only technically apply if Git is tracking your conf.json and users.json files... Which is probably isn't. Still, be careful!

Be aware that the Verum Node program operates on a very much "rolling release" system, in which updates may be pushed frequently. It's **extremely advisable** for Nodes to keep up-to-date (or, at least, to keep their dependencies up-to-date).

1. Back up all (if any) Node Data:
  - conf.json
  - users.json
2. Fetch the new version of Verum-Server from the GitHub master branch: (these instructions assume that you're running the standard Node code provided here, which creates config files and user data files for your Node)
  1. Run `git fetch --all`
  2. Run `git reset --hard origin/master`
3. Your user data will now be wiped. Restore it from the backup you made previously.
4. Run `npm update` to make sure that your dependencies are the correct versions.
4. Run `npm start` as usual to run the Node.
