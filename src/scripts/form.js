// ===============================
// FORMULÁRIO FALE COMIGO
// ===============================

$(document).ready(function () {

    // ===============================
    // MÁSCARA DE TELEFONE (BR)
    // ===============================
    $('#telefone').mask('(00) 00000-0000', {
        onKeyPress: function (val, e, field, options) {
            field.mask(
                val.length === 14 ? '(00) 0000-0000' : '(00) 00000-0000',
                options
            );
        }
    });

    // ===============================
    // VALIDAÇÃO DO FORMULÁRIO
    // ===============================
    $('#form-contato').validate({

        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                minlength: 14
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },

        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                minlength: "Seu nome deve ter pelo menos 3 letras"
            },
            email: {
                required: "Informe seu email",
                email: "Digite um email válido"
            },
            telefone: {
                minlength: "Digite um telefone válido com DDD"
            },
            mensagem: {
                required: "Escreva sua mensagem",
                minlength: "A mensagem deve ter pelo menos 10 caracteres"
            }
        },

        errorElement: "small",
        errorClass: "error-text",

        highlight: function (element) {
            $(element).addClass('input-error');
        },

        unhighlight: function (element) {
            $(element).removeClass('input-error');
        },

        submitHandler: function (form) {

            // 🔄 Feedback visual simples
            const $button = $(form).find('button[type="submit"]');
            $button.prop('disabled', true).text('Enviando...');

            // ⏱ Simulação de envio (trocar por AJAX ou backend depois)
            setTimeout(function () {
                alert('Mensagem enviada com sucesso!');

                form.reset();
                $button.prop('disabled', false).text('Enviar');
            }, 1000);
        }

    });

});
