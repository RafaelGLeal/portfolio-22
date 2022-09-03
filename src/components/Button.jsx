import { t } from "i18next";

const Button = ({ btnName, btnClass }) => {
  return (
    <button className={`btn-${btnClass}`}>{`${
      btnName === "project" ? t("buttons.projects") : t("buttons.contact")
    }`}</button>
  );
};

export default Button;
