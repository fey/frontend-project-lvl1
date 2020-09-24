#!/usr/bin/env node
import { description, game } from '../src/games/brain-prime.js';
import playCli from '../src/cli.js';

playCli(description, game);
