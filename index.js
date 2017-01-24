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

const verumServ = require("verum").Server;
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

fs.readFile ("conf.json", (err, data) => {
  var config = {};
  if (!err) {
    config = JSON.parse(data);
    start(config);
  } else {
    rl.question("Server Port: (9873) ", (answer) => {
      config.port = answer;
      if (config.port === "") config.port = 9873;

      start(config);

      rl.close();
    });
  }
});

function start (config) {
  var serv = new verumServ (config.port, (config.port !== undefined && config.public !== undefined) ? config : null);
}
