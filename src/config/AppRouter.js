import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../screens/Home';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </Router>
    );
}

export default AppRouter;