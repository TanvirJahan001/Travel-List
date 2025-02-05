import PropTypes from "prop-types";
import "../index.css";

const Item = ({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <div className="item">
      <li>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => onToggleItem(id)}
        />
        <span className={packed ? "packed" : ""}>
          {quantity} {description}
        </span>
        <button className="delete-btn" onClick={() => onDeleteItem(id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  packed: PropTypes.bool.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onToggleItem: PropTypes.func.isRequired,
};

export default Item;
