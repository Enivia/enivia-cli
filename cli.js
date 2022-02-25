#!/usr/bin/env node

const { Command } = require("commander");
const chalk = require("chalk");

const search = require("./lib/search");
const qrcode = require("./lib/qrcode");
const uuid = require("./lib/uuid");
const server = require("./lib/server");
const program = new Command();

// add some useful info on help
program.on("--help", () => {
  console.log();
  console.log(
    `  Run ${chalk.cyan(
      "enivia <command> --help"
    )} for detailed usage of given command.`
  );
  console.log();
});

// search
program
  .command("search <keyword>")
  .description("Quick search")
  .option("-n, --npm", "search by npm")
  .option("-s, --stackoverflow", "search by stackoverflow")
  .option("-g, --github", "search by github")
  .option("-d, --default", "search by google")
  .action((keyword, options) => search(keyword, options));

// qrcode
program
  .command("qrcode <content>")
  .description("Generate qrcode")
  .action((content) => qrcode(content));

// uuid
program
  .command("uuid")
  .description("Generate id")
  .option("-p, --pure", "id only includes number and string")
  .action((options) => uuid(options));

// server
program
  .command("server")
  .description("Start local server")
  .option("-d, --dist", "serves static directory")
  .option("-p, --port", "listens for connections on the specified port")
  .action((options) => server(options));

program.parse();
