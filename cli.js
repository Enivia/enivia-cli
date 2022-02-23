#!/usr/bin/env node

const { Command } = require("commander");

const search = require("./lib/search");
const qrcode = require("./lib/qrcode");
const program = new Command();

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

program.parse();
