document.addEventListener('DOMContentLoaded', function() {
  // Função para localizar o formulário dinamicamente
  function findForm() {
    return document.querySelector('form[id^="product-form-"]');
  }

  // Função para localizar elementos dentro do formulário
  function getFormElements(form) {
    return {
      dateVisible: form.querySelector('#dataVisivel'),
      dateHidden: form.querySelector('#dataHidden'),
      errorMessage: form.querySelector('.data-error-message'),
      submitButton: form.querySelector('.add-to-cart__button')
    };
  }

  // Função para inicializar a validação
  function initializeValidation() {
    const form = findForm();
    if (!form) {
      console.warn('Formulário de produto não encontrado.');
      return;
    }

    const elements = getFormElements(form);
    const { dateVisible, dateHidden, errorMessage, submitButton } = elements;

    if (!dateVisible || !dateHidden || !errorMessage || !submitButton) {
      console.warn('Elementos necessários não encontrados no formulário.');
      return;
    }

    // Desativar validação HTML5
    form.setAttribute('novalidate', 'true');

    // Abrir o seletor de data
    dateVisible.addEventListener('click', function() {
      try {
        dateVisible.showPicker();
      } catch (e) {
        dateVisible.focus();
      }
    });

    // Sincronizar data oculta e validar
    dateVisible.addEventListener('change', function() {
      if (dateVisible.value) {
        dateHidden.value = dateVisible.value;
        errorMessage.style.display = 'none';
        dateVisible.setCustomValidity('');
      } else {
        dateHidden.value = '';
        errorMessage.style.display = 'block';
        dateVisible.setCustomValidity('Por favor, insira a Data de Ativação.');
      }
    });

    // Bloquear envio do formulário
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (!dateVisible.value) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, insira a Data de Ativação.';
        dateVisible.setCustomValidity('Por favor, insira a Data de Ativação.');
        dateVisible.focus();
        return;
      }

      // Validar outros campos obrigatórios
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      requiredFields.forEach(field => {
        if (!field.value) {
          isValid = false;
          field.setCustomValidity('Este campo é obrigatório.');
        } else {
          field.setCustomValidity('');
        }
      });

      if (!isValid) {
        errorMessage.style.display = 'block';
        dateVisible.focus();
        return;
      }

      // Enviar via AJAX
      errorMessage.style.display = 'none';
      const formData = new FormData(form);
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === 422 || data.status === 'bad_request') {
            errorMessage.textContent = data.description || 'Erro ao adicionar ao carrinho.';
            errorMessage.style.display = 'block';
          } else {
            window.location.href = '/cart';
          }
        })
        .catch(error => {
          errorMessage.textContent = 'Erro ao adicionar ao carrinho.';
          errorMessage.style.display = 'block';
        });
    }, { capture: true });

    // Bloquear clique no botão se a data estiver vazia
    submitButton.addEventListener('click', function(event) {
      if (!dateVisible.value) {
        event.preventDefault();
        event.stopImmediatePropagation();
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Por favor, insira a Data de Ativação.';
        dateVisible.setCustomValidity('Por favor, insira a Data de Ativação.');
        dateVisible.focus();
      }
    }, { capture: true });
  }

  // Inicializar imediatamente
  initializeValidation();

  // Observar mudanças no DOM para formulários dinâmicos
  const observer = new MutationObserver(() => {
    if (findForm() && !findForm().dataset.validationInitialized) {
      initializeValidation();
      findForm().dataset.validationInitialized = 'true';
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});