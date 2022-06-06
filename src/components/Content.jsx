import React from 'react'
import styles from './App.module.css'
import { Avatar, AvatarBadge, AvatarGroup, WrapItem } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.upper}>
        <p>Active users </p>
        <p>for august 2019</p>
      </div>
      <br />
      <div className={styles.middle}>
        <WrapItem>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </WrapItem>
        <p>Nrupul dev</p>
      </div>
      <Progress value={70} size='xs' colorScheme='green' marginLeft="10px" />
      <div className={styles.lower}>
        <p>Profesional level 15</p>
        <p>4723 points</p>
      </div>
      <br />
      <div className={styles.middle}>
        <WrapItem>
          <Avatar name='Dan Abrahmov' src='https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
        </WrapItem>
        <p>Sandhya</p>
      </div>
      <Progress value={50} size='xs' colorScheme='blue' marginLeft="10px" />
      <div className={styles.lower}>
        <p>Profesional level 11</p>
        <p>2339 points</p>
      </div>
      <br />
      <div className={styles.middle}>
        <WrapItem>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/ryan-florence' />
        </WrapItem>
        <p>Elon tusk</p>
      </div>
      <Progress value={25} size='xs' colorScheme='pink' marginLeft="10px" />
      <div className={styles.lower}>
        <p>Profesional level 6</p>
        <p>1884 points</p>
      </div>

    </div>
  )
}

export default Content