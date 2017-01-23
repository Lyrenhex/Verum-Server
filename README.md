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
