import React from "react";
import GridView from "react-native-gridview";
import { ClientsListItem } from "../listItems";

const ClientsList = (props) => {
  return (
    <GridView
      data={props.clients}
      itemsPerRow={2}
      itemStyle={styles.gridItem}
      renderItem={(item, sectionID, rowID, itemIndex, itemID) => (
        <ClientsListItem {...item} />
      )}
    />
  );
}

const styles = {
  gridItem: {
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start"
  }
};

export default ClientsList;
