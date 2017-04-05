import {connect} from 'react-redux';

import WordResultList from '../components/WordResultList';

// If there are no callback props to create, `mapDispatchToProps` can be
// omitted.
export default connect(undefined, undefined)(WordResultList);
