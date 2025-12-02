---
layout: default
title: 가이드 글 보러가기
description: 각종 계산기·지식·인사이트 가이드 글을 모아 제공합니다.
permalink: /guide/
---

<h1>📘 가이드 글 보러가기</h1>
<p class="muted">계산기 공식, 생활·재테크 지식, 해설 가이드를 모두 모아 빠르게 찾아볼 수 있는 통합 가이드 페이지입니다.</p>

<!-- 🔍 검색창 -->
<input type="text" id="guide-search" placeholder="검색: 제목 또는 설명 입력" class="search-input">

<!-- 🔖 태그 필터 -->
<div id="tag-container" class="tag-container"></div>

<!-- 🔽 정렬 옵션 -->
<div class="sort-area">
  <select id="sort-select">
    <option value="latest">🆕 최신순</option>
    <option value="title">🔤 제목순</option>
  </select>
</div>

<!-- 🗂 섹션(카테고리) 자동 생성 -->
<div id="guide-sections"></div>

<style>
.search-input {
  width: 100%;
  padding: 12px 14px;
  font-size: 15px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  margin: 12px 0 20px;
}
.tag-container { margin-bottom: 16px; }
.tag {
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 13px;
  margin: 4px;
  cursor: pointer;
}
.tag.active { background: #4f46e5; color: white; }

.sort-area { margin-bottom: 20px; }
#sort-select {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
}

.guide-section-title {
  font-weight: 800;
  font-size: 22px;
  margin: 32px 0 12px;
  color: #1e293b;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.guide-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 16px;
  border-radius: 12px;
  text-decoration: none;
  transition: .2s ease;
}
.guide-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,.08);
  transform: translateY(-2px);
}
.guide-title { font-weight: 700; color: #111827; margin-bottom: 6px; }
.guide-desc { color: #64748b; font-size: 14px; }
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // Jekyll guide 데이터 로드
  const guides = [
    {% for post in site.guide %}
    {
      title: "{{ post.title | escape }}",
      url: "{{ post.url }}",
      desc: "{{ post.description | strip_html | escape }}",
      tags: [{% for tag in post.tags %}"{{tag}}",{% endfor %}],
      category: "{{ post.category | default: '기타' }}",
      date: "{{ post.date | default: '' }}"
    },
    {% endfor %}
  ];

  const sections = {};
  const tagSet = new Set();

  // 섹션 자동 분류 + 태그 수집
  guides.forEach(g => {
    const c = g.category || "기타";
    if (!sections[c]) sections[c] = [];
    sections[c].push(g);

    g.tags.forEach(t => tagSet.add(t));
  });

  // 태그 렌더링
  const tagContainer = document.getElementById("tag-container");
  tagSet.forEach(t => {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = "#" + t;
    tagEl.dataset.tag = t;
    tagContainer.appendChild(tagEl);
  });

  // 섹션 렌더링 함수
  function renderSections(filteredGuides = guides) {
    const container = document.getElementById("guide-sections");
    container.innerHTML = "";

    const sectionMap = {};
    filteredGuides.forEach(g => {
      const c = g.category || "기타";
      if (!sectionMap[c]) sectionMap[c] = [];
      sectionMap[c].push(g);
    });

    Object.keys(sectionMap).forEach(category => {
      const secDiv = document.createElement("div");
      secDiv.innerHTML = `<h2 class="guide-section-title">${category}</h2>`;

      const grid = document.createElement("div");
      grid.className = "guide-grid";

      sectionMap[category].forEach(g => {
        const card = document.createElement("a");
        card.className = "guide-card";
        card.href = g.url;
        card.innerHTML = `
          <div class="guide-title">${g.title}</div>
          <div class="guide-desc">${g.desc}</div>
        `;
        grid.appendChild(card);
      });

      secDiv.appendChild(grid);
      container.appendChild(secDiv);
    });
  }

  // 초기 렌더링
  renderSections();

  // 검색 기능
  document.getElementById("guide-search").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = guides.filter(g =>
      g.title.toLowerCase().includes(keyword) ||
      g.desc.toLowerCase().includes(keyword)
    );
    renderSections(filtered);
  });

  // 태그 필터 기능
  tagContainer.addEventListener("click", function (e) {
    if (!e.target.classList.contains("tag")) return;

    const tag = e.target.dataset.tag;
    const active = e.target.classList.toggle("active");

    const activeTags = [...document.querySelectorAll(".tag.active")].map(t =>
      t.dataset.tag
    );

    let filtered = guides;
    if (activeTags.length > 0) {
      filtered = guides.filter(g =>
        activeTags.every(t => g.tags.includes(t))
      );
    }
    renderSections(filtered);
  });

  // 정렬 기능
  document.getElementById("sort-select").addEventListener("change", function () {
    let sorted = [...guides];
    if (this.value === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    renderSections(sorted);
  });

});
</script>
