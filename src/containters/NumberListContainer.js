import {connect} from 'react-redux';
import NumberResultList from '../components/NumberResultList';

// If there are no callback props to create, `mapDispatchToProps` can be
// omitted.
export default connect(undefined, undefined)(NumberResultList);
