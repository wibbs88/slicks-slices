import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a customer Sidebar
export default function Sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>&#128293;</strong>)
        .child(
          S.editor()
            .schemaType('storeSettings')
            // Make a document id
            .documentId('downtown')
        ),
      // Add remainder of original sidebar
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
