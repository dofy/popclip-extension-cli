#!/usr/bin/env node

import chalk from 'chalk'
import { Command } from 'commander'

import { getPackageInfo } from './utils'

console.log(chalk.green('Hello world!'), getPackageInfo('version'))

const program = new Command()

program.version('0.0.1').description('A CLI for generating React components')

program.parse(process.argv)
