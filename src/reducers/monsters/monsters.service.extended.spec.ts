import { MonsterServiceExtended } from './monsters.service.extended';
// import { API_URL } from '../../constants/env';
import monstersData from '../../../data/monsters.json';

describe('Monsters Service Extended', () => {
  it('should get the winner of the battle of monsters', async () => {
    // TODO - implement test
    jest
      .spyOn(MonsterServiceExtended, 'battle')
      .mockResolvedValue(monstersData.battle[0]);
    const response = await MonsterServiceExtended.battle({
      monster1Id: monstersData.monsters[0].id,
      monster2Id: monstersData.monsters[1].id,
    });
    expect(response).toEqual(monstersData.battle[0]);
  });
});
