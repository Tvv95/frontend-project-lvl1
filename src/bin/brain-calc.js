#! /usr/bin/node
import {
  printGreeting, askName, coreGames,
} from '../index';
import calcGame from '../games/calc-core';

printGreeting('What is the result of the expression?');
askName();
coreGames(calcGame);
