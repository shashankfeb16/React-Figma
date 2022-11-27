import React, { useContext } from 'react'
import { Switch } from '@chakra-ui/react'
import styles from './App.module.css'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
    const {toggleTheme,theme} = useContext(ThemeContext)
    return (
        <div className={styles.navbar}>
            <h2>Dashboard</h2>
            <h2>{`${theme=="light"? "Make dark" : "Make light"}`}</h2>
            <Switch size='md' onChange={toggleTheme} />
           
        </div>
    )
}

export default Navbar