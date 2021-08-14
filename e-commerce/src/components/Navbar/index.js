import styles from './styles.module.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Text} from '@chakra-ui/react';
import {useBasket} from '../../Contexts/BasketContext'
import {useFavorites} from '../../Contexts/FavoritesContext'

const Navbar = () => {

  const {items: basketItems} = useBasket()
  const {items: favoritesItems} = useFavorites()

  return (
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/"><Text fontWeight="bold"
                               fontSize="2xl">e-Commerce</Text></Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/categories"><Text ml={10} fontSize={'xl'}
                                           fontWeight={'semibold'}>Categories</Text></Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {
            favoritesItems?.length > 0 && (
                <Link to="/favorites">
                  <Button variant="solid" colorScheme="pink">
                    Favorites ({favoritesItems.length})
                  </Button>
                </Link>
            )
          }
          {
            basketItems.length > 0 && (
                <Link to="/basket">
                  <Button variant="solid" colorScheme="pink">
                    Basket ({basketItems.length})
                  </Button>
                </Link>
            )
          }
        </div>
      </nav>
  );
};

export default Navbar;