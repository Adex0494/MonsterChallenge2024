import monstersData from '../../../data/monsters.json';
import { monstersReducerExtended } from './monsters.reducer.extended';
import { setRandomMonster, setWinner } from './monsters.actions.extended';
import { fetchBattleWins } from './monsters.actions.extended';

describe('Monsters Reducer', () => {
  it('should change the battle on action fulfilled', () => {
    // TODO
    const action = {
      type: fetchBattleWins.fulfilled,
      payload: monstersData.battle[0],
    };
    const state = monstersReducerExtended(undefined, action);
    expect(state).toEqual(
      expect.objectContaining({
        winner: monstersData.battle[0],
      }),
    );
  });

  it('should add the random monster to the state', () => {
    // TODO
    const state = monstersReducerExtended(
      undefined,
      setRandomMonster(monstersData.monsters[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        randomMonster: monstersData.monsters[0],
      }),
    );
  });

  it('should add the winner to the state', () => {
    // TODO
    const state = monstersReducerExtended(
      undefined,
      setWinner(monstersData.battle[0]),
    );

    expect(state).toEqual(
      expect.objectContaining({
        winner: monstersData.battle[0],
      }),
    );
  });
});
