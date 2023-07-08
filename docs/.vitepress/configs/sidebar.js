export default {
  // 杂文
  '/essay/': createEssay(),
  // css
  '/css/': createCss()
}


/**
 * @description 杂文 sidebar
 */
function createEssay() {
  return [
    {
      items: [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: '这章讲了什么?', link: '/essay/introduction' },
            { text: 'markdown', link: '/essay/markdown' },
            { text: 'vp-md', link: '/essay/vp-md' },

          ]
        }
      ]
    }
  ];
}

/**
 * @description css sidebar
 */
function createCss() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: '这章讲了什么?', link: '/css/introduction' },
        { text: '常用属性', link: '/css/attributes' },
        { text: '盒模型', link: '/css/box-model' },
        { text: '布局', link: '/css/layout' }
      ]
    },
  ];
}
