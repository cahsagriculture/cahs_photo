# 🌱 청주농업고등학교 둘레길 추억 저장소 📸

청주농업고등학교의 아름다운 14개 둘레길 코스를 걷고 사진 미션을 해결하며 추억을 남기는 **실시간 반응형 온라인 사진 게시판**입니다. 
파이썬이나 데이터베이스 서버 설치 없이 `index.html`과 `app.js` 만으로 구성되어 있으며, **GitHub Pages**를 통해 무료로 손쉽게 배포하여 스마트폰에서 바로 활용할 수 있습니다.

---

## ✨ 주요 기능 및 특징

* **🎨 연두-노란 그라데이션 귀여운 테마**: 청주농고의 푸르른 자연을 닮은 연두색 그라데이션 바탕과 개구(Gaegu) 폰트가 어우러져 아기자기하고 친근한 무드를 제공합니다.
* **🗺️ 깔끔한 순형 둘레길 지도**: 14개 코스가 원형으로 정렬된 직관적인 인터페이스를 가지고 있으며, 지도의 번호만 누르면 렉 없이 0ms 속도로 해당 코스의 사진첩으로 이동합니다.
* **🔥 오늘의 청농 (30초 랜덤 슬라이드 쇼)**: 친구들이 올린 사진들이 메인 배너의 인스타그램 형태 피드에서 30초 간격으로 무작위로 페이드 인/아웃 되며 실시간 공유됩니다.
* **📋 둘레길별 고유 사진 미션**: 각 코스에 들어갈 때마다 재미있는 사진 미션을 큼지막한 크기(`text-lg`)로 보여주어 참여율을 유도합니다.
* **💖 실시간 '좋아요' 피드백**: 마음에 드는 사진 아래 하트를 꾹 눌러 공감할 수 있습니다.
* **🆔 학번 이름 수집**: 학생들의 소속감을 주기 위해 작성자 칸을 '학번 이름 (예: 30101 홍길동)'으로 표준화했습니다.
* **🔑 관리자 마스터 삭제 기능**: 학생들이 비밀번호를 까먹거나 부적절한 게시물을 지우고 싶을 때, 삭제 비밀번호 입력칸에 **`청농관리자`**를 치면 누구의 게시물이든 즉각 영구 삭제가 가능합니다.
* **💾 초고속 이미지 압축 & 로컬 영구 보존**: 스마트폰 대용량 사진도 브라우저 Canvas API를 통해 고속으로 축소(가로 최대 1024px, JPEG 80% 압축)하여 브라우저 로컬 데이터베이스(`IndexedDB`)에 영구 저장되므로 사이트를 새로고침해도 글과 사진이 보존됩니다.

---

## 🌲 둘레길 코스별 아이콘 및 설명

| 코스 번호 | 코스 이름 | 상징 이모티콘 | 사진 미션 안내 |
| :---: | :---: | :---: | :--- |
| **01** | 첫걸음길 | 👣 | 신입생의 설렘을 가득 담아, 내딛는 첫 발자국이나 신발이 돋보이는 컷 촬영하기! |
| **02** | 100주년길 | 💯 | 학교의 100년 역사를 상징하는 기념비나 역사관 건물을 멋지게 찍어보세요! |
| **03** | 독립운동길 | 🙌 | 독립운동 공헌 비석이나 태극기가 함께 나오는 숭고하고 경건한 순간 찍기! |
| **04** | 농원관길 | 🏫 | 우리의 배움터 농원관 건물과 하늘이 조화롭게 어우러진 전경 담기! |
| **05** | 과수원길 | 🍎 | 계절에 따라 무럭무럭 익어가는 실습 과일이나 신선한 나뭇잎 접사 촬영하기! |
| **06** | 개나리길 | 🌼 | 봄날 샛노랗게 활짝 피어난 개나리 꽃터널 속에서 따뜻한 노란빛 사진 찍기! |
| **07** | 산목련길 | 💮 | 우아하고 새하얗게 꽃망울을 터트린 산목련 꽃을 예쁘게 포착하기! |
| **08** | 숲속오솔길 | 🌳 | 울창한 나뭇잎 틈새로 쏟아지는 눈부신 햇살(빛내림) 풍경 찍기! |
| **09** | 노랑단풍길 | 🍂 | 바닥에 떨어진 샛노란 단풍잎이나 알록달록한 낙엽을 주워 감성 샷 연출하기! |
| **10** | 소나무길 | 🌲 | 하늘을 찌를 듯 꼿꼿이 곧게 자라난 사계절 푸른 소나무 기상 담기! |
| **11** | 벚꽃길 | 🌸 | 봄바람에 눈처럼 화사하게 날리는 벚꽃 비와 아름다운 꽃송이 촬영하기! |
| **12** | 논두렁길 | 🧑‍🌾 | 계절의 흐름에 따라 변화하는 푸른 논밭 혹은 황금빛 이삭 풍경 찍기! |
| **13** | 해솔길 | 💨 | 우거진 소나무 나뭇가지 사이로 걸쳐 있는 영롱한 해를 배경으로 찰칵! |
| **14** | 미래농업길 | 🤖 | 최첨단 스마트 온실이나 최신 농업 설비를 배경으로 과학공학 농업의 모습 담기! |

---

## 🚀 GitHub에 올려 무료로 사이트 여는 법 (GitHub Pages)

이 프로젝트는 순수 Front-End(HTML5/CSS3/JavaScript) 웹 애플리케이션으로, 깃허브에서 무료로 호스팅(배포)하여 친구들과 공유할 수 있습니다.

### 1단계: GitHub 저장소 만들기
1. [GitHub](https://github.com/) 로그인 후 우측 상단의 **`New repository`**를 누릅니다.
2. `Repository name`에 원하는 이름(예: `cj-dullegil`)을 입력합니다.
3. 공개 범위를 **Public**으로 설정하고 **`Create repository`**를 누릅니다.

### 2단계: 파일 업로드하기
1. 생성된 저장소 화면 중앙에 있는 **`uploading an existing file`** 링크를 클릭합니다.
2. 이 폴더의 **`index.html`**, **`app.js`**, **`README.md`** 세 개의 파일을 드래그 앤 드롭하여 올립니다.
3. 하단의 **`Commit changes`** 초록색 버튼을 눌러 저장을 완료합니다.

### 3단계: GitHub Pages 서비스 켜기
1. 저장소 상단의 메뉴 중 **`Settings`** (톱니바퀴 아이콘)로 들어갑니다.
2. 좌측 사이드바에서 **`Pages`** 메뉴를 클릭합니다.
3. `Build and deployment` 섹션 아래의 **`Branch`** 설정을 `None`에서 **`main`** (또는 `master`)으로 바꾼 후 바로 우측의 **`Save`**를 누릅니다.
4. 약 1~2분 정도 기다린 후 새로고침을 하면 상단에 배포된 인터넷 주소가 나타납니다!
   * 예시: `https://[내-깃허브-아이디].github.io/cj-dullegil/`

> [!TIP]
> 배포된 인터넷 주소 링크를 카카오톡 단체방이나 학교 홈페이지에 올리면 전교생이 각자의 스마트폰 브라우저로 접속해 사진첩을 함께 사용할 수 있습니다.

---

## ⚙️ 마스터 관리자 비밀번호
부적절한 게시물이나 잘못 올라온 사진이 있다면 삭제 비밀번호 입력창에 아래 패스워드를 입력하여 삭제할 수 있습니다.
* **관리자 삭제 마스터 비밀번호**: `청농관리자`

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


<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>청농 둘레길 추억 저장소 📸</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
    
    body {
      font-family: 'Noto Sans KR', sans-serif;
      background-color: #f6faf5;
    }
    
    /* Cute heading font accent */
    .cute-font {
      font-family: 'Gaegu', 'Noto Sans KR', sans-serif;
    }

    /* Hide scrollbar but keep functionality */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* SVG Map hover animation - Bouncy Bubbly */
    .group\/node:hover circle {
      transform: scale(1.25);
      transform-origin: center;
      filter: drop-shadow(0 6px 8px rgba(16, 185, 129, 0.3));
    }
    .group\/node circle {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-origin: center;
    }
    
    /* Instagram photo fade animation */
    .fade-in {
      animation: fadeIn 0.6s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
  </style>
</head>
<body class="flex flex-col min-h-screen text-slate-800">

  <!-- Header -->
  <header class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-emerald-100/70 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#" class="flex items-center space-x-2">
        <!-- Sprout Icon representing Cheongju Ag HS -->
        <div class="bg-gradient-to-br from-emerald-500 via-emerald-600 to-lime-400 text-white p-2.5 rounded-2xl shadow-md transform rotate-3 flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3C8.5 7 5 10 5 13.5A7 7 0 1019 13.5C19 10 15.5 7 12 3z"/></svg>
        </div>
        <div>
          <h1 class="text-xl font-black text-cjgreen-700 tracking-tight leading-tight cute-font">청주농업고등학교</h1>
          <p class="text-xs text-emerald-600 font-bold tracking-wider">🌱 청농 둘레길 추억 저장소 🌱</p>
        </div>
      </a>
      <div class="flex items-center space-x-2">
        <a href="#" class="text-xs font-bold text-slate-500 hover:text-cjgreen-600 transition-colors flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-full border border-slate-150">
          <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          홈으로
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content Area -->
  <main class="flex-grow max-w-6xl w-full mx-auto px-4 py-6">

    <!-- HOME VIEW -->
    <div id="home-view" class="space-y-8">
      
      <!-- Hero Banner & Instagram Photo Slide Integrated with Yellow-Green gradient theme -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-lime-500 text-white p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- Background blob decorations -->
        <div class="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-emerald-400 rounded-full opacity-35 blur-3xl"></div>
        <div class="absolute bottom-0 left-1/4 -mb-16 w-80 h-80 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
        
        <!-- Left Side: Cute Introduction -->
        <div class="relative z-10 md:w-1/2 space-y-4 text-left">
          <span class="inline-block px-3 py-1 bg-emerald-700/60 backdrop-blur-sm border border-emerald-400/30 rounded-full text-xs font-bold tracking-wide text-emerald-100">
            🌳 푸른 청농에서 나누는 우리의 일상 🌳
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight cute-font">
            우리 학교 둘레길을 걸으며,<br>
            아름다운 추억을 기록해요 📸
          </h2>
          <p class="text-xs md:text-sm text-emerald-50/90 font-medium leading-relaxed">
            청농의 푸르른 자연을 간직한 14개 코스 둘레길입니다 🏫 친구들과 발걸음을 맞춰 걷고 포토 미션에 도전해 보세요! 아래 지도에서 코스 번호를 클릭하거나 목록에서 선택하면 사진을 바로 구경하고 업로드할 수 있어요 🐾
          </p>
          <div class="pt-2">
            <span class="inline-flex items-center text-xs font-bold text-emerald-800 bg-gradient-to-r from-yellow-100 to-yellow-200 border border-emerald-200/50 px-4 py-2 rounded-full shadow-md" id="total-photos-badge">
              <svg class="w-3.5 h-3.5 mr-1 fill-rose-500 text-rose-500 inline-block" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              지금까지 모인 추억 0장
            </span>
          </div>
        </div>

        <!-- Right Side: Instagram Mockup Slider -->
        <div class="relative z-10 w-full max-w-[280px] bg-white text-slate-800 rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col mx-auto md:mx-0">
          <!-- Card Header (오늘의 청농 & 둘레길이름) -->
          <div class="px-4 py-3 flex items-center space-x-2.5 border-b border-slate-50">
            <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-350 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              🌱
            </div>
            <div>
              <div class="text-xs font-black text-slate-800">오늘의 청농 🌟</div>
              <div id="insta-trail-name" class="text-[9px] font-extrabold text-cjgreen-600">둘레길 이름</div>
            </div>
          </div>
          
          <!-- Image container -->
          <div class="relative aspect-square bg-slate-50 overflow-hidden flex items-center justify-center">
            <!-- Slide Image -->
            <img id="insta-img" src="" alt="오늘의 청농 사진" class="w-full h-full object-cover hidden">
            <!-- Loading/Empty State placeholder -->
            <div id="insta-placeholder" class="text-center p-6 space-y-2">
              <div class="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div class="text-xs font-extrabold text-slate-500">아직 사진이 없어요!</div>
              <div class="text-[10px] text-slate-400">첫 사진을 올려주세요 🐾</div>
            </div>
          </div>

          <!-- Bottom Meta info -->
          <div class="p-3.5 space-y-1.5 bg-white border-t border-slate-50 flex-grow flex flex-col justify-center min-h-[70px]">
            <div class="flex items-center space-x-1.5 hidden" id="insta-likes-container">
              <svg class="w-3.5 h-3.5 fill-rose-500 text-rose-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              <span id="insta-likes" class="text-[10px] font-bold text-slate-600">0</span>
            </div>
            <div class="text-[11px] text-slate-700 line-clamp-2 leading-tight">
              <strong id="insta-author" class="font-extrabold text-slate-900 mr-1">글쓴이</strong>
              <span id="insta-comment" class="text-slate-600 font-medium">설명이 나타납니다.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- SVG Map Card (Cleaned center path, clouds only, font enlarged inside center) -->
      <div class="bg-white border border-emerald-100 rounded-3xl p-6 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div>
            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2 cute-font">
              🗺️ 청농 둘레길 놀이터 지도
            </h3>
            <p class="text-xs text-slate-500">동그란 둘레길 노선 위 번호를 꾹 누르면 바로 사진첩으로 날아가요!</p>
          </div>
        </div>
        
        <!-- Large Decorated Map Container -->
        <div class="relative w-full max-w-lg aspect-square border-4 border-emerald-100 border-dashed rounded-3xl bg-emerald-50/10 overflow-hidden flex items-center justify-center mx-auto shadow-inner p-2">
          <svg viewBox="0 0 320 320" id="map-svg" class="w-full h-full">
            
            <!-- Map Card Outer Double Frame Border inside SVG -->
            <rect x="4" y="4" width="312" height="312" rx="16" fill="none" stroke="#d1fae5" stroke-width="4" stroke-dasharray="6 3" />
            <rect x="8" y="8" width="304" height="304" rx="12" fill="none" stroke="#059669" stroke-width="1.2" />

            <!-- Sky Clouds (구름 장식만 남김) -->
            <g fill="#ffffff" opacity="0.8" transform="translate(45,55)">
              <path d="M 0 10 A 6 6 0 0 1 10 5 A 8 8 0 0 1 24 8 A 6 6 0 0 1 30 15 A 4 4 0 0 1 26 19 L 4 19 A 5 5 0 0 1 0 10 Z" fill="#e2f1e9"/>
            </g>
            <g fill="#ffffff" opacity="0.8" transform="translate(240,40)">
              <path d="M 0 10 A 6 6 0 0 1 10 5 A 8 8 0 0 1 24 8 A 6 6 0 0 1 30 15 A 4 4 0 0 1 26 19 L 4 19 A 5 5 0 0 1 0 10 Z" fill="#e2f1e9"/>
            </g>
            <g fill="#ffffff" opacity="0.8" transform="translate(50,250) scale(0.9)">
              <path d="M 0 10 A 6 6 0 0 1 10 5 A 8 8 0 0 1 24 8 A 6 6 0 0 1 30 15 A 4 4 0 0 1 26 19 L 4 19 A 5 5 0 0 1 0 10 Z" fill="#e2f1e9"/>
            </g>
            <g fill="#ffffff" opacity="0.8" transform="translate(240,240) scale(0.9)">
              <path d="M 0 10 A 6 6 0 0 1 10 5 A 8 8 0 0 1 24 8 A 6 6 0 0 1 30 15 A 4 4 0 0 1 26 19 L 4 19 A 5 5 0 0 1 0 10 Z" fill="#e2f1e9"/>
            </g>

            <!-- Perfect circle for path representing the trail -->
            <circle cx="160" cy="160" r="110" fill="none" stroke="#d1fae5" stroke-width="12" />
            <circle cx="160" cy="160" r="110" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="8 6" />
            
            <!-- Map Center Badge (둘레길 클릭 ! - 폰트 크기 키움) -->
            <g class="cursor-default select-none animate-pulse">
              <!-- Soft Center circle -->
              <circle cx="160" cy="160" r="42" fill="#ffffff" stroke="#10b981" stroke-width="2.5" />
              <!-- Texts inside center - Increased from 11/10 to 14/13 -->
              <text x="160" y="151" font-size="14" font-weight="black" fill="#047857" text-anchor="middle" class="cute-font">둘레길</text>
              <text x="160" y="172" font-size="13" font-weight="black" fill="#047857" text-anchor="middle" class="cute-font">클릭 ! 👆</text>
            </g>
            
            <!-- Nodes are rendered dynamically in JS -->
          </svg>
        </div>
      </div>

      <!-- Trails List Grid Section -->
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-slate-950 flex items-center gap-2 cute-font">
          🌲 14코스 목록 둘러보기
        </h3>
        <!-- Trail Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="trail-grid-container">
          <!-- Dynamically Rendered via JS -->
        </div>
      </div>
    </div>

    <!-- DETAIL VIEW (BOARD) -->
    <div id="detail-view" class="hidden space-y-6">
      <!-- Breadcrumb & Back Button -->
      <div class="flex items-center justify-between">
        <a href="#" class="inline-flex items-center text-sm font-bold text-cjgreen-600 hover:text-cjgreen-700 transition gap-1.5 bg-white border border-emerald-100 px-4 py-2 rounded-full shadow-sm">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          전체 둘레길 목록으로
        </a>
      </div>

      <!-- Trail Title Banner with Integrated Mission (Yellow-Green theme gradient) -->
      <div class="bg-white border border-emerald-100 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div class="space-y-4 flex-grow">
          <div class="flex items-center space-x-3">
            <span id="detail-trail-num" class="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white flex items-center justify-center font-black text-xl shadow-md rotate-3">
              0
            </span>
            <div>
              <h2 id="detail-trail-name" class="text-2xl font-bold text-slate-900 cute-font">둘레길 이름</h2>
              <p id="detail-trail-desc" class="text-sm text-slate-600 mt-0.5">둘레길 상세 설명</p>
            </div>
          </div>
          
          <!-- Photo Mission Box -->
          <div class="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-3.5 flex items-start space-x-2.5 max-w-2xl">
            <div class="bg-gradient-to-r from-yellow-400 to-amber-500 text-white p-1.5 rounded-xl mt-0.5 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z M19.071 4.929a10 10 0 00-14.142 0M12 15v6m-4-2h8"/></svg>
            </div>
            <div>
              <div class="text-[10px] font-extrabold uppercase tracking-wider text-amber-700">이 코스의 포토 미션 ✨</div>
              <!-- Increased font size to text-lg and font-black -->
              <div id="detail-trail-mission" class="text-lg font-black text-emerald-950 mt-0.5">미션 내용이 표시됩니다.</div>
            </div>
          </div>
        </div>
        
        <!-- Unified Single Post Button (Yellow-Green Gradient) -->
        <button onclick="openWriteModal()" class="w-full md:w-auto inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-lime-500 hover:from-emerald-700 hover:to-lime-650 text-white font-bold px-6 py-4 rounded-2xl shadow-md transition-all hover:-translate-y-0.5 gap-2 self-start md:self-center shrink-0">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          이 길에서 사진 올리기
        </button>
      </div>

      <!-- Photos Bulletin Board Grid -->
      <div>
        <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 cute-font">
          📸 실시간 사진첩
        </h3>
        
        <!-- Empty State -->
        <div id="empty-state" class="hidden bg-white border border-dashed border-emerald-200 rounded-3xl p-16 text-center">
          <div class="w-16 h-16 bg-emerald-50 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812-1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <h4 class="text-slate-800 font-bold mb-1 cute-font text-lg">아직 등록된 사진이 없어요!</h4>
          <p class="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            이 둘레길의 첫 번째 사진첩의 주인공이 되어 보세요!<br>
            우측 상단의 <strong class="text-cjgreen-600 font-bold">'이 길에서 사진 올리기'</strong> 버튼을 눌러 사진을 등록할 수 있습니다 🐾
          </p>
        </div>

        <!-- Photo Grid Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="photo-grid-container">
          <!-- Dynamically Rendered via JS -->
        </div>
      </div>
    </div>

  </main>

  <!-- Footer -->
  <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-12 text-center text-xs">
    <div class="max-w-6xl mx-auto px-4 space-y-3">
      <div class="flex justify-center items-center space-x-2 text-slate-200 font-semibold cute-font text-sm">
        <svg class="w-4 h-4 text-emerald-400 animate-pulse" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3C8.5 7 5 10 5 13.5A7 7 0 1019 13.5C19 10 15.5 7 12 3z"/></svg>
        <span>청주농업고등학교 둘레길 기록 프로젝트</span>
      </div>
      <p>본 사이트는 브라우저 내부 저장소(IndexedDB)를 사용하여 사진이 저장되는 웹 프로그램입니다.</p>
      <p class="text-slate-500">&copy; 2026 Cheongju Agricultural High School. All rights reserved.</p>
    </div>
  </footer>

  <!-- WRITE MODAL -->
  <div id="write-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeWriteModal()"></div>
    <!-- Modal Content -->
    <div class="relative bg-white w-full max-w-lg mx-4 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      <!-- Header with Yellow-Green Gradient -->
      <div class="bg-gradient-to-r from-emerald-600 to-lime-500 text-white px-6 py-4.5 flex items-center justify-between">
        <h3 class="font-bold text-lg flex items-center gap-2 cute-font text-xl">
          사진 등록하기 🐾
        </h3>
        <button onclick="closeWriteModal()" class="text-white/80 hover:text-white transition flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Form (Scrollable body) -->
      <form id="write-form" class="p-6 space-y-4 overflow-y-auto no-scrollbar flex-grow" onsubmit="handlePostSubmit(event)">
        <!-- Author (Changed label to '학번 이름' per feedback) -->
        <div>
          <label for="post-author" class="block text-xs font-bold text-slate-700 mb-1">학번 이름 <span class="text-rose-500">*</span></label>
          <input type="text" id="post-author" required placeholder="학번과 이름을 입력하세요 (예: 30101 홍길동)" 
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cjgreen-600 focus:border-transparent">
        </div>

        <!-- Password -->
        <div>
          <label for="post-password" class="block text-xs font-bold text-slate-700 mb-1">비밀번호 <span class="text-rose-500">*</span> <span class="font-normal text-slate-400">(삭제 시 본인 확인용)</span></label>
          <input type="password" id="post-password" required placeholder="비밀번호를 입력하세요" 
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cjgreen-600 focus:border-transparent">
        </div>

        <!-- Photo Select -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">사진 파일 첨부 <span class="text-rose-500">*</span></label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-2xl hover:border-cjgreen-600 transition-colors relative cursor-pointer group">
            <input type="file" id="post-image" accept="image/*" required class="absolute inset-0 opacity-0 cursor-pointer" onchange="previewImage(event)">
            <div class="space-y-1 text-center" id="upload-placeholder">
              <svg class="mx-auto h-12 w-12 text-slate-400 group-hover:text-cjgreen-600 transition-colors" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <div class="flex text-sm text-slate-600 justify-center">
                <span class="relative rounded-md font-bold text-cjgreen-600 hover:text-cjgreen-700">파일 찾기</span>
                <p class="pl-1">또는 이미지 놓기</p>
              </div>
              <p class="text-xs text-slate-400">PNG, JPG, GIF 파일</p>
            </div>
            <!-- Preview Box -->
            <div id="upload-preview-container" class="hidden absolute inset-0 bg-white flex flex-col items-center justify-center p-2 rounded-2xl">
              <img id="upload-preview-img" src="" alt="업로드 이미지 미리보기" class="h-full max-w-full object-contain rounded-xl border border-slate-100">
              <button type="button" onclick="resetImageUpload(event)" class="absolute top-2 right-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full p-1.5 shadow-md transition flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Caption -->
        <div>
          <label for="post-comment" class="block text-xs font-bold text-slate-700 mb-1">설명 및 소감 <span class="text-rose-500">*</span></label>
          <textarea id="post-comment" required rows="3" placeholder="이 사진에 대한 짧은 이야기나 소감을 남겨주세요." 
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cjgreen-600 focus:border-transparent resize-none"></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-3 pt-2">
          <button type="button" onclick="closeWriteModal()" class="w-1/2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-xl text-sm transition-colors">
            취소
          </button>
          <button type="submit" class="w-1/2 bg-gradient-to-r from-emerald-600 to-lime-500 hover:from-emerald-700 hover:to-lime-650 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-sm flex items-center justify-center gap-1.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            게시물 등록
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- LIGHTBOX / DETAIL VIEW MODAL -->
  <div id="lightbox-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-955/90 backdrop-blur-sm" onclick="closeLightbox()"></div>
    
    <!-- Close Button -->
    <button onclick="closeLightbox()" class="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition flex items-center justify-center">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>

    <!-- Modal Content -->
    <div class="relative w-full max-w-4xl mx-4 flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]">
      <!-- Image Container -->
      <div class="md:w-3/5 bg-slate-955 flex items-center justify-center p-2 min-h-[300px] max-h-[50vh] md:max-h-none">
        <img id="lightbox-img" src="" alt="게시판 사진 확대" class="max-w-full max-h-full object-contain">
      </div>
      
      <!-- Meta Information Panel -->
      <div class="md:w-2/5 p-6 flex flex-col justify-between bg-white border-t md:border-t-0 md:border-l border-slate-100">
        <div class="space-y-4 overflow-y-auto no-scrollbar max-h-[35vh] md:max-h-none">
          <!-- Trail Badge -->
          <div class="inline-flex items-center gap-1 bg-cjgreen-50 text-cjgreen-700 text-xs px-3 py-1.5 rounded-full font-bold border border-cjgreen-100">
            <span id="lightbox-trail-name">소나무길</span>
          </div>

          <!-- Author Info -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
              <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <div>
              <div class="font-bold text-slate-900" id="lightbox-author">작성자</div>
              <div class="text-xs text-slate-400" id="lightbox-date">2026-08-28 14:22</div>
            </div>
          </div>

          <hr class="border-slate-100">

          <!-- Comment -->
          <div class="text-slate-700 text-sm leading-relaxed whitespace-pre-line" id="lightbox-comment">
            사진 설명글이 들어갈 자리입니다.
          </div>
        </div>

        <!-- Action Panel (Bottom) -->
        <div class="pt-6 border-t border-slate-100 flex justify-between items-center gap-2">
          <!-- Lightbox Like Button -->
          <button id="lightbox-like-btn" class="inline-flex items-center text-xs font-semibold text-rose-600 hover:text-rose-700 transition gap-1.5 bg-rose-50 hover:bg-rose-100 px-4 py-2.5 rounded-xl border border-rose-100">
            <svg class="w-4 h-4 text-rose-500 fill-rose-500" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            좋아요 <span id="lightbox-likes-count">0</span>
          </button>
          
          <button id="lightbox-delete-btn" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition gap-1 px-3 py-2.5 rounded-xl border border-slate-100">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            사진 삭제
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- PASSWORD DELETE MODAL -->
  <div id="delete-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeDeleteModal()"></div>
    
    <!-- Content Box -->
    <div class="relative bg-white w-full max-w-sm mx-4 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-4 z-10">
      <div class="flex items-center space-x-3 text-rose-600">
        <div class="bg-rose-100 p-2.5 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <h3 class="font-bold text-lg text-slate-900 cute-font text-xl">게시물 삭제</h3>
      </div>
      
      <p class="text-sm text-slate-600 leading-relaxed">
        게시물을 완전히 삭제하시겠습니까? 등록할 때 입력한 비밀번호 또는 관리자 비밀번호를 입력해주세요.
      </p>

      <form id="delete-form" onsubmit="handlePostDelete(event)" class="space-y-4">
        <input type="hidden" id="delete-post-id">
        <div>
          <label for="delete-password" class="block text-xs font-bold text-slate-700 mb-1">비밀번호 입력</label>
          <input type="password" id="delete-password" required placeholder="비밀번호를 입력하세요" 
            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent">
        </div>
        <div class="flex space-x-3">
          <button type="button" onclick="closeDeleteModal()" class="w-1/2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl text-sm transition-colors">
            취소
          </button>
          <button type="submit" class="w-1/2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold py-2.5 rounded-xl text-sm transition-all shadow-sm flex items-center justify-center gap-1">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            삭제하기
          </button>
        </div>
      </form>
    </div>
  </div>



  <!-- Custom Javascript Core File -->
  <script src="app.js"></script>
</body>
</html>
