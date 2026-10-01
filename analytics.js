/* Заполнить реальными идентификаторами после регистрации сайта. */
(() => {
 const c = window.ANALYTICS_CONFIG || {};
 window.trackLearningEvent = (name) => {
   document.dispatchEvent(new CustomEvent('learning:event', {detail: {name}}));
   if (c.mailId && window._tmr) window._tmr.push({id:c.mailId,type:'reachGoal',goal:name});
   // Адаптер второго счетчика добавляется после регистрации.
 };
})();
