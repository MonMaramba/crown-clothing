import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionsOverView from "./collections-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverView)
);
// compose method from redux can replace the last line with
// const CollectionsOverviewContainer = compose(
//     connect(mapStateToProps),
//      WithSpinner
//  )(CollectionsOverview);

export default CollectionsOverviewContainer;
