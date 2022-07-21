$(document).ready(( ) => {
    let header = `<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
        <img src = "https://velog.velcdn.com/images/yuulee112/profile/5ad783df-71fc-4d2a-a3a9-28cecc87cfb4/%EC%B2%B4%ED%81%AC%ED%91%9C%EC%8B%9C.png"/>
    </svg>
    </a>

    <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="/view/posts/findPose.html" class="nav-link active" aria-current="page" href="#">수강 찾기</a>
        </li>
        <li class="nav-item">
          <a href="/view/posts/addPose.html"  class="nav-link" href="#">자세 등록</a>
        </li>
        <li class="nav-item">
          <a href="/view/posts/mypage.html"  class="nav-link" href="#">마이페이지</a>
        </li>
      </ul>

    <div class="col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2" onclick="location.href='/view/user/login.html'">로그아웃</button>
    </div>
  </header>`;

    $(".container").prepend(header);
})