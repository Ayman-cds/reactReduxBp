import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>{/* rest of your app goes here! */}</Provider>,
    document.getElementById('yourApp')
);
