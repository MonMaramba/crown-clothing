import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

//import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector";

import CollectionPageContainer from "../collection/collection-container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop-actions";

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  // 2nd parameter of useEffect[fetchCollectionsStartAsync], is necessary so that it does not get
  //re-triggered when parent component(App.js) renders for the first time.
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);