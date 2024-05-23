import{i as c,S as f}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p=o=>o.reduce((s,{tags:r,webformatURL:n,largeImageURL:e,likes:t,views:a,comments:u,downloads:d})=>s+`<li class="photo-container">
      <a href=${e} class="card-link js-card-link">
          <img class="photo" src="${n}" alt="${r}" >
      </a>
      <div class="info">
          <div class="info-item">
              <span class="title">Likes</span>
              <span class="info">${t}</span>
          </div>
          <div class="info-item">
              <span class="title">Views</span>
              <span class="info">${a}</span>
          </div>
          <div class="info-item">
              <span class="title">Comments</span>
              <span class="info">${u}</span>
          </div>
          <div class="info-item">
              <span class="title">Downloads</span>
              <span class="info">${d}</span>
          </div>
      </div>
  </li>
      `,""),m="43981018-e90bba841625934206eceb401",h="https://pixabay.com/api/",y=o=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:21});return fetch(`${h}/?${s}`).then(r=>{if(!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()})},i=document.querySelector(".gallery"),g=document.querySelector(".form"),l=document.querySelector(".loader");function L(o){o.preventDefault();const s=o.target.elements.text.value.trim();if(i.innerHTML="",s==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});i.innerHTML="",l.classList.remove("is-hidden"),y(s).then(r=>{r.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.innerHTML=p(r.hits),new f(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh()}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
