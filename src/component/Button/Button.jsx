import PropTypes from "prop-types";

const Button = ({ buttonName, border, style, divStyle, spinner }) => {
  return (
    <>
      {border ? (
        <div
          className={
            "relative inline-block  p-[2px] overflow-hidden text-white rounded-lg bg-gradient-to-r from-[#BED8FF] to-[#3D96FF] transition-transform duration-200 hover:scale-105" +
            divStyle
          }
        >
          <button
            className={
              `flex justify-around gap-3 bg-[#080719] shadow-11xl shadow-[#3D96FF] rounded-lg px-[23px] py-[6px] font-normal text-base w-full h-full ` +
              style
            }
          >
            {spinner ? (
              <div
                className={`${
                  spinner
                    ? "animate-spin  w-6 h-6 rounded-full border-t border-blue-700"
                    : ""
                }`}
              />
            ) : (
              ""
            )}
            {spinner ? "Sending..." : buttonName}
          </button>
        </div>
      ) : (
        <div>
          <button
            className={
              "border border-[#505362] text-white   rounded-lg px-[25px] py-[8px] font-normal text-base transition-transform duration-200 hover:scale-105" +
              style
            }
          >
            {buttonName}
          </button>
        </div>
      )}
    </>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  divStyle: PropTypes.string.isRequired,
  border: PropTypes.bool,
  spinner: PropTypes.bool,
};

Button.defaultProps = {
  border: false,
  spinner: false,
  style: "",
  divStyle: "",
};

export default Button;
