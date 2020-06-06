import { mock, Random } from 'mockjs';

mock(/tabs/, 'get', {
  data: {
    'list|20': [
      {
        id: '@id',
        'type|+1':[
          'hot',
          'food',
        ],
        'label|+1': [
          '热门',
          '食品',
          '百货',
          '手机',
          '水果',
          '电器',
          '医药',
          '运动',
          '母婴',
          '女装',
          '鞋包',
          '男装',
          '内衣',
          '家纺',
          '家具',
          '美妆',
          '家装',
          '车品',
          '电脑',
          '海淘',
        ],
      },
    ],
  },
});