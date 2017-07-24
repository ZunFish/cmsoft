function checkUsername() {
    var username = document.getElementById("username").value;
    if (username == "" || username == null) {
        document.getElementById("alerttxt1").innerHTML = "请先填写用户名！";
        return false;
    }
    switch (isUsername(username)) {
        case 1:
            {
                document.getElementById("alerttxt1").innerHTML = "用户名不能以数字开头！";
                return false;
            }
        case 2:
            {
                document.getElementById("alerttxt1").innerHTML = "用户名长度必需为6-20位之间！";
                return false;
            }
        case 3:
            {
                document.getElementById("alerttxt1").innerHTML = "用户名只能包含_,英文字母，数字！";
                return false
            }
        case 4:
            {
                document.getElementById("alerttxt1").innerHTML = "用户名只能包含_,英文字母，数字！";
                return false;
            }
        default:
            {
                document.getElementById("alerttxt1").innerHTML = "<img src='css/img/true.png' width='20' height='20'>";
                return true;
            }

    }
    return true;
}

function chooseThis(name) {
    document.getElementById("username").value = name;
}

function isUsername(username) {
    if (/^\d.*$/.test(username)) {
        return 1;
    }
    if (!/^.{6,20}$/.test(username)) {
        return 2;
    }
    if (!/^[\w_]*$/.test(username)) {
        return 3;
    }
    if (!/^([a-z]|[A-Z])[\w_]{5,19}$/.test(username)) {
        return 4;
    }
    return 0;
}

function checkUserKey() {
    var userkey = document.getElementById('userkey').value;
    document.getElementById('alerttxt2').innerHTML = "";
    if (userkey == "") {
        document.getElementById('alerttxt2').innerHTML = "请输入您的密码！";
    } else if (userkey.length < 6) {
        document.getElementById('alerttxt2').innerHTML = "输入的密码应为六位以上！";
    } else {
        document.getElementById("alerttxt2").innerHTML = "<img src='css/img/true.png' width='20' height='20'>";
    }
}
