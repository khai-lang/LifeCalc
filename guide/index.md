---
layout: default
title: 가이드 글 보러가기
description: 각종 계산기·생활·재테크 지식을 카드형 가이드로 모아 한 번에 볼 수 있는 허브 페이지입니다.
permalink: /guide/
---

<div class="guide-hub">
  <h1>📘 가이드 글 보러가기</h1>
  <p class="muted">
    계산기 사용법, 공식 해설, 생활·재테크 팁을 모아둔 가이드입니다.  
    아래 검색창과 태그, 정렬 기능을 이용해 원하는 글을 빠르게 찾아보세요.
  </p>

  <input type="text" id="guide-search" placeholder="검색: 제목 또는 설명 입력" class="search-input">

  <div id="tag-container" class="tag-container"></div>

  <div class="sort-area">
    <label for="sort-select" class="sort-label">정렬</label>
    <select id="sort-select">
      <option value="latest">🆕 최신순</option>
      <option value="title">🔤 제목순</option>
    </select>
  </div>

  <div id="guide-sections"></div>
</div>

<style>
.guide-hub{
  margin-top:8px;
}

.guide-hub h1{
  font-size:1.6rem;
  margin-bottom:6px;
}

.guide-hub .muted{
  color:#6b7280;
  font-size:0.95rem;
  margin-bottom:14px;
}

.search-input{
  width:100%;
  max-width:420px;
  padding:10px 14px;
  border-radius:999px;
  border:1px solid #d1d5db;
  font-size:0.95rem;
  margin:10px 0 18px;
}

.tag-container{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-bottom:16px;
}

.tag{
  padding:4px 10px;
  border-radius:999px;
  border:1px solid #e5e7eb;
  font-size:0.85rem;
  background:#f9fafb;
  cursor:pointer;
  transition:background .15s,border-color .15s,color .15s;
}

.tag.active{
  background:#0b4c74;
  border-color:#0b4c74;
  color:#fff;
}

.sort-area{
  margin-bottom:16px;
}

.sort-label{
  font-size:0.85rem;
  color:#6b7280;
  margin-right:8px;
}

.sort-area select{
  padding:6px 10px;
  border-radius:10px;
  border:1px solid #d1d5db;
  font-size:0.9rem;
}

.guide-section-title{
  margin:22px 0 10px;
  font-size:1.2rem;
}

.guide-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:16px;
  margin-bottom:10px;
}

.guide-card{
  display:block;
  background:#fff;
  border-radius:14px;
  border:1px solid #e5e7eb;
  padding:14px 16px;
  box-shadow:0 4px 12px rgba(15,23,42,0.06);
  text-decoration:none;
  transition:transform .12s ease, box-shadow .12s ease;
}

.guide-card:hover{
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(15,23,42,0.10);
}

.guide-title{
  font-weight:600;
  margin-bottom:6px;
}

.guide-desc{
  font-size:0.9rem;
  color:#4b5563;
  margin-bottom:10px;
}

.guide-meta{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0.8rem;
  color:#6b7280;
}

.guide-badge{
  padding:3px 8px;
  border-radius:999px;
  background:#f3f4ff;
}

.guide-btn{
  padding:5px 10px;
  border-radius:999px;
  background:#ff6a00;
  color:#fff;
  font-weight:600;
}

@media(max-width:600px){
  .guide-grid{ grid-template-columns:1fr; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // 🔹 Jekyll에서 guide 카테고리 글 불러오기
  const guides = [
    {% for post in site.categories.guide %}
    {
      title: {{ post.title | jsonify }},
      url: {{ post.url | relative_url | jsonify }},
      desc: {{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 120 | jsonify }},
      tags: [{% for tag in post.tags %}{{ tag | jsonify }}{% unless forloop.last %},{% endunless %}{% endfor %}],
      category: {{ post.section | default: "기타 가이드" | jsonify }},
      date: "{{ post.date | date_to_xmlschema }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  const tagSet = new Set();
  guides.forEach(g => g.tags.forEach(t => tagSet.add(t)));

  const tagContainer = document.getElementById("tag-container");
  tagSet.forEach(t => {
    const el = document.createElement("span");
    el.className = "tag";
    el.textContent = "#" + t;
    el.dataset.tag = t;
    tagContainer.appendChild(el);
  });

  const sectionsEl = document.getElementById("guide-sections");
  const searchInput = document.getElementById("guide-search");
  const sortSelect = document.getElementById("sort-select");

  function render(list){
    sectionsEl.innerHTML = "";
    const map = {};
    list.forEach(g => {
      const key = g.category || "기타 가이드";
      (map[key] ||= []).push(g);
    });

    Object.keys(map).forEach(cat => {
      const sec = document.createElement("section");
      sec.innerHTML = `<h2 class="guide-section-title">${cat}</h2>`;
      const grid = document.createElement("div");
      grid.className = "guide-grid";

      map[cat].forEach(g => {
        const card = document.createElement("a");
        card.href = g.url;
        card.className = "guide-card";
        card.innerHTML = `
          <div class="guide-title">${g.title}</div>
          <div class="guide-desc">${g.desc}</div>
          <div class="guide-meta">
            <span class="guide-badge">${g.category}</span>
            <span class="guide-btn">자세히 보기</span>
          </div>
        `;
        grid.appendChild(card);
      });

      sec.appendChild(grid);
      sectionsEl.appendChild(sec);
    });
  }

  function applyFilters(){
    const keyword = searchInput.value.toLowerCase();
    const activeTags = [...document.querySelectorAll(".tag.active")].map(t => t.dataset.tag);

    let result = guides.filter(g =>
      !keyword ||
      g.title.toLowerCase().includes(keyword) ||
      g.desc.toLowerCase().includes(keyword)
    );

    if(activeTags.length){
      result = result.filter(g => activeTags.every(t => g.tags.includes(t)));
    }

    if(sortSelect.value === "title"){
      result.sort((a,b)=>a.title.localeCompare(b.title));
    }else{
      result.sort((a,b)=>new Date(b.date) - new Date(a.date));
    }

    render(result);
  }

  searchInput.addEventListener("input", applyFilters);
  sortSelect.addEventListener("change", applyFilters);
  tagContainer.addEventListener("click", e => {
    if(!e.target.classList.contains("tag")) return;
    e.target.classList.toggle("active");
    applyFilters();
  });

  applyFilters();
});
</script>
