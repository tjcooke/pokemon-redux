import {connect} from 'react-redux';
import PokeList from '../components/PokeList';


// A "smart" container has three jobs:
// - grab stuff from redux
// - grab a dumb component
// - smash them together


// We have two jobs:
// - tell it how to map redux state to react props
// - tell it how to map redux dispatch to react props

// "translate" from redux state to react props
const mapStatetoProps = (state) => {
    // return own own custom props object
    return {
        // react: redux
        cards: state.cards
    }
};

// connect gives us a function that knows how to 
// translate for a dumb component
const makeComponentSmart = connect(mapStatetoProps);
const SmartPokeList = makeComponentSmart(PokeList);

export default SmartPokeList;