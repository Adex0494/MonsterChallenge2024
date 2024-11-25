import React, { useState } from 'react';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard.extended';
import { MonstersList } from '../../components/monsters-list/MonstersList.extended';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import { fetchBattleWins } from '../../reducers/monsters/monsters.actions.extended';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  selectRandomMonster,
  monsterWins,
} from '../../reducers/monsters/monsters.selectors.extended';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
  WinnerContainer,
  WinnerText,
} from './BattleOfMonsters.extended.styled';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const [winnerText, setWinnerText] = useState('');
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedRandomMonster = useSelector(selectRandomMonster);
  const winner = useSelector(monsterWins);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, []);

  useEffect(() => {
    if (winner?.winner.name) {
      setWinnerText(`${winner.winner.name} wins!`);
    } else {
      setWinnerText('');
    }
  }, [winner?.winner.name]);

  const handleStartBattleClick = () => {
    // Fight!
    dispatch(
      fetchBattleWins({
        monster1Id: selectedMonster?.id,
        monster2Id: selectedRandomMonster?.id,
      }),
    );
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList
        monsters={monsters}
        clearWinnerText={() => setWinnerText('')}
      />

      {winnerText && (
        <WinnerContainer data-testid="winner-section">
          <WinnerText> {winnerText} </WinnerText>
        </WinnerContainer>
      )}

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          title={selectedRandomMonster?.name || 'Computer'}
          monster={selectedRandomMonster}></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
