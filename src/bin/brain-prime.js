#! /usr/bin/node
import {
  printGreeting, askName, coreGames,
} from '../index';
import primeGame from '../games/prime-core';

printGreeting('Answer "yes" if given number is prime. Otherwise answer "no".');
askName();
coreGames(primeGame);
