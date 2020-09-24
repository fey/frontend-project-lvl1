#!/usr/bin/env node
import { description, game } from '../src/games/brain-even.js';
import playCli from '../src/cli.js';

playCli(description, game);
