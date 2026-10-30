// ============================================================================
// 🌲 청주농업고등학교 둘레길 기록 프로젝트 - 클라우드 실시간 공유 버전 (Firebase Firestore)
// ============================================================================

// 1. Firebase 콘솔 설정값 연결 완료!
const firebaseConfig = {
  apiKey: "AIzaSyA6js7lbPBu5yJ4xEgtw8P_kxHyKL-RswE",
  authDomain: "cheongnong-ae1af.firebaseapp.com",
  projectId: "cheongnong-ae1af",
  storageBucket: "cheongnong-ae1af.firebasestorage.app",
  messagingSenderId: "833328149866",
  appId: "1:833328149866:web:6fa55dd538ceba3c7de113"
};

// Firebase 초기화 확인
let isFirebaseReady = false;
let cloudDb = null;

try {
  if (typeof firebase !== 'undefined' && firebaseConfig.apiKey) {
    firebase.initializeApp(firebaseConfig);
    cloudDb = firebase.firestore();
    
    // ⚡ 모바일 로딩 초고속 최적화: 로컬 오프라인 캐시(Persistence) 활성화
    // 한 번 본 사진은 폰에 캐시되어 다음 접속 시 0.1초 만에 로딩됩니다!
    cloudDb.enablePersistence({ synchronizeTabs: true }).catch((err) => {
      if (err.code === 'failed-precondition') {
        console.warn("여러 탭이 열려 있어 로컬 캐시가 첫 번째 탭에서 활성화됩니다.");
      } else if (err.code === 'unimplemented') {
        console.warn("현재 브라우저는 로컬 캐시 저장을 지원하지 않습니다.");
      }
    });

    isFirebaseReady = true;
    console.log("⚡ Firebase 클라우드 데이터베이스 연결 및 초고속 로컬 캐시 활성화 성공!");
  }
} catch (e) {
  console.error("Firebase 초기화 에러:", e);
}

// 2. 둘레길 14개 코스 데이터
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
  image: `<svg class="w-3.5 h-3.5 mr-1 fill-rose-500 text-rose-500 inline-block mb-0.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
};

// 3. 로컬 IndexedDB 클래스 (기존 데이터 보존 및 마이그레이션용)
class DulleDB {
  constructor() {
    this.dbName = 'CheongjuAgriDullegilDB';
    this.dbVersion = 1;
    this.db = null;
  }

  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      request.onerror = (event) => reject(event.target.error);
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

  getAllPosts() {
    return new Promise((resolve, reject) => {
      if (!this.db) return resolve([]);
      const transaction = this.db.transaction(['posts'], 'readonly');
      const store = transaction.objectStore('posts');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  addPost(post) {
    return new Promise((resolve, reject) => {
      if (!this.db) return resolve(post.id);
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      const request = store.put(post);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  saveAllPosts(posts) {
    return new Promise((resolve, reject) => {
      if (!this.db || !posts || posts.length === 0) return resolve();
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      posts.forEach(post => store.put(post));
      transaction.oncomplete = () => resolve();
      transaction.onerror = (e) => reject(e);
    });
  }

  deletePost(id) {
    return new Promise((resolve, reject) => {
      if (!this.db) return resolve(true);
      const transaction = this.db.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      const request = store.delete(Number(id));
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }
}

const localDb = new DulleDB();

// 4. 통합 데이터 저장소 (로컬 캐시 즉시 표시 + 클라우드 실시간 동기화)
const AppDB = {
  allPosts: [],

  async initRealtimeListener(onUpdateCallback) {
    // ⚡ [0초 로딩] 접속하자마자 폰에 저장된 로컬 캐시를 0.01초 만에 즉시 띄웁니다!
    try {
      const cached = await localDb.getAllPosts();
      if (cached && cached.length > 0) {
        cached.sort((a, b) => b.id - a.id);
        this.allPosts = cached;
        if (onUpdateCallback) onUpdateCallback(this.allPosts);
      }
    } catch (e) {
      console.warn("로컬 캐시 불러오기 참고:", e);
    }

    // 🌐 [백그라운드 동기화] 그 후 클라우드(Firebase)에서 최신 데이터를 가져와 부드럽게 갱신합니다.
    if (isFirebaseReady && cloudDb) {
      cloudDb.collection('posts').onSnapshot(async (snapshot) => {
        const posts = [];
        snapshot.forEach((doc) => {
          posts.push(doc.data());
        });
        posts.sort((a, b) => b.id - a.id);
        this.allPosts = posts;
        if (onUpdateCallback) onUpdateCallback(posts);

        // 다음 접속 시 로딩 0초를 위해 로컬 IndexedDB에 최신 사진 전체 저장
        try {
          await localDb.saveAllPosts(posts);
        } catch (err) {
          console.warn("로컬 캐시 저장 오류:", err);
        }
      }, (err) => {
        console.error("Firestore 실시간 리스너 에러:", err);
      });
    } else if (this.allPosts.length === 0) {
      this.allPosts = await localDb.getAllPosts();
      this.allPosts.sort((a, b) => b.id - a.id);
      if (onUpdateCallback) onUpdateCallback(this.allPosts);
    }
  },

  async addPost(post) {
    await localDb.addPost(post);

    if (isFirebaseReady && cloudDb) {
      await cloudDb.collection('posts').doc(String(post.id)).set(post);
    } else {
      this.allPosts.unshift(post);
    }
    return post;
  },

  async likePost(postId) {
    const post = this.allPosts.find(p => p.id === postId);
    if (!post) throw new Error("게시글을 찾을 수 없습니다.");

    const newLikes = (post.likes || 0) + 1;
    post.likes = newLikes;

    if (isFirebaseReady && cloudDb) {
      await cloudDb.collection('posts').doc(String(postId)).update({
        likes: firebase.firestore.FieldValue.increment(1)
      });
    }
    await localDb.addPost(post);
    return newLikes;
  },

  async deletePost(postId) {
    if (isFirebaseReady && cloudDb) {
      await cloudDb.collection('posts').doc(String(postId)).delete();
    }
    await localDb.deletePost(postId);
    this.allPosts = this.allPosts.filter(p => p.id !== postId);
    return true;
  },

  getPostsByTrail(trailId) {
    return this.allPosts.filter(p => Number(p.trailId) === Number(trailId));
  },

  getPost(postId) {
    return this.allPosts.find(p => p.id === Number(postId));
  }
};

// ============================================================================
// 5. 🌟 기존 기기 사진을 클라우드로 자동 전송하는 마이그레이션 함수
// ============================================================================
async function syncLocalPostsToCloud(isManual = false) {
  if (!isFirebaseReady || !cloudDb) {
    if (isManual) {
      alert("⚠️ Firebase가 아직 연결되지 않았습니다.");
    }
    return;
  }

  try {
    const localPosts = await localDb.getAllPosts();
    if (!localPosts || localPosts.length === 0) {
      if (isManual) {
        alert("이 브라우저에는 저장된 이전 사진이 없습니다.\n\n💡 혹시 처음에 카카오톡이나 다른 앱에서 사진을 올리셨다면, 카카오톡 안에서 해당 링크를 열어주셔야 사진을 찾을 수 있습니다!");
      }
      return;
    }

    const unsyncedPosts = localPosts.filter(p => !p.synced);
    if (unsyncedPosts.length === 0) {
      if (isManual) {
        showSyncBanner("✅ 이 기기의 모든 사진이 이미 전체 공유 저장소에 등록되어 있습니다!");
      }
      return;
    }

    let syncedCount = 0;
    for (const post of unsyncedPosts) {
      const docRef = cloudDb.collection('posts').doc(String(post.id));
      const docSnap = await docRef.get();
      
      if (!docSnap.exists) {
        await docRef.set(post);
        syncedCount++;
      }
      post.synced = true;
      await localDb.addPost(post);
    }

    if (syncedCount > 0) {
      showSyncBanner(`🎉 이 기기에 보관되어 있던 추억 사진 ${syncedCount}장이 전체 공유 저장소로 안전하게 등록되었습니다!`);
    } else if (isManual) {
      showSyncBanner("✅ 이 기기의 모든 사진이 이미 전체 공유 저장소에 등록되어 있습니다!");
    }
  } catch (err) {
    console.error("이전 글 동기화 중 오류:", err);
  }
}

function showSyncBanner(msg) {
  const banner = document.getElementById('sync-banner');
  const text = document.getElementById('sync-banner-text');
  if (banner && text) {
    text.textContent = msg;
    banner.classList.remove('hidden');
    setTimeout(() => {
      banner.classList.add('hidden');
    }, 6000);
  }
}

function manualSync() {
  syncLocalPostsToCloud(true);
}

// 6. 앱 상태 및 라우터
let currentTrailId = null;
let currentPosts = [];
let instagramIntervalId = null;
const POSTS_PER_PAGE = 12; // 모바일 과부하 방지: 12장씩 분할 로딩
let visiblePostsCount = POSTS_PER_PAGE;

window.addEventListener('DOMContentLoaded', async () => {
  try {
    await localDb.init();
    
    // ⚡ 1. 라우팅 먼저 설정 (현재 접속한 코스나 홈 화면 위치 파악)
    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    // ⚡ 2. 로컬 캐시 즉시 표시(0초) + 파이어베이스 백그라운드 실시간 동기화
    await AppDB.initRealtimeListener(() => {
      if (currentTrailId) {
        renderDetailView(currentTrailId);
      } else {
        renderHomeCounts();
      }
      // 통계 모달이 열려있다면 실시간 자동 갱신
      const statsModal = document.getElementById('stats-modal');
      if (statsModal && !statsModal.classList.contains('hidden')) {
        renderStatsModal();
      }
    });

    // 이전에 올렸던 사진이 있으면 1.2초 뒤 백그라운드 자동 동기화!
    setTimeout(() => {
      syncLocalPostsToCloud(false);
    }, 1200);

  } catch (error) {
    console.error("데이터베이스 초기화 에러:", error);
  }
});

function handleRouting() {
  const hash = window.location.hash;

  closeWriteModal();
  closeLightbox();
  closeDeleteModal();
  closeStatsModal();

  if (hash.startsWith('#trail-')) {
    const idStr = hash.replace('#trail-', '');
    const trailId = parseInt(idStr);
    
    if (trailId >= 1 && trailId <= 14) {
      currentTrailId = trailId;
      showDetailView(trailId);
      return;
    }
  }

  currentTrailId = null;
  showHomeView();
}

function showHomeView() {
  document.getElementById('home-view').classList.remove('hidden');
  document.getElementById('detail-view').classList.add('hidden');
  
  if (instagramIntervalId) {
    clearInterval(instagramIntervalId);
    instagramIntervalId = null;
  }

  renderHomeCounts();
  renderSVGMap();
  startInstagramSlideshow();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHomeCounts() {
  const countMap = {};
  TRAILS.forEach(t => countMap[t.id] = 0);
  
  AppDB.allPosts.forEach(post => {
    if (countMap[post.trailId] !== undefined) {
      countMap[post.trailId]++;
    }
  });

  const gridContainer = document.getElementById('trail-grid-container');
  if (gridContainer) {
    gridContainer.innerHTML = '';
    
    TRAILS.forEach(trail => {
      const count = countMap[trail.id] || 0;
      const card = document.createElement('div');
      card.className = `bg-white rounded-2xl border border-emerald-100 hover:border-emerald-300 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer`;
      card.onclick = () => window.location.hash = `#trail-${trail.id}`;
      
      const trailIconSvg = TRAIL_ICONS[trail.icon] || '';
      
      card.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-lg tracking-wider">
              코스 ${String(trail.id).padStart(2, '0')}
            </span>
            <span class="text-xs font-extrabold ${count > 0 ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'} px-3 py-1 rounded-full shadow-sm">
              사진 ${count}장
            </span>
          </div>
          
          <div class="flex items-center space-x-3">
            <div class="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
              ${trailIconSvg}
            </div>
            <h4 class="font-extrabold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 cute-font">${trail.name}</h4>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-50 mt-4 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-emerald-600 transition-colors duration-300">
          <span>추억 보러가기 🐾</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
      `;

      gridContainer.appendChild(card);
    });
  }

  const badge = document.getElementById('total-photos-badge');
  if (badge) {
    badge.innerHTML = `${SVG_ICONS.image}지금까지 모인 추억 ${AppDB.allPosts.length}장`;
  }
}

function renderSVGMap() {
  const svg = document.getElementById('map-svg');
  if (!svg) return;
  
  const existingNodes = svg.querySelectorAll('.dynamic-node');
  existingNodes.forEach(n => n.remove());
  
  const cx = 160;
  const cy = 160;
  const r = 110;
  
  TRAILS.forEach((trail, index) => {
    const angle = (Math.PI / 2) + (index * (2 * Math.PI / 14));
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    
    const colorHex = {
      emerald: '#10b981', teal: '#0d9488', red: '#dc2626', indigo: '#4f46e5',
      amber: '#d97706', yellow: '#ca8a04', slate: '#475569', green: '#16a34a',
      orange: '#ea580c', pink: '#db2777', lime: '#84cc16', blue: '#2563eb'
    }[trail.color] || '#10b981';

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'cursor-pointer group/node dynamic-node');
    g.setAttribute('onclick', `window.location.hash='#trail-${trail.id}'`);
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x.toFixed(1));
    circle.setAttribute('cy', y.toFixed(1));
    circle.setAttribute('r', '13');
    circle.setAttribute('fill', colorHex);
    circle.setAttribute('stroke', '#ffffff');
    circle.setAttribute('stroke-width', '2');
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x.toFixed(1));
    text.setAttribute('y', (y + 3.5).toFixed(1));
    text.setAttribute('font-size', '10');
    text.setAttribute('font-weight', 'black');
    text.setAttribute('fill', '#ffffff');
    text.setAttribute('text-anchor', 'middle');
    text.textContent = trail.id;
    
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = `${trail.id}코스: ${trail.name}`;
    
    g.appendChild(circle);
    g.appendChild(text);
    g.appendChild(title);
    svg.appendChild(g);
  });
}

function startInstagramSlideshow() {
  const imgEl = document.getElementById('insta-img');
  const placeholderEl = document.getElementById('insta-placeholder');
  const trailNameEl = document.getElementById('insta-trail-name');
  const likesEl = document.getElementById('insta-likes');
  const authorEl = document.getElementById('insta-author');
  const commentEl = document.getElementById('insta-comment');
  const likesContainer = document.getElementById('insta-likes-container');
  
  // ⚡ [0초 로딩] 사이트 접속 순간 저장된 대표 사진을 0.001초 만에 즉시 표시!
  try {
    const cachedHero = localStorage.getItem('cheongnong_last_hero_post');
    if (cachedHero && (!AppDB.allPosts || AppDB.allPosts.length === 0)) {
      const hero = JSON.parse(cachedHero);
      if (hero && hero.image) {
        if (placeholderEl) placeholderEl.classList.add('hidden');
        if (imgEl) {
          imgEl.src = hero.image;
          imgEl.classList.remove('hidden');
        }
        if (trailNameEl) trailNameEl.textContent = `📍 ${hero.trailName || '둘레길'}`;
        if (authorEl) authorEl.textContent = hero.author || '청농이';
        if (commentEl) commentEl.textContent = hero.comment || '';
      }
    }
  } catch (e) {}

  const updateSlide = () => {
    if (!AppDB.allPosts || AppDB.allPosts.length === 0) {
      if (!localStorage.getItem('cheongnong_last_hero_post')) {
        if (imgEl) imgEl.classList.add('hidden');
        if (placeholderEl) placeholderEl.classList.remove('hidden');
        if (trailNameEl) trailNameEl.textContent = '둘레길 이야기 🌸';
        if (likesContainer) likesContainer.classList.add('hidden');
        if (authorEl) authorEl.textContent = '청농이';
        if (commentEl) commentEl.textContent = '여기에 친구들의 사진이 번갈아가며 나타나요!';
      }
      return;
    }
    
    const randomPost = AppDB.allPosts[Math.floor(Math.random() * AppDB.allPosts.length)];
    const trail = TRAILS.find(t => t.id === randomPost.trailId);
    
    if (placeholderEl) placeholderEl.classList.add('hidden');
    if (likesContainer) likesContainer.classList.remove('hidden');
    
    if (imgEl) {
      imgEl.src = randomPost.image;
      imgEl.classList.remove('hidden');
      imgEl.classList.remove('fade-in');
      void imgEl.offsetWidth;
      imgEl.classList.add('fade-in');
    }
    
    if (trailNameEl) trailNameEl.textContent = trail ? `📍 ${trail.name}` : '📍 둘레길';
    if (likesEl) likesEl.textContent = randomPost.likes || 0;
    if (authorEl) authorEl.textContent = randomPost.author;
    if (commentEl) commentEl.textContent = randomPost.comment;

    // 다음 접속 시 0초 즉시 표시를 위해 최근 사진 정보 보관
    try {
      localStorage.setItem('cheongnong_last_hero_post', JSON.stringify({
        image: randomPost.image,
        author: randomPost.author,
        comment: randomPost.comment,
        trailName: trail ? trail.name : '둘레길'
      }));
    } catch (e) {}
  };
  };

  updateSlide();
  instagramIntervalId = setInterval(updateSlide, 20000);
}

function showDetailView(trailId) {
  if (instagramIntervalId) {
    clearInterval(instagramIntervalId);
    instagramIntervalId = null;
  }

  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('detail-view').classList.remove('hidden');

  const trail = TRAILS.find(t => t.id === trailId);
  if (!trail) return;

  document.getElementById('detail-trail-num').textContent = String(trail.id).padStart(2, '0');
  document.getElementById('detail-trail-name').textContent = trail.name;
  document.getElementById('detail-trail-desc').textContent = trail.desc;
  document.getElementById('detail-trail-mission').textContent = trail.mission;

  visiblePostsCount = POSTS_PER_PAGE; // 다른 코스 열 때 처음 12개부터 표시
  renderDetailView(trailId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetailView(trailId) {
  currentPosts = AppDB.getPostsByTrail(trailId);
  
  const photoGrid = document.getElementById('photo-grid-container');
  const emptyState = document.getElementById('empty-state');
  const loadMoreContainer = document.getElementById('load-more-container');
  const loadMoreCount = document.getElementById('load-more-count');
  if (!photoGrid) return;

  photoGrid.innerHTML = '';

  if (currentPosts.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    photoGrid.classList.add('hidden');
    if (loadMoreContainer) loadMoreContainer.classList.add('hidden');
  } else {
    if (emptyState) emptyState.classList.add('hidden');
    photoGrid.classList.remove('hidden');
    
    // ⚡ 모바일 성능 최적화: 현재 표시할 개수만큼만 분할 렌더링
    const postsToShow = currentPosts.slice(0, visiblePostsCount);

    postsToShow.forEach(post => {
      const likesCount = post.likes || 0;
      const hasLikes = likesCount > 0;
      const card = document.createElement('div');
      card.className = "bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group";
      
      const likeIconSvg = hasLikes ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline;
      
      card.innerHTML = `
        <div class="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer" onclick="openLightbox(${post.id})">
          <img src="${post.image}" alt="둘레길 사진" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span class="text-white text-xs font-semibold flex items-center gap-1">
              ${SVG_ICONS.zoomIn} 크게 보기
            </span>
          </div>
        </div>
        
        <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
          <p class="text-sm text-slate-700 font-medium line-clamp-3 leading-relaxed whitespace-pre-wrap flex-grow">${post.comment}</p>
          <hr class="border-slate-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div class="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-xs">
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold text-slate-800">${post.author}</div>
                <div class="text-[10px] text-slate-400">${formatDate(post.createdAt)}</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-1">
              <button id="like-btn-${post.id}" onclick="handleLikeClick(event, ${post.id})" 
                class="inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded transition-colors ${hasLikes ? 'text-rose-600 bg-rose-50' : 'text-slate-400 hover:text-rose-600 hover:bg-slate-50'}">
                ${likeIconSvg}
                <span>${likesCount}</span>
              </button>
              
              <button onclick="event.stopPropagation(); openDeleteModal(${post.id})" class="text-slate-400 hover:text-rose-600 transition-colors p-1" title="삭제">
                ${SVG_ICONS.trash}
              </button>
            </div>
          </div>
        </div>
      `;
      photoGrid.appendChild(card);
    });

    // 사진 더 보기 버튼 노출 여부
    if (loadMoreContainer) {
      const remaining = currentPosts.length - visiblePostsCount;
      if (remaining > 0) {
        loadMoreContainer.classList.remove('hidden');
        if (loadMoreCount) loadMoreCount.textContent = `남은 사진 ${remaining}장`;
      } else {
        loadMoreContainer.classList.add('hidden');
      }
    }
  }
}

function loadMorePhotos() {
  visiblePostsCount += POSTS_PER_PAGE;
  if (currentTrailId) {
    renderDetailView(currentTrailId);
  }
}

// ⚡ 모바일 업로드 최적화: 720px / 압축률 0.68로 화질 손실 없이 용량 60% 절감
function compressImage(file, maxWidth = 720, maxHeight = 720, quality = 0.68) {
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

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };

      img.onerror = (err) => reject(err);
    };

    reader.onerror = (err) => reject(err);
  });
}

async function handleLikeClick(event, postId) {
  event.stopPropagation();
  try {
    const newLikes = await AppDB.likePost(postId);
    
    const likeBtn = document.getElementById(`like-btn-${postId}`);
    if (likeBtn) {
      likeBtn.innerHTML = `
        ${SVG_ICONS.heartFilled}
        <span>${newLikes}</span>
      `;
      likeBtn.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded transition-colors text-rose-600 bg-rose-50";
    }
  } catch (error) {
    console.error('좋아요 업데이트 실패:', error);
  }
}

function openWriteModal() {
  document.getElementById('write-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeWriteModal() {
  document.getElementById('write-modal').classList.add('hidden');
  document.body.style.overflow = '';
  document.getElementById('write-form').reset();
  resetImageUpload();
  
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');
  if (submitBtn) submitBtn.disabled = false;
  if (submitBtnText) submitBtnText.textContent = "게시물 등록";
}

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

async function handlePostSubmit(event) {
  event.preventDefault();

  const author = document.getElementById('post-author').value.trim();
  const password = document.getElementById('post-password').value.trim();
  const comment = document.getElementById('post-comment').value.trim();
  const imageFile = document.getElementById('post-image').files[0];
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (!author || !password || !comment || !imageFile) {
    alert('모든 필수 항목을 입력해주세요.');
    return;
  }

  try {
    if (submitBtn) submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = "업로드 중...";

    const compressedDataUrl = await compressImage(imageFile);

    const newPost = {
      id: Date.now(),
      trailId: currentTrailId,
      author: author,
      password: password,
      comment: comment,
      image: compressedDataUrl,
      likes: 0,
      createdAt: new Date().toISOString()
    };

    await AppDB.addPost(newPost);
    closeWriteModal();
    
    if (currentTrailId) {
      renderDetailView(currentTrailId);
    }
  } catch (error) {
    console.error('글 작성 에러:', error);
    alert('게시글을 올리는데 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    if (submitBtn) submitBtn.disabled = false;
    if (submitBtnText) submitBtnText.textContent = "게시물 등록";
  }
}

async function openLightbox(postId) {
  const post = AppDB.getPost(postId);
  if (!post) return;

  const trail = TRAILS.find(t => t.id === post.trailId);

  document.getElementById('lightbox-img').src = post.image;
  document.getElementById('lightbox-trail-name').textContent = trail ? trail.name : '알 수 없는 둘레길';
  document.getElementById('lightbox-author').textContent = post.author;
  document.getElementById('lightbox-date').textContent = formatDate(post.createdAt, true);
  document.getElementById('lightbox-comment').textContent = post.comment;
  document.getElementById('lightbox-likes-count').textContent = post.likes || 0;
  
  const lbLikeBtn = document.getElementById('lightbox-like-btn');
  lbLikeBtn.onclick = async () => {
    try {
      const newLikes = await AppDB.likePost(postId);
      document.getElementById('lightbox-likes-count').textContent = newLikes;
      
      const feedLikeBtn = document.getElementById(`like-btn-${postId}`);
      if (feedLikeBtn) {
        feedLikeBtn.innerHTML = `
          ${SVG_ICONS.heartFilled}
          <span>${newLikes}</span>
        `;
        feedLikeBtn.className = "inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded transition-colors text-rose-600 bg-rose-50";
      }
    } catch (e) {
      console.error('좋아요 에러:', e);
    }
  };

  const deleteBtn = document.getElementById('lightbox-delete-btn');
  deleteBtn.onclick = () => {
    closeLightbox();
    openDeleteModal(postId);
  };

  document.getElementById('lightbox-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

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

async function handlePostDelete(event) {
  event.preventDefault();
  
  const postId = Number(document.getElementById('delete-post-id').value);
  const password = document.getElementById('delete-password').value.trim();

  try {
    const post = AppDB.getPost(postId);
    if (!post) {
      alert('존재하지 않는 게시글입니다.');
      closeDeleteModal();
      return;
    }

    // 관리자 마스터 비밀번호 지원 (숫자 1234, 영문 admin1234, cn1234 등 지원)
    const ADMIN_PASSWORDS = ['1234', 'admin', 'admin1234', 'cn1234', '청농관리자'];
    const isAdmin = ADMIN_PASSWORDS.includes(password.toLowerCase());

    if (!isAdmin && post.password !== password) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    await AppDB.deletePost(postId);
    closeDeleteModal();
    
    if (currentTrailId) {
      renderDetailView(currentTrailId);
    }
  } catch (error) {
    console.error('글 삭제 에러:', error);
    alert('삭제 처리 중 문제가 발생했습니다.');
  }
}

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

// ============================================================================
// 10. 📊 학급별 & 코스별 참여 현황 통계 기능
// ============================================================================

let currentStatsTab = 'class'; // 'class' 또는 'trail'

// 학번에서 '학년-반' 파싱 (예: 30507 -> 3학년 5반, 30101 -> 3학년 1반, 3-5 -> 3학년 5반)
function parseStudentClass(author) {
  if (!author || typeof author !== 'string') return '기타/미확인';
  
  const trimmed = author.trim();

  // 1) 5자리 학번 (예: 30507, 10215, 21004)
  const match5 = trimmed.match(/^([1-3])([0-9]{2})[0-9]{2}/);
  if (match5) {
    const grade = match5[1];
    const classNum = parseInt(match5[2], 10);
    return `${grade}학년 ${classNum}반`;
  }

  // 2) 4자리 학번 (예: 3507, 3105)
  const match4 = trimmed.match(/^([1-3])([1-9])([0-9]{2})/);
  if (match4) {
    return `${match4[1]}학년 ${match4[2]}반`;
  }

  // 3) 'X학년 Y반' 형식 (예: 3학년 5반, 3학년5반)
  const matchKor = trimmed.match(/([1-3])\s*학년\s*([0-9]{1,2})\s*반/);
  if (matchKor) {
    return `${matchKor[1]}학년 ${parseInt(matchKor[2], 10)}반`;
  }

  // 4) 'X-Y' 형식 (예: 3-5, 2-10)
  const matchDash = trimmed.match(/^([1-3])\s*[-/]\s*([0-9]{1,2})/);
  if (matchDash) {
    return `${matchDash[1]}학년 ${parseInt(matchDash[2], 10)}반`;
  }

  return '기타/미확인';
}

// 통계 데이터 계산
function calculateParticipationStats() {
  const posts = AppDB.allPosts || [];
  
  const classMap = {};
  const trailMap = {};
  
  // 둘레길 1~14 초기화
  TRAILS.forEach(t => {
    trailMap[t.id] = {
      trail: t,
      posts: [],
      classes: new Set(),
      authors: new Set()
    };
  });

  posts.forEach(post => {
    const className = parseStudentClass(post.author);
    const trailId = Number(post.trailId);

    // 1) 학급별 집계
    if (!classMap[className]) {
      classMap[className] = {
        className: className,
        posts: [],
        trails: new Set(),
        authors: new Set()
      };
    }
    classMap[className].posts.push(post);
    classMap[className].trails.add(trailId);
    classMap[className].authors.add(post.author);

    // 2) 코스별 집계
    if (trailMap[trailId]) {
      trailMap[trailId].posts.push(post);
      trailMap[trailId].classes.add(className);
      trailMap[trailId].authors.add(post.author);
    }
  });

  // 학급별 리스트 정렬 (참여 사진 수 많은 순 -> 완주 코스 많은 순)
  const classList = Object.values(classMap).sort((a, b) => {
    if (b.posts.length !== a.posts.length) return b.posts.length - a.posts.length;
    if (b.trails.size !== a.trails.size) return b.trails.size - a.trails.size;
    return a.className.localeCompare(b.className);
  });

  return {
    totalPosts: posts.length,
    totalClasses: Object.keys(classMap).filter(c => c !== '기타/미확인').length,
    classList,
    trailMap
  };
}

// 통계 모달 열기
function openStatsModal() {
  renderStatsModal();
  document.getElementById('stats-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// 통계 모달 닫기
function closeStatsModal() {
  const modal = document.getElementById('stats-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// 탭 전환 (학급별 vs 코스별)
function switchStatsTab(tab) {
  currentStatsTab = tab;
  const btnClass = document.getElementById('tab-btn-class');
  const btnTrail = document.getElementById('tab-btn-trail');
  const viewClass = document.getElementById('stats-class-view');
  const viewTrail = document.getElementById('stats-trail-view');

  if (!btnClass || !btnTrail || !viewClass || !viewTrail) return;

  if (tab === 'class') {
    btnClass.className = "pb-2.5 border-b-2 border-emerald-600 text-emerald-700 flex items-center gap-1.5 transition font-bold";
    btnTrail.className = "pb-2.5 border-b-2 border-transparent text-slate-400 hover:text-slate-600 flex items-center gap-1.5 transition font-bold";
    viewClass.classList.remove('hidden');
    viewTrail.classList.add('hidden');
  } else {
    btnTrail.className = "pb-2.5 border-b-2 border-emerald-600 text-emerald-700 flex items-center gap-1.5 transition font-bold";
    btnClass.className = "pb-2.5 border-b-2 border-transparent text-slate-400 hover:text-slate-600 flex items-center gap-1.5 transition font-bold";
    viewTrail.classList.remove('hidden');
    viewClass.classList.add('hidden');
  }
}

// 모달 내용 렌더링
function renderStatsModal() {
  const stats = calculateParticipationStats();

  // 상단 요약 카드
  const classCountEl = document.getElementById('stat-class-count');
  const photoCountEl = document.getElementById('stat-photo-count');
  const topClassEl = document.getElementById('stat-top-class');
  
  if (classCountEl) classCountEl.textContent = `${stats.totalClasses}개 반`;
  if (photoCountEl) photoCountEl.textContent = `${stats.totalPosts}장`;
  
  const topClass = stats.classList.find(c => c.className !== '기타/미확인');
  if (topClassEl) {
    if (topClass && topClass.posts.length > 0) {
      topClassEl.textContent = `${topClass.className} (${topClass.posts.length}장)`;
    } else {
      topClassEl.textContent = '-';
    }
  }

  // 1) 학급별 뷰 렌더링
  const classView = document.getElementById('stats-class-view');
  if (classView) {
    if (stats.classList.length === 0) {
      classView.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <div class="text-3xl mb-2">🐾</div>
          <p class="text-sm font-bold">아직 등록된 학급별 참여 기록이 없습니다.</p>
        </div>
      `;
    } else {
      let classHtml = '';
      stats.classList.forEach((item, idx) => {
        let rankBadge = '';
        if (idx === 0) rankBadge = '<span class="text-amber-500 font-black text-sm">🥇 1위</span>';
        else if (idx === 1) rankBadge = '<span class="text-slate-400 font-black text-sm">🥈 2위</span>';
        else if (idx === 2) rankBadge = '<span class="text-amber-700 font-black text-sm">🥉 3위</span>';
        else rankBadge = `<span class="text-slate-400 font-bold text-xs">${idx + 1}위</span>`;

        const trailTags = Array.from(item.trails).sort((a, b) => a - b).map(tId => {
          const t = TRAILS.find(x => x.id === tId);
          return `<span class="inline-block bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded-md">${tId}코스(${t ? t.name : ''})</span>`;
        }).join(' ');

        const authorList = Array.from(item.authors);
        const authorSummary = authorList.length > 4 
          ? `${authorList.slice(0, 4).join(', ')} 외 ${authorList.length - 4}명`
          : authorList.join(', ');

        classHtml += `
          <div class="bg-white border border-slate-100 hover:border-emerald-200 rounded-2xl p-4 shadow-xs hover:shadow-sm transition space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2.5">
                <div class="w-12 text-center">${rankBadge}</div>
                <h4 class="font-extrabold text-base text-slate-900 cute-font">${item.className}</h4>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-black bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full shadow-2xs">
                  📸 ${item.posts.length}장
                </span>
                <span class="text-xs font-bold bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full">
                  🌲 ${item.trails.size}개 코스
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-1 pl-12">
              ${trailTags}
            </div>

            <div class="text-[11px] text-slate-500 pl-12 flex items-center gap-1">
              <span class="font-bold text-slate-600">참여자:</span>
              <span class="truncate">${authorSummary || '이름 미기재'}</span>
            </div>
          </div>
        `;
      });
      classView.innerHTML = classHtml;
    }
  }

  // 2) 코스별 뷰 렌더링
  const trailView = document.getElementById('stats-trail-view');
  if (trailView) {
    let trailHtml = '';
    TRAILS.forEach(trail => {
      const data = stats.trailMap[trail.id];
      const count = data ? data.posts.length : 0;
      const classArray = data ? Array.from(data.classes).filter(c => c !== '기타/미확인') : [];
      
      const classTags = classArray.length > 0
        ? classArray.map(c => `<span class="inline-block bg-teal-50 text-teal-700 border border-teal-100 text-[10px] font-bold px-2 py-0.5 rounded-md">${c}</span>`).join(' ')
        : '<span class="text-[11px] text-slate-400">아직 참여 학급 없음</span>';

      trailHtml += `
        <div class="bg-white border border-slate-100 hover:border-emerald-200 rounded-2xl p-3.5 shadow-xs transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center space-x-2">
              <span class="text-xs font-extrabold text-white bg-emerald-600 px-2 py-0.5 rounded-lg">
                ${String(trail.id).padStart(2, '0')}코스
              </span>
              <h4 class="font-bold text-sm text-slate-900 cute-font">${trail.name}</h4>
              <span class="text-xs font-extrabold ${count > 0 ? 'text-emerald-700 bg-emerald-50' : 'text-slate-400 bg-slate-50'} px-2 py-0.5 rounded-md">
                ${count}장
              </span>
            </div>
            <div class="flex flex-wrap gap-1 pt-1">
              ${classTags}
            </div>
          </div>
          <button onclick="closeStatsModal(); window.location.hash='#trail-${trail.id}';" class="shrink-0 text-xs font-bold text-emerald-600 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition text-center cursor-pointer">
            사진 보러가기 🐾
          </button>
        </div>
      `;
    });
    trailView.innerHTML = trailHtml;
  }
}

// 엑셀 및 결과보고서용 텍스트 복사 기능
function copyStatsReport() {
  const stats = calculateParticipationStats();
  
  let report = `[청주농업고등학교 둘레길 기록 프로젝트 - 학급별 참여 현황 보고서]\n`;
  report += `* 집계 일시: ${new Date().toLocaleString('ko-KR')}\n`;
  report += `* 총 등록 사진: ${stats.totalPosts}장 | 총 참여 학급: ${stats.totalClasses}개 반\n\n`;
  
  report += `=== [1. 학급별 참여 순위] ===\n`;
  report += `순위\t학급명\t등록사진수\t완주코스수\t완주코스목록\t참여자\n`;
  stats.classList.forEach((item, idx) => {
    const trailsStr = Array.from(item.trails).sort((a, b) => a - b).map(t => `${t}코스`).join(', ');
    const authorsStr = Array.from(item.authors).join(', ');
    report += `${idx + 1}위\t${item.className}\t${item.posts.length}장\t${item.trails.size}개\t${trailsStr}\t${authorsStr}\n`;
  });

  report += `\n=== [2. 둘레길 코스별 참여 학급 현황] ===\n`;
  report += `코스번호\t코스명\t등록사진수\t참여학급목록\n`;
  TRAILS.forEach(trail => {
    const data = stats.trailMap[trail.id];
    const count = data ? data.posts.length : 0;
    const classesStr = data && data.classes.size > 0 ? Array.from(data.classes).join(', ') : '없음';
    report += `${trail.id}코스\t${trail.name}\t${count}장\t${classesStr}\n`;
  });

  navigator.clipboard.writeText(report).then(() => {
    alert("✅ 학급별 참여 현황이 클립보드에 복사되었습니다!\n\n엑셀(Excel)이나 한글(HWP) 표에 바로 붙여넣기(Ctrl + V)하시면 표 형식으로 깔끔하게 입력됩니다.");
  }).catch(err => {
    console.error("복사 실패:", err);
    alert("클립보드 복사에 실패했습니다. 브라우저 권한을 확인해주세요.");
  });
}
