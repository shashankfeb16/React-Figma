import React from 'react'
import styles from './App.module.css'
import Content from './Content'
import {ImStatsBars} from 'react-icons/im';
import {BsBoxArrowRight} from 'react-icons/bs';
import {AiOutlineDropbox} from 'react-icons/ai';
import {BiMessageDetail} from 'react-icons/bi';
import {AiFillFileText} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';

const Sidebar = () => {
    return (
       <div className={styles.main}>
            <div className={styles.sidebar}>
                <ImStatsBars className={styles.icons}></ImStatsBars>
                <br />
                <BsBoxArrowRight  className={styles.icons}></BsBoxArrowRight>
                <br />
                <AiOutlineDropbox  className={styles.icons}></AiOutlineDropbox>
                <br />
                <BiMessageDetail  className={styles.icons}></BiMessageDetail>
                <br />
                <AiFillFileText  className={styles.icons}></AiFillFileText>
                <br />
                <FiSettings  className={styles.icons}></FiSettings>
            </div>
            <Content></Content>
       </div>

    )
}

export default Sidebar