import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';
import {useRefState} from 'parsec-hooks'

// console.log(useRefState) // 在这里使用就ok


export default () => {
  console.log(useRefState) //在这里使用不会把parsec-hooks打包进去
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
      </View>
    </View>
  );
};
