#! /usr/bin/node
import {
  printGreeting, askName, coreGames,
} from '../index';
import progressionGame from '../games/progression-core';

printGreeting('What number is missing in the progression?');
askName();
coreGames(progressionGame);
