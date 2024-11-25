import { RootState } from '../../app/store';

export const monsterWins = (state: RootState) => state.monstersExtended.winner;
export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.randomMonster;
export const randomMonsters = 'TODO';
