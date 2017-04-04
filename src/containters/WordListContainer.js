import {connect} from 'react-redux';

import WordResultList from '../components/WordResultList';

const mapStateToProps = (state) => ({
    results : state.wordReducer.results

});

// If there are no callback props to create, `mapDispatchToProps` can be
// omitted.
export default connect(mapStateToProps, undefined)(WordResultList);
