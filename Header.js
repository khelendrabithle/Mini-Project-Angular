import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import Classes from '../../Components/Layout/Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={Classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div Classes={Classes['main-image']}>
            <img src={mealsImage} alt='the table fool of delicious food'/>
        </div>
    </Fragment>
    );
};

export default Header;
