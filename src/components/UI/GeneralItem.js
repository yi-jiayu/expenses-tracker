import React from "react";
import PropTypes from "prop-types";
import { formatNumber } from "../../helpers/common";
import { List, Avatar, Icon } from "antd";

const GeneralItem = ({ item, removeItem }) => (
  <List.Item
    actions={[
      <Icon key="delete" type="delete" onClick={removeItem(item.id)} />
    ]}
    style={{ padding: 10, marginBottom: 6, borderRadius: 10, boxShadow: " 0px 3px 16px 0px rgba(0,0,0,0.16)" }}
  >
    <List.Item.Meta
      avatar={<Avatar size="large" icon="dollar" />}
      title={item.source}
      style={{ alignItems: "center" }}
    />

    <div>{`S$ ${formatNumber(item.amount)}`}</div>

  </List.Item>
);

GeneralItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default GeneralItem;