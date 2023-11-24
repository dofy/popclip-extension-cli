#!/usr/bin/env node

import { Command } from 'commander'
import { getPackageInfo } from './utils'
import chalk from 'chalk'
import ora from 'ora'

const spinner = ora()

const program = new Command()

spinner.start(chalk.green('Loading unicorns'))

program
  .version(getPackageInfo('version') as string)
  .description(getPackageInfo('descreption') as string)

program.command('create').action((ExtensionName) => {
  console.log('create', ExtensionName, process.argv)
})

program.parse(process.argv)
