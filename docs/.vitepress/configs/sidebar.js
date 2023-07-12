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
          text: 'css基础',
          collapsed: false,
          items: [{ text: '这章讲了什么?', link: '/css/base/introduction' },
          { text: '常用属性', link: '/css/base/attributes' },
          { text: '盒模型', link: '/css/base/box-model' },
          { text: '布局', link: '/css/base/layout' },
          { text: '函数', link: '/css/base/function' },
          { text: '变量计算组合', link: '/css/base/val' },
          { text: '选择器', link: '/css/base/select' },
          { text: '背景和渐变', link: '/css/base/background' },
          { text: '遮罩', link: '/css/base/mask' },
          { text: '阴影与滤镜', link: '/css/base/shadow' },
          { text: '变换与动画', link: '/css/base/transform' },]
        },
        {
          text: 'css进阶',
          collapsed: false,
          items: [
            { text: '背景渐变?', link: '/css/advanced/background' },
          ]
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
            { text: '这章讲了什么?', link: '/project/other/introduction' },
            { text: '什么是工程化', link: '/project/other/project' },
            { text: 'AST抽象语法树', link: '/project/other/ast' },
            { text: 'npm依赖', link: '/project/other/npm' },
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
