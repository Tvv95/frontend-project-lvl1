#! /usr/bin/node
import {
  printGreeting, askName, coreGames,
} from '../index';
import evenGame from '../games/even-core';

printGreeting('Answer "yes" if number even otherwise answer "no".');
askName();
coreGames(evenGame);
