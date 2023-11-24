#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const commander_1 = require("commander");
const utils_1 = require("./utils");
console.log(chalk_1.default.green('Hello world!'), (0, utils_1.getPackageInfo)('version'));
const program = new commander_1.Command();
program.version('0.0.1').description('A CLI for generating React components');
program.parse(process.argv);
//# sourceMappingURL=index.js.map