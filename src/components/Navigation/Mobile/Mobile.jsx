import React, {useState} from 'react'
import Filters from '../../Filters/Filters';
import Search from '../../Search/Search';
import styles from '../Navigation.module.scss'

const Mobile = (props) => {
    const {setSearchText, setBeers, searchBeers, wholeList} = props;
    const [isOpen,setIsOpen] = useState(false)

    const openNav = () => {
        setIsOpen(!isOpen);
      }

    return (
        <div className={styles.navMob}  className={styles.open}>
            <span className={styles.openbtn} onClick={openNav}>&#9776;</span>
            
            {isOpen && <div className={styles.sideNav} className={styles.open}>
                            <span className={styles.closebtn} onClick={openNav}>X</span>
                            <h1>Punk API</h1>
                            <Search setSearchText={setSearchText} searchBeers={searchBeers}/>
                            <Filters setBeers={setBeers} wholeList={wholeList}/>
                        </div>}
        </div>
    )
}

export default Mobile
