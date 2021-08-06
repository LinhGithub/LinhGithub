// doi tuong validator
function Validator (options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    // ham thuc hien validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.fromGroupSelector).querySelector('.help-block')
        var errorMessage = rule.test(inputElement.value);
        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.fromGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.fromGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // lay element form can validate
    var formElement = document.querySelector(options.form);
    if(formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFromValid = true;

            //lap qua tung rule va validate
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);

                if(!isValid) {
                    isFromValid = false;
                }
            });

            if(isFromValid) {
                console.log(document.querySelector('.btn-style').value);
                if(document.querySelector('.btn-style').value == "Đăng ký")
                    alert("Đăng ký thành công!!!");
                else if(document.querySelector('.btn-style').value == "Đăng nhập"){
                    alert("Đăng nhập thành công!!!");
                } else if (document.querySelector('.btn-style').value == "Gửi tin nhắn"){
                    alert("Gửi tin nhắn thành công!!!");
                } else if(document.querySelector('.btn-style').value == "Gửi bình luận"){
                    alert("Gửi bình luận thành công!!!");
                }
            }
        }

        //lap qua moi rule va xu ly
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                //xu ly truong hop blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                //xu ly moi khi nguoi dung nhap input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.fromGroupSelector).querySelector('.help-block')
                    errorElement.innerText = '';
                    errorElement.parentElement.classList.remove('invalid');
                }
            }
        })
    }
}

// dinh nghia cac rules
// nguyen tac rules
//1. khi co loi => tra ra message loi
//2. Khi hop le => ko tra ra
Validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Không được để trống'
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}

Validator.isPassword = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    };
}

Validator.isTelephone = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return regex.test(value) ? undefined : 'Trường này phải là số điện thoại'
        }
    }
}