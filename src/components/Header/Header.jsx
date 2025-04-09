import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes["logo"]}>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="A table full of delicious food!"
        />
      </div>
    </>
  );
};

export default Header;
