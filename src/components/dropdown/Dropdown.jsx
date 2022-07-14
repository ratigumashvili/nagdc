import "./dropdown.scss";

const Dropdown = ({ label, appended, value, options, onChange, prepended }) => {
  return (
    <div className="dropdown">
      <label>
        {label}
        {appended}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
        {prepended}
      </label>
    </div>
  );
};

export default Dropdown;
