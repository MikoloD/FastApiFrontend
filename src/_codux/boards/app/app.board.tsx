import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 1030,
        canvasHeight: 746,
        windowHeight: 768,
    },
});
