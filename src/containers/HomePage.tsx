import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from '../components/Home';
import IntegrationActions from '../actions/integrations';

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        dataStore: ownProps.dataStore,
        integrationManager: state.integrations.manager,
        activeIntegrations: state.integrations.activeIntegrations,
        initialized: state.integrations.initialized,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ ...IntegrationActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
