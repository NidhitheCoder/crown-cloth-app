import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from  '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
});
// const collectionsOverviewComponent = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

// the above code changed with compose 
const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default collectionsOverviewContainer;