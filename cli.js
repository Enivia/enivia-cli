#!/usr/bin/env node

const { Command } = require("commander");

const search = require("./lib/search");

const program = new Command();
console.log("hello enivia");

program
  .command("search <keyword>")
  .description("quick search")
  .option("-n, --npm", "search by npm")
  .option("-s, --stackoverflow", "search by stackoverflow")
  .option("-g, --github", "search by github")
  .option("-d, --default", "search by google")
  .action((keyword, options) => search(keyword, options));

program.parse();
