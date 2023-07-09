export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "writer_manual": "Writer",
    "compose_and_deliver": "Compose and Deliver",
    "compose_online": "Compose Online" ,
    "email_settings": "Email Settings" ,
    "list_settings": "List Settings" ,
    "payment_settings": "Payment Settings" ,
    "telegram_settings": "Telegram Settings" ,
    "other_topics": "Other Topics",
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
    "plugins": "Plugins",
    "obsidian_plugin": "Obsidian Plugin",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "writer_manual": "作者手册",
    "compose_and_deliver": "撰写与推送",
    "compose_online": "在线撰写" ,
    "email_settings": "邮件设置" ,
    "list_settings": "列表设置" ,
    "payment_settings": "支付设置" ,
    "telegram_settings": "Telegram 设置" ,
    "other_topics": "其他主题",
    "faq": "常见问题",
    "troubleshooting": "故障排除",
    "plugins": "插件",
    "obsidian_plugin": "Obsidian 插件",
  },
  "ja": {
    "home": "ホーム",
    "tutorial": "チュートリアル",
    "writer_manual": "作者マニュアル",
    "compose_and_deliver": "作成と投稿",
    "compose_online": "オンライン作成" ,
    "email_settings": "メール設定" ,
    "list_settings": "リスト設定" ,
    "payment_settings": "支払い設定" ,
    "telegram_settings": "Telegram設定" ,
    "other_topics": "その他",
    "faq": "よくある質問",
    "troubleshooting": "トラブルシューティング",
    "plugins": "プラグイン",
    "obsidian_plugin": "Obsidian プラグイン",
  }
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
