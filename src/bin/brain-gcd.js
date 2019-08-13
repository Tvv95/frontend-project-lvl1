#! /usr/bin/node
import {
  printGreeting, askName, coreGames,
} from '../index';
import gcdGame from '../games/gcd-core';

printGreeting('Find the greatest common divisor of given numbers.');
askName();
coreGames(gcdGame);
