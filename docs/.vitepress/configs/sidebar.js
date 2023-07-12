export default {
  // 杂文
  '/essay/': createEssay(),
  // css
  '/css/': createCss(),
  '/project/': createProject()
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
      items: [
        {
          text: 'Introduction',
          collapsed: false,
          items: [{ text: '这章讲了什么?', link: '/css/introduction' },
          { text: '常用属性', link: '/css/attributes' },
          { text: '盒模型', link: '/css/box-model' },
          { text: '布局', link: '/css/layout' },
          { text: '函数', link: '/css/function' },
          { text: '变量计算组合', link: '/css/val' },
          { text: '选择器', link: '/css/select' },
          { text: '背景和渐变', link: '/css/background' },
          { text: '遮罩', link: '/css/mask' },
          { text: '阴影与滤镜', link: '/css/shadow' },
          { text: '变换与动画', link: '/css/transform' },]
        }
      ]
    },
  ];
}


function createProject() {
  return [
    {
      items: [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: '这章讲了什么?', link: '/project/introduction' },
            { text: '什么是工程化', link: '/project/project' },
            { text: 'AST抽象语法树', link: '/project/ast' },
            { text: 'npm依赖', link: '/project/npm' },
            { text: 'package与Readme', link: '/project/other/package' },

          ]
        },
        {
          text: 'webpack',
          collapsed: false,
          items: [
            { text: '构建优化', link: '/project/webpack/build' },

          ]
        }
      ]
    }
  ];
}
