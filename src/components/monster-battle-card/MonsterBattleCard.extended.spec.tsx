import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import monstersData from '../../../data/monsters.json';
import { MonsterBattleCard } from './MonsterBattleCard.extended';

describe('MonsterBattleCardExtended', () => {
  it('renders the monster card correctly with a monster', () => {
    // TODO complete tests
    render(<MonsterBattleCard monster={monstersData.monsters[0]} />);
    const monsterName = screen.getByText(monstersData.monsters[0].name);
    expect(monsterName).toBeInTheDocument();
  });
});
