// Cheongju Agricultural High School Dulle-gil Project - JS Core
// Handles routing, IndexedDB storage, image compression, photo missions, likes, SVG map rendering and Instagram slideshow.
// Optimized for zero lag by replacing Lucide icon scanning with raw Emojis.

// 1. Trails Data with Photo Missions
const TRAILS = [
  { id: 1, name: '첫걸음길', desc: '청농인으로서의 첫 발걸음을 딛는 설렘이 가득한 길', icon: 'footprints', color: 'emerald', mission: '신입생의 설렘을 가득 담아, 내딛는 첫 발자국이나 신발이 돋보이는 컷 촬영하기!' },
  { id: 2, name: '100주년길', desc: '청주농업고등학교의 깊은 역사와 전통을 기념하는 길', icon: 'milestone', color: 'teal', mission: '학교의 100년 역사를 상징하는 기념비나 역사관 건물을 멋지게 찍어보세요!' },
  { id: 3, name: '독립운동길', desc: '나라를 위해 헌신한 선배님들의 숭고한 나라사랑 정신을 기리는 길', icon: 'flag', color: 'red', mission: '독립운동 공헌 비석이나 태극기가 함께 나오는 숭고하고 경건한 순간 찍기!' },
  { id: 4, name: '농원관길', desc: '배움과 도전이 살아 숨 쉬는 농원관 주변의 길', icon: 'graduation-cap', color: 'indigo', mission: '우리의 배움터 농원관 건물과 하늘이 조화롭게 어우러진 전경 담기!' },
  { id: 5, name: '과수원길', desc: '계절마다 달콤한 열매가 맺히는 과수원의 풍요로움을 느끼는 길', icon: 'apple', color: 'amber', mission: '계절에 따라 무럭무럭 익어가는 실습 과일이나 신선한 나뭇잎 접사 촬영하기!' },
  { id: 6, name: '개나리길', desc: '봄이면 노란 개나리가 흐드러지게 피어나는 아름다운 길', icon: 'flower2', color: 'yellow', mission: '봄날 샛노랗게 활짝 피어난 개나리 꽃터널 속에서 따뜻한 노란빛 사진 찍기!' },
  { id: 7, name: '산목련길', desc: '하얀 산목련 꽃망울이 우아하게 반겨주는 길', icon: 'flower', color: 'slate', mission: '우아하고 새하얗게 꽃망울을 터트린 산목련 꽃을 예쁘게 포착하기!' },
  { id: 8, name: '숲속오솔길', desc: '도심 속 울창한 나무들이 내뿜는 피톤치드를 마시며 걷는 힐링 길', icon: 'trees', color: 'green', mission: '울창한 나뭇잎 틈새로 쏟아지는 눈부신 햇살(빛내림) 풍경 찍기!' },
  { id: 9, name: '노랑단풍길', desc: '가을철 황금빛 단풍 터널이 장관을 이루는 낭만적인 길', icon: 'leaf', color: 'orange', mission: '바닥에 떨어진 샛노란 단풍잎이나 알록달록한 낙엽을 주워 감성 샷 연출하기!' },
  { id: 10, name: '소나무길', desc: '사계절 푸른 소나무처럼 변함없는 기상을 배울 수 있는 길', icon: 'tree-pine', color: 'emerald', mission: '하늘을 찌를 듯 꼿꼿이 곧게 자라난 사계절 푸른 소나무 기상 담기!' },
  { id: 11, name: '벚꽃길', desc: '봄바람에 휘날리는 벚꽃 잎이 눈부신 화사한 길', icon: 'sparkles', color: 'pink', mission: '봄바람에 눈처럼 화사하게 날리는 벚꽃 비와 아름다운 꽃송이 촬영하기!' },
  { id: 12, name: '논두렁길', desc: '벼가 자라나는 들판의 정겨움과 생명력을 가까이서 느끼는 길', icon: 'wheat', color: 'lime', mission: '계절의 흐름에 따라 변화하는 푸른 논밭 혹은 황금빛 이삭 풍경 찍기!' },
  { id: 13, name: '해솔길', desc: '소나무 사이로 비치는 맑은 햇살을 맞으며 걷는 길', icon: 'sun', color: 'yellow', mission: '우거진 소나무 나뭇가지 사이로 걸쳐 있는 영롱한 해를 배경으로 찰칵!' },
  { id: 14, name: '미래농업길', desc: '스마트 농업과 첨단 생명산업을 이끌어갈 청농의 미래를 꿈꾸는 길', icon: 'cpu', color: 'blue', mission: '최첨단 스마트 온실이나 최신 농업 설비를 배경으로 과학공학 농업의 모습 담기!' }
];

// Emojis for the trail list card categories per user feedback
const TRAIL_ICONS = {
  footprints: `<span class="text-2xl select-none">👣</span>`,
  milestone: `<span class="text-2xl select-none">💯</span>`,
  flag: `<span class="text-2xl select-none">🙌</span>`,
  'graduation-cap': `<span class="text-2xl select-none">🏫</span>`,
  apple: `<span class="text-2xl select-none">🍎</span>`,
  flower2: `<span class="text-2xl select-none">🌼</span>`,
  flower: `<span class="text-2xl select-none">💮</span>`,
  trees: `<span class="text-2xl select-none">🌳</span>`,
  leaf: `<span class="text-2xl select-none">🍂</span>`,
  'tree-pine': `<span class="text-2xl select-none">🌲</span>`,
  sparkles: `<span class="text-2xl select-none">🌸</span>`,
  wheat: `<span class="text-2xl select-none">🧑‍🌾</span>`,
  sun: `<span class="text-2xl select-none">💨</span>`,
  cpu: `<span class="text-2xl select-none">🤖</span>`
};

const SVG_ICONS = {
  heartFilled: `<svg class="w-3.5 h-3.5 fill-rose-500 text-rose-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  heartOutline: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  trash: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
  zoomIn: `<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>`,
  heartFilledLarge: `<svg class="w-4 h-4 text-rose-500 fill-rose-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  image: `<svg class="w-3.5 h-3.5 mr-1 fill-rose-500 text-rose-500 inline-block mb-0.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
};

// 2. IndexedDB Helper Class
class DulleDB {
  constructor() {
    this.dbName = 'CheongjuAgriDullegilDB';
    this.dbVersion = 1;
    this.db = null;
  }

  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = (event) => {
        console.error('IndexedDB open error:', event.target.error);
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('posts')) {
          const store = db.createObjectStore('posts', { keyPath: 'id' });
          store.createIndex('trailId', 'trailId', { unique: false });
        }
      };
    });
  }

  // Add a post
  addPost(post) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      const request = store.add(post);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Get all posts
  getAllPosts() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readonly');
      const store = transaction.objectStore('posts');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Get posts for a specific trail
  getPostsByTrail(trailId) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readonly');
      const store = transaction.objectStore('posts');
      const index = store.index('trailId');
      const request = index.getAll(IDBKeyRange.only(Number(trailId)));

      request.onsuccess = () => {
        const sorted = request.result.sort((a, b) => b.id - a.id);
        resolve(sorted);
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Get a single post by id
  getPost(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readonly');
      const store = transaction.objectStore('posts');
      const request = store.get(Number(id));

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // Update like count
  likePost(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      const getRequest = store.get(Number(id));

      getRequest.onsuccess = () => {
        const post = getRequest.result;
        if (post) {
          post.likes = (post.likes || 0) + 1;
          const updateRequest = store.put(post);
          updateRequest.onsuccess = () => resolve(post.likes);
          updateRequest.onerror = () => reject(updateRequest.error);
        } else {
          reject(new Error('게시물을 찾을 수 없습니다.'));
        }
      };

      getRequest.onerror = () => reject(getRequest.error);
    });
  }

  // Delete a post by id
  deletePost(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      const request = store.delete(Number(id));

      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }
}

// Instantiate Database
const db = new DulleDB();

// 3. App State & Router
let currentTrailId = null;
let currentPosts = [];
let allPostsCache = [];
let instagramIntervalId = null;

// Initialize Page Load
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await db.init();
    console.log('Database initialized successfully.');
    
    // Setup Router & Event Listeners
    window.addEventListener('hashchange', handleRouting);
    
    // Initial Route parsing
    handleRouting();
  } catch (error) {
    alert('브라우저 데이터베이스를 초기화할 수 없습니다. 시크릿 모드이거나 브라우저 설정에서 데이터 저장이 비활성화되었는지 확인하세요.');
  }
});

// Routing Controller
async function handleRouting() {
  const hash = window.location.hash;

  // Clear modal states on route change
  closeWriteModal();
  closeLightbox();
  closeDeleteModal();

  if (hash.startsWith('#trail-')) {
    const idStr = hash.replace('#trail-', '');
    const trailId = parseInt(idStr);
    
    if (trailId >= 1 && trailId <= 14) {
      currentTrailId = trailId;
      showDetailView(trailId);
      return;
    }
  }

  // Default: Home View
  currentTrailId = null;
  showHomeView();
}

// 4. View Rendering
// Home View Renderer
async function showHomeView() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('detail-view').classList.add('hidden');
  
  // Clear any existing slideshow timer
  if (instagramIntervalId) {
    clearInterval(instagramIntervalId);
    instagramIntervalId = null;
  }

  // Refresh Counts
  allPostsCache = await db.getAllPosts();
  
  const countMap = {};
  TRAILS.forEach(t => countMap[t.id] = 0);
  allPostsCache.forEach(post => {
    if (countMap[post.trailId] !== undefined) {
      countMap[post.trailId]++;
    }
  });

  // Render Grid
  const gridContainer = document.getElementById('trail-grid-container');
  gridContainer.innerHTML = '';
  
  TRAILS.forEach(trail => {
    const count = countMap[trail.id] || 0;
    const card = document.createElement('div');
    card.className = `bg-white rounded-2xl border border-emerald-100 hover:border-${trail.color}-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer`;
    card.onclick = () => window.location.hash = `#trail-${trail.id}`;
    
    // Tailwind dynamic color styling mappings
    const colorClasses = {
      emerald: { bg: 'bg-emerald-50 text-emerald-600', hoverBg: 'group-hover:bg-emerald-600' },
      teal: { bg: 'bg-teal-50 text-teal-600', hoverBg: 'group-hover:bg-teal-600' },
      red: { bg: 'bg-red-50 text-red-600', hoverBg: 'group-hover:bg-red-600' },
      indigo: { bg: 'bg-indigo-50 text-indigo-600', hoverBg: 'group-hover:bg-indigo-600' },
      amber: { bg: 'bg-amber-50 text-amber-600', hoverBg: 'group-hover:bg-amber-600' },
      yellow: { bg: 'bg-yellow-50 text-yellow-600', hoverBg: 'group-hover:bg-yellow-600' },
      slate: { bg: 'bg-slate-150 text-slate-600', hoverBg: 'group-hover:bg-slate-600' },
      green: { bg: 'bg-green-50 text-green-600', hoverBg: 'group-hover:bg-green-600' },
      orange: { bg: 'bg-orange-50 text-orange-600', hoverBg: 'group-hover:bg-orange-600' },
      pink: { bg: 'bg-pink-50 text-pink-600', hoverBg: 'group-hover:bg-pink-600' },
      lime: { bg: 'bg-lime-50 text-lime-600', hoverBg: 'group-hover:bg-lime-600' },
      blue: { bg: 'bg-blue-50 text-blue-600', hoverBg: 'group-hover:bg-blue-600' },
    };

    const style = colorClasses[trail.color] || colorClasses.emerald;
    const trailIconSvg = TRAIL_ICONS[trail.icon] || '';
    
    // Renders ONLY the code, name, icon, badge count and arrow link. (Removed description per feedback)
    card.innerHTML = `
      <div class="space-y-4">
        <!-- Card Header -->
        <div class="flex items-center justify-between">
          <span class="text-xs font-extrabold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg tracking-wider">
            코스 ${String(trail.id).padStart(2, '0')}
          </span>
          <span class="text-xs font-extrabold ${count > 0 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'} px-3 py-1 rounded-full shadow-sm">
            사진 ${count}장
          </span>
        </div>
        
        <!-- Icon & Title -->
        <div class="flex items-center space-x-3">
          <div class="p-2 rounded-xl ${style.bg} group-hover:bg-cjgreen-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
            ${trailIconSvg}
          </div>
          <h4 class="font-extrabold text-lg text-slate-900 group-hover:text-cjgreen-700 transition-colors duration-300 cute-font">${trail.name}</h4>
        </div>
      </div>

      <!-- Arrow action -->
      <div class="pt-4 border-t border-slate-50 mt-4 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cjgreen-600 transition-colors duration-300">
        <span>추억 보러가기 🐾</span>
        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </div>
    `;

    gridContainer.appendChild(card);
  });

  // Update total badge
  document.getElementById('total-photos-badge').innerHTML = `${SVG_ICONS.image}지금까지 모인 추억 ${allPostsCache.length}장`;
  
  // Render Dynamic Circular SVG Map
  renderSVGMap();

  // Run Slideshow
  startInstagramSlideshow();

  // Scroll smoothly to top when returning home
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Circular SVG Map Renderer
function renderSVGMap() {
  const svg = document.getElementById('map-svg');
  if (!svg) return;
  
  // Clear any existing dynamically added nodes (to prevent duplication)
  const existingNodes = svg.querySelectorAll('.dynamic-node');
  existingNodes.forEach(n => n.remove());
  
  const cx = 160;
  const cy = 160;
  const r = 110;
  
  TRAILS.forEach((trail, index) => {
    // 6 o'clock is Math.PI / 2. We distribute 14 nodes clockwise.
    const angle = (Math.PI / 2) + (index * (2 * Math.PI / 14));
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    
    // Tailwind color styling mappings to hex
    const colorHex = {
      emerald: '#10b981',
      teal: '#0d9488',
      red: '#dc2626',
      indigo: '#4f46e5',
      amber: '#d97706',
      yellow: '#ca8a04',
      slate: '#475569',
      green: '#16a34a',
      orange: '#ea580c',
      pink: '#db2777',
      lime: '#84cc16',
      blue: '#2563eb'
    }[trail.color] || '#10b981';

    // Create SVG Group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'cursor-pointer group/node dynamic-node');
    g.setAttribute('onclick', `window.location.hash='#trail-${trail.id}'`);
    
    // Create Circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x.toFixed(1));
    circle.setAttribute('cy', y.toFixed(1));
    circle.setAttribute('r', '13'); // Rounded cute size
    circle.setAttribute('fill', colorHex);
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('stroke-width', '2');
    
    // Create Text
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x.toFixed(1));
    text.setAttribute('y', (y + 3.5).toFixed(1));
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', 'black');
    text.setAttribute('fill', '#ffffff');
    text.setAttribute('text-anchor', 'middle');
    text.textContent = trail.id;
    
    // Create SVG Title tooltip
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${trail.id}코스: ${trail.name}`;
    
    g.appendChild(circle);
    g.appendChild(text);
    g.appendChild(title);
    svg.appendChild(g);
  });
}

// Instagram Mockup Slideshow Logic
function startInstagramSlideshow() {
  const imgEl = document.getElementById('insta-img');
  const placeholderEl = document.getElementById('insta-placeholder');
  const trailNameEl = document.getElementById('insta-trail-name');
  const likesEl = document.getElementById('insta-likes');
  const authorEl = document.getElementById('insta-author');
  const commentEl = document.getElementById('insta-comment');
  const likesContainer = document.getElementById('insta-likes-container');
  
  const updateSlide = () => {
    if (!allPostsCache || allPostsCache.length === 0) {
      if (imgEl) imgEl.classList.add('hidden');
      if (placeholderEl) placeholderEl.classList.remove('hidden');
      if (trailNameEl) trailNameEl.textContent = '둘레길 이야기 🌸';
      if (likesContainer) likesContainer.classList.add('hidden');
      if (authorEl) authorEl.textContent = '청농이';
      if (commentEl) commentEl.textContent = '여기에 친구들의 사진이 번갈아가며 나타나요!';
      return;
    }
    
    // Pick a random post
    const randomPost = allPostsCache[Math.floor(Math.random() * allPostsCache.length)];
    const trail = TRAILS.find(t => t.id === randomPost.trailId);
    
    if (placeholderEl) placeholderEl.classList.add('hidden');
    if (likesContainer) likesContainer.classList.remove('hidden');
    
    if (imgEl) {
      imgEl.src = randomPost.image;
      imgEl.classList.remove('hidden');
      imgEl.classList.remove('fade-in');
      void imgEl.offsetWidth; // Trigger reflow
      imgEl.classList.add('fade-in');
    }
    
    if (trailNameEl) trailNameEl.textContent = trail ? `📍 ${trail.name}` : '📍 둘레길';
    if (likesEl) likesEl.textContent = randomPost.likes || 0;
    if (authorEl) authorEl.textContent = randomPost.author;
    if (commentEl) commentEl.textContent = randomPost.comment;
  };

  // Run once immediately
  updateSlide();
  
  // Set interval for every 30 seconds
  instagramIntervalId = setInterval(updateSlide, 30000);
}

// Detail / Bulletin Board View Renderer
async function showDetailView(trailId) {
  // Clear slideshow interval when leaving home view
  if (instagramIntervalId) {
    clearInterval(instagramIntervalId);
    instagramIntervalId = null;
  }

  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');

  const trail = TRAILS.find(t => t.id === trailId);
  if (!trail) return;

  // Render Trail Header Details & Mission
  document.getElementById('detail-trail-num').textContent = String(trail.id).padStart(2, '0');
  document.getElementById('detail-trail-name').textContent = trail.name;
  document.getElementById('detail-trail-desc').textContent = trail.desc;
  document.getElementById('detail-trail-mission').textContent = trail.mission;

  // Load Posts from IndexedDB
  currentPosts = await db.getPostsByTrail(trailId);
  
  // Render Photo Grid
  const photoGrid = document.getElementById('photo-grid-container');
  const emptyState = document.getElementById('empty-state');
  photoGrid.innerHTML = '';

  if (currentPosts.length === 0) {
    emptyState.classList.remove('hidden');
    photoGrid.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    photoGrid.classList.remove('hidden');
    
    currentPosts.forEach(post => {
      const likesCount = post.likes || 0;
      const hasLikes = likesCount > 0;
      const card = document.createElement('div');
      card.className = "bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group";
      
      const likeIconSvg = hasLikes ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline;
      
      card.innerHTML = `
        <!-- Image Container -->
        <div class="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer" onclick="openLightbox(${post.id})">
          <img src="${post.image}" alt="둘레길 사진" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="text-white text-xs font-semibold flex items-center gap-1">
              ${SVG_ICONS.zoomIn} 크게 보기
            </span>
          </div>
        </div>
        
        <!-- Post Body -->
        <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
          <p class="text-sm text-slate-700 font-medium line-clamp-3 leading-relaxed whitespace-pre-wrap flex-grow">${post.comment}</p>
          
          <hr class="border-slate-100">
          
          <!-- Post Meta footer -->
          <div class="flex items-center justify-between">
            <!-- Author info -->
            <div class="flex items-center space-x-2">
              <div class="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-xs">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800">${post.author}</div>
                <div class="text-[10px] text-slate-400">${formatDate(post.createdAt)}</div>
              </div>
            </div>
            
            <!-- Actions (Like & Delete) -->
            <div class="flex items-center space-x-1">
              <!-- Like Button -->
              <button id="like-btn-${post.id}" onclick="handleLikeClick(event, ${post.id})" 
                class="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded transition-colors ${hasLikes ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-rose-600 hover:bg-slate-50'}">
                ${likeIconSvg}
                <span>${likesCount}</span>
              </button>
              
              <!-- Delete Button -->
              <button onclick="event.stopPropagation(); openDeleteModal(${post.id})" class="text-slate-400 hover:text-rose-600 transition-colors p-1" title="삭제">
                ${SVG_ICONS.trash}
              </button>
            </div>
          </div>
        </div>
      `;
      photoGrid.appendChild(card);
    });
  }

  // Scroll smoothly to top when switching to a detail board
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Image Compression Utility
function compressImage(file, maxWidth = 1024, maxHeight = 1024) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Calculate aspect ratio
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert canvas image to Base64 JPEG data URL with 0.8 quality
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        resolve(dataUrl);
      };

      img.onerror = (err) => reject(err);
    };

    reader.onerror = (err) => reject(err);
  });
}

// 6. Like Click Handler
async function handleLikeClick(event, postId) {
  event.stopPropagation(); // Avoid opening Lightbox modal when clicking Like
  try {
    const newLikes = await db.likePost(postId);
    
    // Update Feed UI
    const likeBtn = document.getElementById(`like-btn-${postId}`);
    if (likeBtn) {
      likeBtn.innerHTML = `
        ${SVG_ICONS.heartFilled}
        <span>${newLikes}</span>
      `;
      likeBtn.classList.remove('text-slate-400', 'hover:text-rose-600', 'hover:bg-slate-50');
      likeBtn.classList.add('text-rose-600', 'bg-rose-50');
    }
    
    // Update local state cache
    const cachePost = currentPosts.find(p => p.id === postId);
    if (cachePost) {
      cachePost.likes = newLikes;
    }
  } catch (error) {
    console.error('좋아요 업데이트 실패:', error);
  }
}

// 7. Modal Interactions
// Write Modal Controls
function openWriteModal() {
  document.getElementById('write-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeWriteModal() {
  document.getElementById('write-modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('write-form').reset();
  resetImageUpload();
}

// Image upload preview functions
function previewImage(event) {
  const input = event.target;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('upload-preview-img').src = e.target.result;
      document.getElementById('upload-preview-container').classList.remove('hidden');
      document.getElementById('upload-placeholder').classList.add('opacity-0');
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function resetImageUpload(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  document.getElementById('post-image').value = '';
  document.getElementById('upload-preview-img').src = '';
  document.getElementById('upload-preview-container').classList.add('hidden');
  document.getElementById('upload-placeholder').classList.remove('opacity-0');
}

// Post Submission Handler
async function handlePostSubmit(event) {
  event.preventDefault();

  const author = document.getElementById('post-author').value.trim();
  const password = document.getElementById('post-password').value.trim();
  const comment = document.getElementById('post-comment').value.trim();
  const imageFile = document.getElementById('post-image').files[0];

  if (!author || !password || !comment || !imageFile) {
    alert('모든 필수 항목을 입력해주세요.');
    return;
  }

  try {
    const compressedDataUrl = await compressImage(imageFile);

    const newPost = {
      id: Date.now(),
      trailId: currentTrailId,
      author: author,
      password: password, // Store password plain since it is client-only demo database
      comment: comment,
      image: compressedDataUrl,
      likes: 0, // Initialize likes at 0
      createdAt: new Date().toISOString()
    };

    await db.addPost(newPost);
    closeWriteModal();
    
    // Reload feed
    if (currentTrailId) {
      showDetailView(currentTrailId);
    }
  } catch (error) {
    console.error('글 작성 에러:', error);
    alert('게시글을 올리는데 오류가 발생했습니다. 사진 형식을 확인하세요.');
  }
}

// Lightbox Modal Controls
async function openLightbox(postId) {
  try {
    const post = await db.getPost(postId);
    if (!post) return;

    const trail = TRAILS.find(t => t.id === post.trailId);

    document.getElementById('lightbox-img').src = post.image;
    document.getElementById('lightbox-trail-name').textContent = trail ? trail.name : '알 수 없는 둘레길';
    document.getElementById('lightbox-author').textContent = post.author;
    document.getElementById('lightbox-date').textContent = formatDate(post.createdAt, true);
    document.getElementById('lightbox-comment').textContent = post.comment;
    document.getElementById('lightbox-likes-count').textContent = post.likes || 0;
    
    // Setup Lightbox Like Button Action
    const lbLikeBtn = document.getElementById('lightbox-like-btn');
    lbLikeBtn.onclick = async () => {
      try {
        const newLikes = await db.likePost(postId);
        document.getElementById('lightbox-likes-count').textContent = newLikes;
        
        // Synchronize with the underlying Feed Card button
        const feedLikeBtn = document.getElementById(`like-btn-${postId}`);
        if (feedLikeBtn) {
          feedLikeBtn.innerHTML = `
            ${SVG_ICONS.heartFilled}
            <span>${newLikes}</span>
          `;
          feedLikeBtn.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded transition-colors text-rose-600 bg-rose-50";
        }

        // Sync with cache
        const cachePost = currentPosts.find(p => p.id === postId);
        if (cachePost) cachePost.likes = newLikes;
      } catch (e) {
        console.error('라이트박스 좋아요 업데이트 실패:', e);
      }
    };

    // Set delete action link
    const deleteBtn = document.getElementById('lightbox-delete-btn');
    deleteBtn.onclick = () => {
      closeLightbox();
      openDeleteModal(postId);
    };

    document.getElementById('lightbox-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } catch (err) {
    console.error(err);
  }
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// Delete Confirmation Modal Controls
function openDeleteModal(postId) {
  document.getElementById('delete-post-id').value = postId;
  document.getElementById('delete-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDeleteModal() {
  document.getElementById('delete-modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('delete-form').reset();
}

// Handle Post Deletion (Allows master bypass with '청농관리자')
async function handlePostDelete(event) {
  event.preventDefault();
  
  const postId = Number(document.getElementById('delete-post-id').value);
  const password = document.getElementById('delete-password').value.trim();

  try {
    const post = await db.getPost(postId);
    if (!post) {
      alert('존재하지 않는 게시글입니다.');
      closeDeleteModal();
      return;
    }

    // Admin Master Password Bypass Check
    if (password !== '청농관리자' && post.password !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    await db.deletePost(postId);
    closeDeleteModal();
    
    // Refresh feed
    if (currentTrailId) {
      showDetailView(currentTrailId);
    }
  } catch (error) {
    console.error('글 삭제 에러:', error);
    alert('삭제 처리 중 문제가 발생했습니다.');
  }
}

// Helper: Format Date String
function formatDate(isoString, includeTime = false) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  
  if (includeTime) {
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  }
  
  return `${yyyy}-${mm}-${dd}`;
}

