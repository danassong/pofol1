(function($){
    
    
    $('form').submit(function(){
        //아이디 유효성 체크: 글자수 6~10 / 특수문자 제외
        var id_lbl = $('#id_lbl').val()
        if (id_lbl.length >= 6 && id_lbl.length <= 10) {
            for (var i = 0; i < id_lbl.length; i++) {
                var ch = id_lbl.charAt(i)
                if (!(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z')) {
                    alert ('아이디는 소문자와 숫자만 가능합니다')
                    $('#id_lbl').css({
                        border: '1px solid #4B637C'
                    })
                    $('#id_lbl').focus()
                    $('#id_lbl').select()
                    return false
                }
            }
        } else {
            alert ('아이디는 6자 이상 10자 이하 입력하세요')
            $('#id_lbl').focus()
            $('#id_lbl').select()
            return false
        }

        

        // 비밀번호 유효성 체크
        // 첫글자는 대소문자 /영문, 숫자, 특수문자 중 두가지 이상 조합 10~12
        var pass1 = $('#pw_lbl1').val()
        var pass2 = $('#pw_lbl2').val()

        var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
        // ?= 처음부터 조사하라
        // . : 임의의 모든 문자(숫자, 특수문자, 대소문자)
        // * : 0번 이상 나올 수 있음
        // ^ : 대괄호[] 안의 ^는 NOT을 의미함

        if ( pass1.length >= 10 && pass1.length <= 12 ) {
            if ( !check1. test(pass1)) {
                alert ('비밀번호 첫글자는 영문 대소문자만 해당되며, 반드시 숫자나 특수문자 중 1개 이상 조합해주세요')
                $('#pw_lbl1').css ({
                    border: '1px solid #f00'
                })
                $('#pw_lbl1').focus()
                $('#pw_lbl1').select()
                
                return false
            }
        } else {
            alert ('비밀번호 글자수는 10~12글자')
            $('#pw_lbl1').css ({
                border: '1px solid #f00'
            })
            $('#pw_lbl1').focus()
            $('#pw_lbl1').select()

            return false
        }

        // 비밀번호와 비밀번호 확인 일치하는지 점검
        if ( pass2.length === 0) {
            alert ('비밀번호 확인을 입력하지 않았습니다')
            $('#pw_lbl2').css ({
                border: '1px solid #f00'
            })
            $('#pw_lbl2').focus()
            $('#pw_lbl2').select()
                
            return false
        } else if ( pass1 != pass2 ) {
            alert ('비밀번호를 정확히 입력해주세요')
            $('#pw_lbl2').css ({
                border: '1px solid #f00'
            })
            $('#pw_lbl2').focus()
            $('#pw_lbl2').select()
                
            return false
        }


        // 이름은 한글만 입력(정규표현식 p.612~p.613)
        // ^ : 시작 표시
        // $ : 끝 표시
        // + : 한번 이상 포함
        // 정규표현식.test(입력한내용) : 정규표현식에 맞는지 내용을 검사
        var name = $('#name_lbl').val()
        var namech = /^[가-힣]+$/
        if ( !(namech.test(name)) ) {
            alert('이름을 정확히 입력하세요')
            $('#name_lbl').focus()
            $('#name_lbl').select()
            return false
        }



        var phone_lbl = $('#phone_lbl').val()
        if (phone_lbl.length == 11) {
            for (var i = 0; i < phone_lbl.length; i++) {
                var ch = phone_lbl.charAt(i)
                if (!(ch >= '0' && ch <= '9')) {
                    alert ('휴대폰번호 11자리를 입력하세요')
                    $('#phone_lbl').css({
                        border: '1px solid #4B637C'
                    })
                    $('#phone_lbl').focus()
                    $('#phone_lbl').select()
                    return false
                }
            }
        } else {
            alert ('휴대폰번호 11자리를 입력하세요')
            $('#phone_lbl').focus()
            $('#phone_lbl').select()
            return false
        }



        // 이메일 유효성 체크
        var email = $('#email_lbl').val()
        var emailchk = /^[a-zA-Z0-9]+$/   // 특수문자 제외 
        if ( !emailchk.test(email) ) {
            alert('이메일 형식에 맞지 않습니다')
            $('#email_lbl').focus()
            $('#email_lbl').select()
            return false
        }

        // 도메인타입 유효성 체크
        var domain = $('#domain').val()
        var domainchk = /^[a-zA-Z0-9]+[\.][a-z]+$/
        if ( domain.length === 0 ) {
            alert('도메인을 선택하세요')
            $('#email_choice').focus()
            return false
        } else {
            if ( !domainchk.test(domain) ) {
                alert('이메일 형식에 맞지 않습니다')
                $('#email_choice').focus()
                return false
            }
        }

        return false
    })

    return false
})