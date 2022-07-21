const signUp = () => {
    // 빈 값 유효성 검사
    if(! $('#email').val()){
        alert("이메일을 입력해주세요.");
        $('#email').focus();
        return;
    }

    if(! $('#password').val()){
        alert("비밀번호를 입력해주세요.");
        $('#password').focus();
        return;
    }

    if(! $('#rePassword').val()){
        alert("비밀번호 확인을 입력해주세요.");
        $('#rePassword').focus();
        return;
    }

    if(! $('#name').val()){
        alert("이름을 입력해주세요.");
        $('#name').focus();
        return;
    }

    // 비밀번호 일치 확인
    if( $('#password').val() !== $('#rePassword').val()){
        alert("비밀번호가 일치하지 않습니다.");
        $('#rePassword').val("");  // 값 비워주기
        $('#rePassword').focus();
        return;
    }

    // form 값 전체 가져오기
    let signUpData = $("#signUpForm").serialize();

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/user/signUp",
        data: signUpData,
        success: (res) => {
            alert(res.result); // 응답 처리
            location.href = "/view/user/login.html";  //로그인 페이지로 이동
        }
    });

}