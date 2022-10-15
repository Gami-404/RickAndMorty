import { render, screen, fireEvent } from '@testing-library/react';

import Characters from './Characters'
import {store} from "./../../app/store";
import { Provider } from 'react-redux';

const CharactersTest=()=>{
    return <Provider store={store}>
        <Characters />
    </Provider>
};
describe("Characters", () => {

    it('should fetch and render characters ', async () => {
        render(<CharactersTest/>);
        const characterDivElement = await screen.findByTestId('character-1')
        expect(characterDivElement).toBeInTheDocument();
    });


    it('should render multiple character 20 on every page ', async () => {
        render(<CharactersTest/>);
        const charactersDivElement = await screen.findAllByTestId(/character/i)
        expect(charactersDivElement.length).toBe(20);
    });
});


