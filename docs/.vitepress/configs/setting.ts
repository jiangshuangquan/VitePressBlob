// typing --------------------------------------------------------------------

export interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mastodon'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string };

// setting --------------------------------------------------------------------

export const github = 'https://github.com/jiangshuangquan/VitePressBlob';

export function createSocialLinks(): SocialLink[] {
  return [
    { icon: 'github', link: github },
  ];
}

export function createAlgolia() {
  return {
    apiKey: 'ca8d33e992f4473084fcfc58586ac9f3',
    indexName: 'vitepressblob',
    // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
    appId: 'RX43DBV9RM',
    placeholder: '请输入关键词',
    translations: {
      button: {
        buttonText: '搜索文档'
      }
    }
  };
}
