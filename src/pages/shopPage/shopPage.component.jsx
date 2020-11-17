import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
// import {createStructuredSelector} from 'reselect';

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
// import CollectionPage from "../collection/collection.component";
import CollectionPageContainer  from '../collection/collection.container';

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
// import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors'; //selectIsCollectionFetching

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const {fetchCollectionsStartAsync}= this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match} = this.props; //isCollectionFetching,isCollectionLoaded
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          // render={props => (
          //   <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          // )}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={props => (
          //   <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
          // )}
          component ={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   //  isCollectionFetching:selectIsCollectionFetching,
//    isCollectionLoaded : selectIsCollectionLoaded
// })

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync:() => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
