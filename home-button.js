/* home-button.js — drop-in floating nav button
   Usage: add <script src="./home-button.js"></script> before </body> on any page.
   Auto-hides itself on index.html.
  */
(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path === 'index.html') return;

      var css = '\
      #hb-root{position:fixed;top:18px;left:18px;z-index:99999;font-family:ui-monospace,"JetBrains Mono",Menlo,monospace}\
      #hb-toggle{display:flex;align-items:center;gap:8px;background:rgba(15,22,18,.92);color:#dde7df;\
        border:1px solid #2a3a30;padding:9px 14px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;\
        cursor:pointer;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:.18s;\
        box-shadow:0 4px 18px rgba(0,0,0,.45)}\
      #hb-toggle:hover{border-color:#ffb547;color:#ffb547}\
      #hb-toggle .arr{font-size:14px;line-height:1}\
      #hb-menu{position:absolute;top:calc(100% + 6px);left:0;background:rgba(15,22,18,.96);\
        border:1px solid #2a3a30;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);\
        min-width:240px;display:none;box-shadow:0 8px 32px rgba(0,0,0,.5)}\
      #hb-menu.open{display:block}\
      #hb-menu a{display:block;padding:11px 16px;color:#dde7df;text-decoration:none;font-size:11px;\
        letter-spacing:.10em;text-transform:uppercase;border-bottom:1px solid #1f2a23;transition:.12s}\
      #hb-menu a:last-child{border-bottom:none}\
      #hb-menu a:hover{background:#161e1a;color:#ffb547;padding-left:20px}\
      #hb-menu a.cur{color:#9fffb0;background:#101a14}\
      #hb-menu a.cur::before{content:"● ";color:#9fffb0}\
      #hb-menu .grp{padding:8px 16px 6px;font-size:9px;letter-spacing:.18em;color:#4f5b54;\
        text-transform:uppercase;border-bottom:1px solid #1f2a23;background:#0c1310}\
      @media print{#hb-root{display:none}}';

      var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);

  var pages = [
{ g: 'Home' },
{ f: 'index.html', t: '↩ Portfolio Home' },
{ g: 'Tools' },
{ f: 'v10-briefing.html', t: 'V10 Day-15 Briefing' },
{ f: 'war-game.html', t: 'War Game Simulator' },
{ f: 'dashboard.html', t: 'Strategic Dashboard' },
{ f: 'weapons-explorer.html', t: 'Weapons Explorer' },
{ f: 'theater-map.html', t: 'Theater Map' },
{ f: 'escalation-simulator.html', t: 'Escalation Simulator' }
  ];

  var root = document.createElement('div'); root.id = 'hb-root';
  var btn = document.createElement('button'); btn.id = 'hb-toggle';
  btn.innerHTML = '<span class="arr">⌂</span><span>Menu</span>';
  var menu = document.createElement('div'); menu.id = 'hb-menu';

  pages.forEach(function (p) {
        if (p.g) {
      var g = document.createElement('div'); g.className = 'grp'; g.textContent = p.g;
      menu.appendChild(g);
        } else {
      var a = document.createElement('a'); a.href = './' + p.f; a.textContent = p.t;
      if (p.f === path) a.className = 'cur';
      menu.appendChild(a);
        }
  });

  btn.addEventListener('click', function (e) {
        e.stopPropagation(); menu.classList.toggle('open');
  });
  document.addEventListener('click', function () { menu.classList.remove('open'); });

  root.appendChild(btn); root.appendChild(menu);
  document.body.appendChild(root);
})();
