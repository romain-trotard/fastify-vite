
import { join, resolve, dirname } from 'node:path'
import { beforeEach, afterEach, assert, expect, test } from 'vitest'
import { makeBuildTest, makeIndexTest } from '../../testing.js'
import { main } from './server.js' 

const cwd = dirname(new URL(import.meta.url).pathname)

test('render index page in development', makeIndexTest({ main, dev: true }))
test('build production bundle', makeBuildTest({ cwd, clientModules: 11, serverModules: 4 }))
test('render index page in production', makeIndexTest({ main }))
