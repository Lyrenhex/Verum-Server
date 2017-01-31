/*
Verum Official Server Node
Copyright (C) 2017  Damian Heaton <dh64784@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const verumServ = require("verum").Server; // server module, as publicly provided by FreeChat (https://npmjs.com/package/verum)
const fs = require("fs"); // data persistence
const readline = require("readline"); // request input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// read from persisted config, if any
fs.readFile ("conf.json", (err, data) => {
  var config = {};
  if (!err) { // we read the file. yay
    config = JSON.parse(data);
    start(config); // pass the new config straight to the server instance
  } else { // no dice. ask the user?
    rl.question("Server Port: (9873) ", (answer) => {
      config.port = answer;
      if (config.port === "") config.port = 9873; // if the user just hit enter for the default, set the default.

      start(config); // pass config to the server instance.

      rl.close();
    });
  }
});

function start (config) {
  var serv = new verumServ ((config.source !== undefined && config.public !== undefined) ? config : null); // create the server instance, but if either config.source or config.public is not set, use default config values (as specified by the use of null)
  serv.listen(config.port);
}
