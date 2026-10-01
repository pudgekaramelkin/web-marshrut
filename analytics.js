/* Заполнить реальными идентификаторами после регистрации сайта. */
(() => {
 const c = window.ANALYTICS_CONFIG || {};
 if (c.ramblerId) {
   (window._top100q = window._top100q || []).push(function () {
     window.top100Counter = new top100({
       project: Number(c.ramblerId),
       attributes_dataset: ['learning-block']
     });
     window.top100Counter.drawLogoTo('top100_widget');
   });
   const script = document.createElement('script');
   script.async = true;
   script.src = 'https://st.top100.ru/top100/top100.js';
   document.head.appendChild(script);
 }
 window.trackLearningEvent = (name) => {
   document.dispatchEvent(new CustomEvent('learning:event', {detail: {name}}));
   if (c.mailId && window._tmr) window._tmr.push({id:c.mailId,type:'reachGoal',goal:name});
   if (c.ramblerId && window.top100Counter) {
     window.top100Counter.trackEvent(name, {page: location.pathname});
   }
 };
})();
