import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNext } from 'reducers/game';

export const GamePage = () => {
  const dispatch = useDispatch();
  const descriptionText = useSelector((store) => store.game.description);
  const coordinates = useSelector((store) => store.game.coordinates);
  const actionsObject = useSelector((store) => store.game.actions);
  console.log(actionsObject);

  return (
    <div>
      <h2>{descriptionText}</h2>
      <p>{coordinates}</p>
      {actionsObject.map((action) => (
        <div key={action.direction}>
          <p>{action.description}</p>
          <button
            onClick={() => dispatch(fetchNext(action.direction, action.type))}
          >
            <h2> Go {action.direction}</h2>
          </button>
        </div>
      ))}
    </div>
  );
};
