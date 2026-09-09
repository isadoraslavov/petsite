/* =========================================================
   AdotaPet - JavaScript (Vanilla)
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- Dados dos animais ---------------- */
  const animals = [
    {
      id: 'thor', nome: 'Thor', especie: 'cachorro', img: 'img/thor.png',
      idadeTexto: '2 anos', faixa: 'adulto', raca: 'Labrador', porte: 'grande',
      sexo: 'Macho', energia: 'Alta', temperamento: 'brincalhao', temperamentoTexto: 'Brincalhão e leal',
      cidade: 'São Paulo, SP',
      historico: 'Resgatado ainda filhote de uma situação de abandono, Thor cresceu em um lar temporário cheio de amor e hoje é um cão equilibrado e confiante.',
      vacinacao: true, castracao: true,
      personalidade: 'Extrovertido, adora água, brincadeiras de buscar e longas caminhadas. É o companheiro ideal para quem gosta de atividades ao ar livre.',
      criancas: true, outrosAnimais: true, especiais: 'Nenhuma necessidade especial. Precisa de exercícios diários.',
      curiosidade: 'Thor sabe dar a patinha e adora tomar banho de mangueira nos dias quentes.'
    },
    {
      id: 'luna', nome: 'Luna', especie: 'cachorro', img: 'img/luna.png',
      idadeTexto: '1 ano', faixa: 'filhote', raca: 'SRD (vira-lata)', porte: 'medio',
      sexo: 'Fêmea', energia: 'Média', temperamento: 'sociavel', temperamentoTexto: 'Sociável e dócil',
      cidade: 'Rio de Janeiro, RJ',
      historico: 'Luna foi encontrada nas ruas ainda muito jovem e recebeu todos os cuidados de um abrigo parceiro. É extremamente carinhosa com pessoas.',
      vacinacao: true, castracao: true,
      personalidade: 'Meiga, tranquila e muito apegada aos tutores. Se adapta bem a apartamentos desde que tenha passeios regulares.',
      criancas: true, outrosAnimais: true, especiais: 'Nenhuma. Convive muito bem com outros cães.',
      curiosidade: 'Luna adora dormir de barriga para cima e ronca baixinho enquanto dorme.'
    },
    {
      id: 'bento', nome: 'Bento', especie: 'cachorro', img: 'img/bento.png',
      idadeTexto: '4 anos', faixa: 'adulto', raca: 'Beagle', porte: 'medio',
      sexo: 'Macho', energia: 'Média', temperamento: 'sociavel', temperamentoTexto: 'Curioso e amigável',
      cidade: 'Belo Horizonte, MG',
      historico: 'Bento foi devolvido por uma família que não tinha mais tempo para cuidá-lo. Merece um lar definitivo que valorize sua companhia.',
      vacinacao: true, castracao: true,
      personalidade: 'Farejador nato, curioso e cheio de energia para explorar. Muito sociável com pessoas e outros cães.',
      criancas: true, outrosAnimais: true, especiais: 'Precisa de estímulos e brincadeiras que envolvam o faro.',
      curiosidade: 'Bento consegue farejar um petisco escondido em qualquer canto da casa.'
    },
    {
      id: 'nina', nome: 'Nina', especie: 'cachorro', img: 'img/nina.png',
      idadeTexto: '6 anos', faixa: 'adulto', raca: 'Poodle', porte: 'pequeno',
      sexo: 'Fêmea', energia: 'Baixa', temperamento: 'calmo', temperamentoTexto: 'Calma e companheira',
      cidade: 'Curitiba, PR',
      historico: 'Nina viveu com uma senhora idosa que infelizmente faleceu. Está buscando um novo lar tranquilo para viver seus melhores anos.',
      vacinacao: true, castracao: true,
      personalidade: 'Serena, dócil e caseira. Adora colo e a companhia de pessoas calmas. Perfeita para apartamentos.',
      criancas: true, outrosAnimais: false, especiais: 'Prefere ser a única pet da casa. Ótima para tutores mais tranquilos.',
      curiosidade: 'Nina fica horas observando a janela e cochilando ao sol.'
    },
    {
      id: 'max', nome: 'Max', especie: 'cachorro', img: 'img/max.png',
      idadeTexto: '3 anos', faixa: 'adulto', raca: 'Golden Retriever', porte: 'grande',
      sexo: 'Macho', energia: 'Alta', temperamento: 'brincalhao', temperamentoTexto: 'Alegre e brincalhão',
      cidade: 'Porto Alegre, RS',
      historico: 'Max chegou ao abrigo após seus tutores se mudarem para o exterior. É saudável, treinado e muito sociável.',
      vacinacao: true, castracao: true,
      personalidade: 'Companheiro incansável de brincadeiras, ótimo com crianças e muito obediente. Adora buscar bolinhas.',
      criancas: true, outrosAnimais: true, especiais: 'Necessita de espaço e exercícios diários por ser um cão ativo.',
      curiosidade: 'Max conhece vários comandos e adora carregar seu próprio brinquedo pela casa.'
    },
    {
      id: 'mimi', nome: 'Mimi', especie: 'gato', img: 'img/mimi.png',
      idadeTexto: '2 anos', faixa: 'adulto', raca: 'Siamês', porte: 'pequeno',
      sexo: 'Fêmea', energia: 'Média', temperamento: 'sociavel', temperamentoTexto: 'Comunicativa e afetuosa',
      cidade: 'São Paulo, SP',
      historico: 'Mimi foi resgatada de uma ninhada abandonada. É uma gata comunicativa que adora conversar com seus tutores através de miados.',
      vacinacao: true, castracao: true,
      personalidade: 'Elegante, curiosa e muito apegada. Gosta de acompanhar os tutores pela casa e receber carinho.',
      criancas: true, outrosAnimais: true, especiais: 'Nenhuma. Adapta-se bem a apartamentos com telas de proteção.',
      curiosidade: 'Mimi "responde" quando você fala com ela e adora dormir em lugares altos.'
    },
    {
      id: 'felix', nome: 'Félix', especie: 'gato', img: 'img/felix.png',
      idadeTexto: '8 meses', faixa: 'filhote', raca: 'SRD (vira-lata)', porte: 'pequeno',
      sexo: 'Macho', energia: 'Alta', temperamento: 'brincalhao', temperamentoTexto: 'Elétrico e divertido',
      cidade: 'Salvador, BA',
      historico: 'Félix foi encontrado dentro do motor de um carro quando filhote. Hoje é um gatinho saudável, cheio de energia e travessuras.',
      vacinacao: true, castracao: false,
      personalidade: 'Brincalhão incansável, adora caçar brinquedos e explorar cada cantinho. Ideal para quem quer um gato ativo.',
      criancas: true, outrosAnimais: true, especiais: 'Castração agendada. Precisa de muitos brinquedos e estímulos.',
      curiosidade: 'Félix faz "parkour" pelos móveis e adora perseguir laser.'
    },
    {
      id: 'amora', nome: 'Amora', especie: 'gato', img: 'img/amora.png',
      idadeTexto: '5 anos', faixa: 'adulto', raca: 'Persa', porte: 'medio',
      sexo: 'Fêmea', energia: 'Baixa', temperamento: 'calmo', temperamentoTexto: 'Tranquila e elegante',
      cidade: 'Recife, PE',
      historico: 'Amora foi entregue ao abrigo por uma família que desenvolveu alergia. É uma gata dócil que busca um lar sereno.',
      vacinacao: true, castracao: true,
      personalidade: 'Calma, independente e observadora. Aprecia ambientes tranquilos e colinhos no fim do dia.',
      criancas: false, outrosAnimais: false, especiais: 'Precisa de escovação regular dos pelos longos. Prefere lares calmos.',
      curiosidade: 'Amora escolhe sempre o ponto mais confortável e ensolarado da casa para descansar.'
    },
    {
      id: 'simba', nome: 'Simba', especie: 'gato', img: 'img/simba.png',
      idadeTexto: '3 anos', faixa: 'adulto', raca: 'SRD (laranja)', porte: 'medio',
      sexo: 'Macho', energia: 'Média', temperamento: 'sociavel', temperamentoTexto: 'Sociável e dengoso',
      cidade: 'Fortaleza, CE',
      historico: 'Simba viveu nas ruas de um bairro comercial até ser resgatado. É extremamente sociável e adora a companhia humana.',
      vacinacao: true, castracao: true,
      personalidade: 'Dengoso, gosta de colo e de receber visitas. Convive muito bem com outros gatos e cães dóceis.',
      criancas: true, outrosAnimais: true, especiais: 'Nenhuma. Muito adaptável a diferentes ambientes.',
      curiosidade: 'Simba faz "biscoito" com as patinhas quando está feliz e amassa qualquer cobertor macio.'
    },
    {
      id: 'nala', nome: 'Nala', especie: 'gato', img: 'img/nala.png',
      idadeTexto: '4 meses', faixa: 'filhote', raca: 'SRD (rajado)', porte: 'pequeno',
      sexo: 'Fêmea', energia: 'Alta', temperamento: 'brincalhao', temperamentoTexto: 'Curiosa e travessa',
      cidade: 'Brasília, DF',
      historico: 'Nala nasceu em um lar temporário após sua mãe ser resgatada gestante. Está pronta para conhecer sua família definitiva.',
      vacinacao: true, castracao: false,
      personalidade: 'Filhote curiosa e cheia de energia, adora brincar e descobrir o mundo. Aprende rápido a usar a caixa de areia.',
      criancas: true, outrosAnimais: true, especiais: 'Castração agendada para quando atingir a idade adequada.',
      curiosidade: 'Nala persegue o próprio rabo e dá pequenos "pulinhos de caça" pela casa.'
    }
  ];

  /* ---------------- ONGs parceiras ---------------- */
  const partners = [
    { sigla: 'PA', nome: 'Patas Amigas', cidade: 'São Paulo, SP', desc: 'Abrigo dedicado ao resgate e reabilitação de cães e gatos vítimas de maus-tratos.', telefone: '(11) 3333-1010', nota: '4.9', anos: '12 anos' },
    { sigla: 'FL', nome: 'Focinhos do Lar', cidade: 'Rio de Janeiro, RJ', desc: 'ONG focada em adoções responsáveis e campanhas de castração gratuita para a comunidade.', telefone: '(21) 2222-2020', nota: '4.8', anos: '8 anos' },
    { sigla: 'AV', nome: 'Amor de Vira', cidade: 'Belo Horizonte, MG', desc: 'Especializada no cuidado de vira-latas e animais idosos que buscam um novo lar.', telefone: '(31) 4444-3030', nota: '5.0', anos: '15 anos' },
    { sigla: 'PF', nome: 'Patinhas Felizes', cidade: 'Curitiba, PR', desc: 'Rede de lares temporários que acolhe filhotes resgatados até a adoção definitiva.', telefone: '(41) 5555-4040', nota: '4.7', anos: '6 anos' },
    { sigla: 'GS', nome: 'Gatos & Sonhos', cidade: 'Recife, PE', desc: 'Abrigo exclusivo para felinos, com foco em socialização e adaptação a novos lares.', telefone: '(81) 6666-5050', nota: '4.9', anos: '10 anos' },
    { sigla: 'RA', nome: 'Resgate Animal', cidade: 'Porto Alegre, RS', desc: 'Atua no resgate emergencial e tratamento veterinário de animais em situação de risco.', telefone: '(51) 7777-6060', nota: '4.8', anos: '9 anos' }
  ];

  /* ---------------- Utilidades ---------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const especieLabel = (e) => (e === 'cachorro' ? 'Cão' : 'Gato');
  const porteLabel = (p) => ({ pequeno: 'Pequeno', medio: 'Médio', grande: 'Grande' }[p] || p);

  const checkIcon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>';
  const xIcon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const pinIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';

  /* =========================================================
     CATÁLOGO + FILTROS
     ========================================================= */
  const grid = $('#animals-grid');
  const noResults = $('#no-results');
  const resultsCount = $('#results-count');

  function animalCard(a) {
    const el = document.createElement('article');
    el.className = 'animal-card';
    el.innerHTML = `
      <div class="animal-card-media">
        <img src="${a.img}" alt="Foto de ${a.nome}, ${especieLabel(a.especie).toLowerCase()} ${a.raca}" loading="lazy" width="400" height="300" />
        <span class="animal-badge">${especieLabel(a.especie)}</span>
      </div>
      <div class="animal-card-body">
        <h3>${a.nome}</h3>
        <div class="animal-meta">
          <span class="tag">${a.idadeTexto}</span>
          <span class="tag tag-sky">${porteLabel(a.porte)}</span>
          <span class="tag tag-orange">${a.sexo}</span>
        </div>
        <p class="animal-location">${pinIcon}<span>${a.cidade}</span></p>
        <div class="animal-card-footer">
          <button class="btn btn-primary" data-animal="${a.id}">Ver detalhes</button>
        </div>
      </div>`;
    return el;
  }

  function applyFilters() {
    const term = $('#search').value.trim().toLowerCase();
    const species = $('#filter-species').value;
    const size = $('#filter-size').value;
    const age = $('#filter-age').value;
    const temperament = $('#filter-temperament').value;

    const filtered = animals.filter((a) => {
      const matchTerm = !term ||
        a.nome.toLowerCase().includes(term) ||
        a.raca.toLowerCase().includes(term) ||
        a.cidade.toLowerCase().includes(term);
      const matchSpecies = !species || a.especie === species;
      const matchSize = !size || a.porte === size;
      const matchAge = !age || a.faixa === age;
      const matchTemp = !temperament || a.temperamento === temperament;
      return matchTerm && matchSpecies && matchSize && matchAge && matchTemp;
    });

    grid.innerHTML = '';
    filtered.forEach((a, i) => {
      const card = animalCard(a);
      card.style.animationDelay = (i * 0.05) + 's';
      grid.appendChild(card);
    });

    noResults.hidden = filtered.length !== 0;
    const n = filtered.length;
    resultsCount.textContent = n === 0
      ? 'Nenhum animal encontrado.'
      : `${n} ${n === 1 ? 'animal disponível' : 'animais disponíveis'} para adoção.`;
  }

  ['#search', '#filter-species', '#filter-size', '#filter-age', '#filter-temperament'].forEach((sel) => {
    const el = $(sel);
    if (el) el.addEventListener('input', applyFilters);
  });

  /* =========================================================
     MODAL DE DETALHES
     ========================================================= */
  const modal = $('#animal-modal');
  const modalContent = $('#modal-content');
  let lastFocused = null;

  function buildModal(a) {
    const compat = (label, ok) =>
      `<div class="modal-check ${ok ? '' : 'no'}">${ok ? checkIcon : xIcon}<span>${label}</span></div>`;

    return `
      <div class="modal-gallery">
        <img src="${a.img}" alt="Foto principal de ${a.nome}" class="modal-main-img" id="modal-main-img" />
        <div class="modal-thumbs" role="tablist" aria-label="Galeria de fotos de ${a.nome}">
          <img src="${a.img}" alt="Miniatura 1 de ${a.nome}" class="modal-thumb active" data-src="${a.img}" />
          <img src="${a.img}" alt="Miniatura 2 de ${a.nome}" class="modal-thumb" data-src="${a.img}" />
          <img src="${a.img}" alt="Miniatura 3 de ${a.nome}" class="modal-thumb" data-src="${a.img}" />
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-title-row">
          <h2 id="modal-name">${a.nome}</h2>
          <span class="animal-badge">${especieLabel(a.especie)}</span>
        </div>
        <p class="modal-subtitle">${a.temperamentoTexto} &middot; ${a.cidade}</p>

        <div class="modal-facts">
          <div class="modal-fact"><span>Idade</span><strong>${a.idadeTexto}</strong></div>
          <div class="modal-fact"><span>Raça</span><strong>${a.raca}</strong></div>
          <div class="modal-fact"><span>Porte</span><strong>${porteLabel(a.porte)}</strong></div>
          <div class="modal-fact"><span>Sexo</span><strong>${a.sexo}</strong></div>
          <div class="modal-fact"><span>Energia</span><strong>${a.energia}</strong></div>
        </div>

        <div class="modal-section" style="margin-top:1.5rem">
          <h4>Histórico</h4>
          <p>${a.historico}</p>
        </div>

        <div class="modal-section">
          <h4>Personalidade</h4>
          <p>${a.personalidade}</p>
        </div>

        <div class="modal-section">
          <h4>Saúde</h4>
          ${compat(a.vacinacao ? 'Vacinação em dia' : 'Vacinação pendente', a.vacinacao)}
          ${compat(a.castracao ? 'Castrado(a)' : 'Castração agendada', a.castracao)}
        </div>

        <div class="modal-section">
          <h4>Compatibilidade</h4>
          ${compat('Convive bem com crianças', a.criancas)}
          ${compat('Convive bem com outros animais', a.outrosAnimais)}
        </div>

        <div class="modal-section">
          <h4>Necessidades especiais</h4>
          <p>${a.especiais}</p>
        </div>

        <div class="modal-section">
          <h4>Curiosidade</h4>
          <p>${a.curiosidade}</p>
        </div>

        <div class="modal-actions">
          <a href="#contato" class="btn btn-accent" data-adopt="${a.nome}">Solicitar adoção</a>
          <button class="btn btn-outline" data-close-modal>Voltar ao catálogo</button>
        </div>
      </div>`;
  }

  function openModal(id) {
    const a = animals.find((x) => x.id === id);
    if (!a) return;
    lastFocused = document.activeElement;
    modalContent.innerHTML = buildModal(a);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    // Galeria: troca a imagem principal ao clicar nas miniaturas
    const mainImg = $('#modal-main-img');
    $$('.modal-thumb', modalContent).forEach((thumb) => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.dataset.src;
        $$('.modal-thumb', modalContent).forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });

    // Foco no botão de fechar
    const closeBtn = $('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  // Delegação de clique para abrir modal e ações
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-animal]');
    if (trigger) { openModal(trigger.dataset.animal); return; }
    if (e.target.closest('[data-close-modal]')) { closeModal(); return; }
    const adopt = e.target.closest('[data-adopt]');
    if (adopt) {
      const field = $('#animal-interesse');
      if (field) field.value = adopt.dataset.adopt;
      closeModal();
    }
  });

  // Foco preso dentro do modal (acessibilidade) + Esc
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') {
      const focusables = $$('a[href], button, input, [tabindex]:not([tabindex="-1"])', modal)
        .filter((el) => !el.hasAttribute('disabled') && el.offsetParent !== null);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* =========================================================
     PARCEIROS
     ========================================================= */
  const partnersGrid = $('#partners-grid');
  function renderPartners() {
    partners.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'partner-card';
      card.innerHTML = `
        <div class="partner-head">
          <span class="partner-logo" aria-hidden="true">${p.sigla}</span>
          <div>
            <h3>${p.nome}</h3>
            <span class="partner-city">${pinIcon}${p.cidade}</span>
          </div>
        </div>
        <p class="partner-desc">${p.desc}</p>
        <div class="partner-meta">
          <span class="partner-rating" aria-label="Avaliação ${p.nota} de 5">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${p.nota}
          </span>
          <span class="partner-years">${p.anos} de atuação</span>
        </div>
        <p class="partner-phone">${p.telefone}</p>`;
      partnersGrid.appendChild(card);
    });
  }

  /* =========================================================
     TESTE DE COMPATIBILIDADE
     ========================================================= */
  const compatForm = $('#compat-form');
  const compatResult = $('#compat-result');
  const compatError = $('#compat-error');

  compatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(compatForm);
    const required = ['moradia', 'criancas', 'outroPet', 'trabalha', 'energia'];
    const answered = required.every((k) => data.get(k));
    if (!answered) { compatError.hidden = false; return; }
    compatError.hidden = true;

    // Pontua cada animal de acordo com o perfil
    const perfil = {
      moradia: data.get('moradia'),
      criancas: data.get('criancas'),
      outroPet: data.get('outroPet'),
      trabalha: data.get('trabalha'),
      energia: data.get('energia')
    };

    const scored = animals.map((a) => {
      let score = 0;
      // Energia desejada
      if (perfil.energia === 'calmo' && a.energia === 'Baixa') score += 3;
      if (perfil.energia === 'calmo' && a.energia === 'Média') score += 1;
      if (perfil.energia === 'ativo' && a.energia === 'Alta') score += 3;
      if (perfil.energia === 'ativo' && a.energia === 'Média') score += 1;
      // Moradia x porte
      if (perfil.moradia === 'apartamento' && a.porte === 'pequeno') score += 2;
      if (perfil.moradia === 'apartamento' && a.porte === 'medio') score += 1;
      if (perfil.moradia === 'casa' && a.porte === 'grande') score += 2;
      if (perfil.moradia === 'casa' && a.porte === 'medio') score += 1;
      // Crianças
      if (perfil.criancas === 'sim') score += a.criancas ? 2 : -3;
      // Outro pet
      if (perfil.outroPet === 'sim') score += a.outrosAnimais ? 2 : -3;
      // Trabalha fora: gatos e animais mais independentes/calmos se adaptam melhor
      if (perfil.trabalha === 'sim') {
        if (a.especie === 'gato') score += 2;
        if (a.energia === 'Baixa') score += 1;
        if (a.energia === 'Alta') score -= 1;
      }
      return { a, score };
    });

    scored.sort((x, y) => y.score - x.score);
    const best = scored[0].a;

    compatResult.innerHTML = `
      <img src="${best.img}" alt="Foto de ${best.nome}" />
      <div class="quiz-result-info">
        <span>Seu match ideal</span>
        <h3>${best.nome}</h3>
        <p>${especieLabel(best.especie)} &middot; ${best.raca} &middot; ${best.idadeTexto} &middot; ${best.cidade}. ${best.temperamentoTexto}, com nível de energia ${best.energia.toLowerCase()}.</p>
        <button class="btn btn-primary" data-animal="${best.id}">Conhecer ${best.nome}</button>
      </div>`;
    compatResult.hidden = false;
    compatResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  /* =========================================================
     QUIZ EDUCATIVO
     ========================================================= */
  const eduQuestions = [
    {
      q: 'Qual é o primeiro passo ao levar um novo pet para casa?',
      opcoes: ['Deixá-lo solto na rua para explorar', 'Preparar um ambiente seguro e acolhedor', 'Dar banho imediatamente'],
      correta: 1,
      explicacao: 'Isso mesmo! Um ambiente seguro ajuda o animal a se adaptar com tranquilidade.'
    },
    {
      q: 'Com que frequência um cão deve ser vacinado?',
      opcoes: ['Apenas uma vez na vida', 'Conforme o calendário indicado pelo veterinário', 'Nunca é necessário'],
      correta: 1,
      explicacao: 'Correto! A vacinação segue um calendário e reforços anuais recomendados pelo veterinário.'
    },
    {
      q: 'A castração é importante porque:',
      opcoes: ['Controla a população e previne doenças', 'Deixa o animal mais bravo', 'Não tem nenhum benefício'],
      correta: 0,
      explicacao: 'Perfeito! A castração é um ato de responsabilidade que traz benefícios de saúde e evita o abandono.'
    },
    {
      q: 'Adotar um animal é um compromisso de:',
      opcoes: ['Alguns meses apenas', 'Toda a vida do animal (10 a 20 anos)', 'Somente enquanto for filhote'],
      correta: 1,
      explicacao: 'Exatamente! Adotar é assumir um compromisso para toda a vida do animal.'
    }
  ];

  const eduBody = $('#edu-quiz-body');
  const eduStatus = $('#edu-quiz-status');
  let eduIndex = 0;
  let eduScore = 0;

  function renderEduQuestion() {
    const item = eduQuestions[eduIndex];
    eduBody.innerHTML = `
      <div class="edu-question">
        <p class="q-text">${item.q}</p>
        <div class="edu-answers" role="group" aria-label="Opções de resposta">
          ${item.opcoes.map((op, i) => `<button class="edu-answer" data-idx="${i}">${op}</button>`).join('')}
        </div>
        <p class="edu-feedback" role="status" aria-live="polite"></p>
      </div>`;
    eduStatus.textContent = `Pergunta ${eduIndex + 1} de ${eduQuestions.length}`;

    const feedback = $('.edu-feedback', eduBody);
    $$('.edu-answer', eduBody).forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.idx);
        const item = eduQuestions[eduIndex];
        $$('.edu-answer', eduBody).forEach((b) => { b.disabled = true; });
        if (idx === item.correta) {
          btn.classList.add('correct');
          eduScore++;
          feedback.textContent = item.explicacao;
        } else {
          btn.classList.add('wrong');
          $$('.edu-answer', eduBody)[item.correta].classList.add('correct');
          feedback.textContent = 'Quase! ' + item.explicacao;
        }
        const nextBtn = document.createElement('div');
        nextBtn.className = 'edu-quiz-actions';
        nextBtn.innerHTML = `<button class="btn btn-accent" id="edu-next">${eduIndex < eduQuestions.length - 1 ? 'Próxima pergunta' : 'Ver resultado'}</button>`;
        $('.edu-question', eduBody).appendChild(nextBtn);
        $('#edu-next').focus();
        $('#edu-next').addEventListener('click', () => {
          eduIndex++;
          if (eduIndex < eduQuestions.length) renderEduQuestion();
          else renderEduResult();
        });
      });
    });
  }

  function renderEduResult() {
    eduBody.innerHTML = `
      <div class="edu-score">
        <p class="score-num">${eduScore}/${eduQuestions.length}</p>
        <p class="q-text">${eduScore === eduQuestions.length ? 'Excelente! Você está pronto para uma adoção responsável.' : eduScore >= 2 ? 'Muito bem! Você já sabe bastante sobre adoção responsável.' : 'Continue aprendendo! A adoção responsável começa pela informação.'}</p>
        <div class="edu-quiz-actions"><button class="btn btn-accent" id="edu-restart">Refazer o quiz</button></div>
      </div>`;
    eduStatus.textContent = `Concluído: ${eduScore} de ${eduQuestions.length} corretas`;
    $('#edu-restart').addEventListener('click', () => {
      eduIndex = 0; eduScore = 0; renderEduQuestion();
    });
  }

  /* =========================================================
     FORMULÁRIO DE CONTATO
     ========================================================= */
  const contactForm = $('#contact-form');
  const contactSuccess = $('#contact-success');

  function setError(field, msg) {
    const input = $('#' + field);
    const err = $(`[data-error-for="${field}"]`);
    if (err) err.textContent = msg;
    if (input) input.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\d{8,}/;

    const nome = $('#nome').value.trim();
    const email = $('#email').value.trim();
    const telefone = $('#telefone').value.trim();
    const cidade = $('#cidade').value.trim();
    const moradia = $('#moradia').value;
    const mensagem = $('#mensagem').value.trim();

    if (nome.length < 3) { setError('nome', 'Informe seu nome completo.'); valid = false; } else setError('nome', '');
    if (!emailRegex.test(email)) { setError('email', 'Informe um e-mail válido.'); valid = false; } else setError('email', '');
    if (!phoneRegex.test(telefone.replace(/\D/g, ''))) { setError('telefone', 'Informe um telefone válido.'); valid = false; } else setError('telefone', '');
    if (cidade.length < 2) { setError('cidade', 'Informe sua cidade.'); valid = false; } else setError('cidade', '');
    if (!moradia) { setError('moradia', 'Selecione o tipo de moradia.'); valid = false; } else setError('moradia', '');
    if (mensagem.length < 10) { setError('mensagem', 'Escreva uma mensagem com pelo menos 10 caracteres.'); valid = false; } else setError('mensagem', '');

    if (!valid) {
      contactSuccess.hidden = true;
      const firstError = $('[aria-invalid="true"]');
      if (firstError) firstError.focus();
      return;
    }

    contactForm.reset();
    contactSuccess.hidden = false;
    contactSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Máscara simples de telefone
  const telInput = $('#telefone');
  if (telInput) {
    telInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
      else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
      else if (v.length > 0) v = `(${v}`;
      e.target.value = v;
    });
  }

  /* =========================================================
     MENU MOBILE
     ========================================================= */
  const navToggle = $('.nav-toggle');
  const navMenu = $('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    });
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* =========================================================
     INICIALIZAÇÃO
     ========================================================= */
  applyFilters();
  renderPartners();
  renderEduQuestion();
  $('#year').textContent = new Date().getFullYear();
})();
