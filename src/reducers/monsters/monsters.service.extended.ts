import { API_URL } from '../../constants/env';
import { Battle, Players } from '../../models/interfaces/battle.interface';

const battle = async (args: Players): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      monster1Id: args.monster1Id as string,
      monster2Id: args.monster2Id as string,
    }),
  }).then(response => response.json());

export const MonsterServiceExtended = {
  battle,
};
