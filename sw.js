// sw.js (최상위 폴더에 위치)
const CACHE_NAME = 'studycampus-v1';

// 브라우저가 서비스 워커를 설치할 때 실행
self.addEventListener('install', (event) => {
    console.log('서비스 워커 설치 완료');
    self.skipWaiting();
});

// 네트워크 요청을 가로채서 처리 (현재는 기본 통과)
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
// js/common.js 하단에 추가
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('PWA 서비스 워커가 등록되었습니다.', registration.scope);
            })
            .catch((error) => {
                console.log('서비스 워커 등록 실패:', error);
            });
    });
}