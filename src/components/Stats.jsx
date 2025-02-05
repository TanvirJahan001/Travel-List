import PropTypes from "prop-types";
const Stats = ({ items }) => {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100) || 0;

  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `💼 You have ${
                numItems === 0
                  ? "Start adding some items to your packing list!"
                  : `${numItems} ${
                      numItems === 1 ? "item" : "items"
                    } on your list, and you already packed ${numPackedItems} (${percentage}%)`
              }`}
        </em>
      </footer>
    </div>
  );
};

Stats.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Stats;
