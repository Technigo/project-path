import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserID, startGame } from 'store/game';

import { TypoTitle, TypoText } from 'components/Typography';
import Input from 'components/InputText';
import Section from 'components/Section';
import Button from 'components/Button';

export default () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.game.name);

  React.useEffect(() => {
    dispatch(setUserID());
  }, [dispatch]);

  return (
      <Section>
        <TypoTitle>Welcome!</TypoTitle>
        <TypoText>Are you ready for this....???</TypoText>
        <Input type="text" placeholder={username} />
        <Button type="button" onClick={() => dispatch(startGame())}>Start Game</Button>
      </Section>
  );
};
