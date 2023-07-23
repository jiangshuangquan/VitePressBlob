export default {
  // 杂文
  '/essay/': createEssay(),
  // css
  '/base/': createCss(),
  '/project/': createProject(),
  '/source-code/': createSourceCode()
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
            { text: '这章讲了什么?', link: '/essay/introduction/introduction' },
            { text: 'markdown', link: '/essay/introduction/markdown' },
            { text: 'vp-md', link: '/essay/introduction/vp-md' },
            { text: '安全', link: '/essay/introduction/safety' },
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
          items: [{ text: '这章讲了什么?', link: '/base/css/introduction' },
          { text: '常用属性', link: '/base/css/attributes' },
          { text: '盒模型', link: '/base/css/box-model' },
          { text: '布局', link: '/base/css/layout' },
          { text: '函数', link: '/base/css/function' },
          { text: '变量计算组合', link: '/base/css/val' },
          { text: '选择器', link: '/base/css/select' },
          { text: '背景和渐变', link: '/base/css/background' },
          { text: '遮罩', link: '/base/css/mask' },
          { text: '阴影与滤镜', link: '/base/css/shadow' },
          { text: '变换与动画', link: '/base/css/transform' },]
        },
        {
          text: 'css进阶',
          collapsed: false,
          items: [
            { text: '背景渐变', link: '/base/css-advanced/background' },
            { text: 'mask遮罩', link: '/base/css-advanced/mask' },

          ]
        },
        {
          text: 'ts',
          collapsed: false,
          items: [
            { text: 'ts介绍', link: '/base/ts/introduction' },
            { text: 'Decorators装饰器', link: '/base/ts/decorators' },
            { text: 'vue-property-decorator', link: '/base/ts/vue-property-decorator' },
            { text: 'vue-class-component', link: '/base/ts/vue-class-component' },
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
            { text: '单元测试', link: '/project/other/jest' },
            { text: 'tsconfig.json', link: '/project/other/tsconfig' },
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

function createSourceCode() {
  return [
    {
      items: [
        {
          text: 'jq',
          collapsed: false,
          items: [
            { text: 'xhr', link: '/source-code/jq/xhr' },
            { text: 'attribute', link: '/source-code/jq/attribute' },
            { text: 'core', link: '/source-code/jq/core' },
            { text: 'jq中的regular', link: '/source-code/jq/regular' },
            { text: 'css', link: '/source-code/jq/css' },
            { text: 'trigger', link: '/source-code/jq/trigger' },
          ]
        },
      ]
    }
  ];
}
