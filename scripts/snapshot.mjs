#!/usr/bin/env zx
import 'zx/globals'

$.verbose = false

if (!/pnpm/.test(process.env.npm_config_user_agent ?? ''))
  throw new Error("Please use pnpm ('pnpm run snapshot') to generate snapshots!")

const flagCombinations = [['default']]

const playgroundDir = path.resolve(__dirname, '../playground/')
const bin = path.posix.relative('../playground/', '../outfile.cjs')

cd(playgroundDir)
for (const flags of flagCombinations) {
  const projectName = flags.join('-')

  console.log(`Removing previously generated project ${projectName}`)
  await $`rm -rf ${projectName}`

  console.log(`Creating project ${projectName}`)
  await $`node ${[bin, projectName, '--force']}`
}
