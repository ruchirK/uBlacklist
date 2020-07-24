import { exportMessages } from '../../locale';

export default exportMessages({
  extensionName: 'uBlacklist',
  extensionDescription: 'Блокирует сайты в поисковой выдаче Google',
  dayjsLocale: 'ru',
  error: 'Ошибка: $1',
  cancelButton: 'Отмена',
  okButton: 'ОК',
  content_singleSiteBlocked: 'uBlacklist заблокировал 1 сайт',
  content_multipleSitesBlocked: 'uBlacklist заблокировал $1 сайт(ов)',
  content_showBlockedSitesLink: 'Показать',
  content_hideBlockedSitesLink: 'Скрыть',
  content_blockSiteLink: 'Заблокировать сайт',
  content_unblockSiteLink: 'Разблокировать сайт',
  popup_blockSiteTitle: 'Заблокировать сайт',
  popup_unblockSiteTitle: 'Разблокировать сайт',
  popup_details: 'Подробности',
  popup_pageURLLabel: 'URL страницы',
  popup_pathDepth: 'глубина',
  popup_addedRulesLabel: 'Правила, которые будут добавлены',
  popup_removedRulesLabel: 'Правила, которые будут удалены',
  popup_blockSiteButton: 'Заблокировать',
  popup_unblockSiteButton: 'Разблокировать',
  options_generalTitle: 'Общие',
  options_blacklistLabel: 'Выбранные сайты не будут отображаться в поисковой выдаче Google',
  options_blacklistHelper:
    'Вы можете использовать [шаблоны совпадения](https://developer.mozilla.org/ru/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) или [регулярные выражения](https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Regular_Expressions).',
  options_importBlacklistButton: 'Импорт из расширения Personal Blocklist',
  options_saveBlacklistButton: 'Сохранить',
  options_importBlacklistDialog_title: 'Импорт из расширения Personal Blocklist',
  options_importBlacklistDialog_helper: 'Вставьте список доменов из Personal Blocklist.',
  options_importBlacklistDialog_importButton: 'Импортировать',
  options_otherSearchEngines: 'Поисковые системы',
  options_otherSearchEnginesDescription:
    'Вы можете использовать расширение с другими поисковыми системами.',
  options_registerSearchEngine: 'Включить',
  options_searchEngineRegistered: 'Включено',
  options_hideBlockLinksLabel: 'Не показывать ссылки "Заблокировать сайт"',
  options_hideControlLabel: 'Скрывать количество заблокированных сайтов и ссылку "Показать"',
  options_syncTitle: 'Синхронизация',
  options_turnOnSync: 'Включить синхронизацию',
  options_turnOffSync: 'Отключить',
  options_syncResult: 'Последняя синхронизация',
  options_syncNever: 'Синхронизация отключена',
  options_syncRunning: 'Синхронизируем...',
  options_syncNowButton: 'Синхронизировать',
  options_subscriptionTitle: 'Подписки',
  options_subscriptionFeature: 'Подписаться на чёрные списки',
  options_subscriptionFeatureDescription:
    'Если Вы добавите подписку, то список блокируемых сайтов будет регулярно загружаться по указанному URL.',
  options_addSubscriptionButton: 'Добавить подписку',
  options_subscriptionNameHeader: 'Название',
  options_subscriptionURLHeader: 'URL',
  options_subscriptionUpdateResultHeader: 'Последнее обновление',
  options_noSubscriptionsAdded: 'Нет подписок',
  options_subscriptionUpdateRunning: 'Обновляем...',
  options_showSubscriptionMenu: 'Показать',
  options_updateSubscriptionNowMenu: 'Обновить',
  options_removeSubscriptionMenu: 'Удалить',
  options_updateAllSubscriptionsNowButton: 'Обновить все подписки',
  options_addSubscriptionDialog_title: 'Добавить подписку',
  options_addSubscriptionDialog_nameLabel: 'Название',
  options_addSubscriptionDialog_urlLabel: 'URL',
  options_addSubscriptionDialog_addButton: 'Добавить',
  clouds_googleDriveSync: 'Синхронизировать с Google Диском',
  clouds_googleDriveSyncTurnedOn: 'Синхронизирован с Google Диском',
  clouds_dropboxSync: 'Синхронизировать с Dropbox',
  clouds_dropboxSyncTurnedOn: 'Синхронизирован с Dropbox',
});
