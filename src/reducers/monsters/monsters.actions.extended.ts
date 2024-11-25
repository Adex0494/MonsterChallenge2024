import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { Battle } from '../../models/interfaces/battle.interface';
import { MonsterServiceExtended } from './monsters.service.extended';
import { Players } from '../../models/interfaces/battle.interface';

export const fetchBattleWins = createAsyncThunk<Battle, Players>(
  'monsters/battle',
  MonsterServiceExtended.battle,
);

export const setRandomMonster = createAction<Monster | null>(
  'monsters/setRandomMonster',
);

export const setWinner = createAction<Battle>('monsters/setWinner');
