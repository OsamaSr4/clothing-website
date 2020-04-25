import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import  ColletionPreview  from '../collection-preview/collection-preview.component';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';


import './collections-overview.component';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview '>

        {collections.map(({ id, ...othercollectionProps }) => (
            <ColletionPreview key={id} {...othercollectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect (mapStateToProps)(CollectionsOverview); 