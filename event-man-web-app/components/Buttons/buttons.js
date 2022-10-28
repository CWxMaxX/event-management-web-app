export const PrimaryButton = ({ title, onClick, disabled, type }) => {
  return (
    <button
      className={`m-3  !my-1 min-w-[200px] p-2 px-8 rounded-3xl primary-btn ${
        disabled ? "disabled-btn" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};
export const SecondaryButton = ({ title, onClick, disabled, type }) => {
  return (
    <button
      className={`m-3 !my-1 min-w-[200px] p-2 px-8 rounded-3xl secondary-btn ${
        disabled ? "disabled-btn" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};

export const CancelButton = ({ title, onClick, disabled, type }) => {
  return (
    <button
      className={` m-3 !my-1 min-w-[200px] p-2 px-8 rounded-3xl cancel-btn ${
        disabled ? "disabled-btn" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {title}
    </button>
  );
};
