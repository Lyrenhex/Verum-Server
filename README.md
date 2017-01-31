# Verum Server
Code for a Verum Node. Can be used to start up a new Node.

## Verum Node Rules
In order to preserve user security, **all Nodes should adhere to the following security rules**:

- When a client requests a user's Public Key, the user's Public Key must be provided - not a Node Key. The user will have the capability of verifying this, so violators will be found.
- Messages should *only* be stored **during transit**. Once the messages have been sent to their recipient, they should be irrevocably deleted.
- Messages should be encrypted at rest. Compliancy with the first rule with messages from a secure client make compliancy with this default (and almost impossible not to do).

**Key point:** Verum Nodes store no Secret Keys whatsoever, only Public Keys.

## Usage

Verum Nodes are used by users to keep hold of their Public Key and allow contact from other Verum users. The same user may be registered on multiple Verum Nodes, and Nodes are not tracked nor indexed officially (in effect, it's _almost_ peer-to-peer networking). Rather, users must be identified by _user_@_node_, such that _node_ is a domain / IP address of a Node, which Verum clients will connect to to send messages to _user_ on that _node_.

## Running a Node

**Warning: Verum Nodes are _not_ yet ready for public use.** You may use this if you wish, but be aware that it is still early in development and may not actually work as it should do eventually.

These instructions require Node.JS to be installed on your system, and that you have already cloned the repository.

1. Run `npm install` to install required dependencies (`verum`).
2. Run `npm test` to run the program (`npm start` is an alias for `npm test`)

## Updating a Node

**Be warned that these instructions are pretty much guaranteed to wipe all user data! Make sure to back up Node data before doing this.**

You should have `npm-check-updates` installed. Do `[sudo] npm install npm-check-updates -g` if not.

1. Back up all (if any) Node Data:
  - config.json
  - users.json
  - **NODE DATA SHOULD NOT BE BACKED UP IN THE FOLDER THAT THE SERVER OPERATES OUT OF, OR IN ANY CHILD FOLDERS. IT SHOULD BE BACKED UP HIGHER INTO THE FILE PATH; IT WILL BE WIPED OTHERWISE DURING UPDATE.**
2. Fetch the new version of Verum-Server from the GitHub master branch (**Warning: will delete all data.**): (these instructions assume that you're running the standard Node code provided here, which creates config files and user data files for your Node)
  1. Run `git fetch --all`
  2. Run `git reset --hard origin/master`
3. Your user data will now be wiped. Restore it from the backup you made previously.
4. Run `npm test` or `npm start` as usual to run the Node.
