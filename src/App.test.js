import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';

it('renders without crashing', () => {
    shallow(<App />);
});

it('should update player score', () => {
    const onScoreUpdate;
    const playersAfterUpdate;
    const appComponent = shallow(<App />);
    const players = [
        {
            name: 'Kunegunda',
            score: 5,
        }
    ];

    appComponent.setState({ players });
    onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate')

    onScoreUpdate(0, 6);

    playersAfterUpdate = appComponent.state().players;

    expect(playersAfterUpdate).toEqual(6);
});
