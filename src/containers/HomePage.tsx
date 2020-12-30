import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from '../components/Home';
import IntegrationActions from '../actions/integrations';
import LightSyncActions from '../actions/lightsync';

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        dataStore: ownProps.dataStore,
        lightsync: ownProps.lightsync,
        monitors: ownProps.monitors,
        // integrations
        integrationManager: state.integrations.manager,
        activeIntegrations: state.integrations.activeIntegrations,
        initialized: state.integrations.initialized,
        // lightsync
        lightSyncRunning: state.lightsync.running,
        lightSyncArgs: state.lightsync.args,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
        { ...IntegrationActions, ...LightSyncActions },
        dispatch
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
