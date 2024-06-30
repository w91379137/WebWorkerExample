const STATIC_NAME = 'static-2'

this.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_NAME)
      // cache.add(file path)
      cache.addAll([
        './service_index.html'
      ])
    })()
  )
  self.skipWaiting()
});

var id = 0;
const doWork = () => {
  // console.log("doWork");
  // fetch('/log?page=service_worker')
  // .then((response) => {
  //     console.log(response); 
  // })
  // .catch((error) => {
  //     console.log(`Error: ${error}`);
  // })
  // postMessage("doWork");
}

this.addEventListener('activate', function(event){
  console.log('activated!')
  id = setInterval(doWork, 5000);
});

this.addEventListener('fetch', (event) => {

  if (event.request.url.includes('/delay')) {
    const result_p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Response('delayed response'))
      }, 5000)
    })
    event.respondWith(result_p);
    return;
  }
  else {
    // https://ithelp.ithome.com.tw/articles/10193430
    const result_p = fetch(event.request)
    event.respondWith(result_p);
  }
});


