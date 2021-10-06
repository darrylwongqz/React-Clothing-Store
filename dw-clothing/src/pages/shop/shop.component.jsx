import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    //destructure out the collections array
    const { collections } = this.state;
    //map over the collections array to print out all the different collections in the SHOP_DATA
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          //first level id --> mapping over the top level collections
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
