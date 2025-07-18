// Rango de años adaptable
const anioInicio = 2012;
const anioFin = 2025;
const anios = [];
for (let a = anioFin; a >= anioInicio; a--) anios.push(a);

// Ejemplo de datos de actas por año (puedes reemplazar con tus datos reales)
const actasPorAnio = {};
anios.forEach(anio => {
  actasPorAnio[anio] = [
    { nombre: `Acta ${anio}-01`, url: `docs/${anio}/acta-01.pdf` },
    { nombre: `Acta ${anio}-02`, url: `docs/${anio}/acta-02.pdf` }
  ];
});

// Renderiza el menú de años
const listaAnios = document.getElementById('lista-anios');
anios.forEach(anio => {
  const li = document.createElement('li');
  li.textContent = anio;
  li.onclick = () => mostrarActas(anio, li);
  listaAnios.appendChild(li);
});

function mostrarActas(anio, elementoLi) {
  // resalta el año seleccionado
  Array.from(listaAnios.children).forEach(li => li.classList.remove('selected'));
  elementoLi.classList.add('selected');
  // muestra las actas
  const panel = document.getElementById('panel-actas');
  panel.innerHTML = `<h3>Actas ${anio}</h3><ul id="lista-actas"></ul>`;
  const ul = document.getElementById('lista-actas');
  (actasPorAnio[anio] || []).forEach(acta => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${acta.nombre}</span>
      <a href="${acta.url}" target="_blank">Ver</a>
      <a href="${acta.url}" download>Descargar</a>
    `;
    ul.appendChild(li);
  });
}

// Buscador simple (filtra por nombre de acta)
document.getElementById('buscador').addEventListener('input', function() {
  const texto = this.value.toLowerCase();
  const panel = document.getElementById('panel-actas');
  if (!texto) {
    panel.innerHTML = `<h3>Bienvenido</h3>
      <p>Selecciona un año en la barra lateral para ver las actas correspondientes.</p>
      <ul id="lista-actas"></ul>`;
    return;
  }
  // Buscar en todas las actas
  let encontrados = [];
  anios.forEach(anio => {
    (actasPorAnio[anio] || []).forEach(acta => {
      if (acta.nombre.toLowerCase().includes(texto)) 
        encontrados.push({ ...acta, anio });
    });
  });
  panel.innerHTML = `<h3>Resultados de búsqueda</h3>
    <ul id="lista-actas"></ul>`;
  const ul = document.getElementById('lista-actas');
  if (encontrados.length === 0) {
    ul.innerHTML = `<li>No se encontraron actas.</li>`;
  } else {
    encontrados.forEach(acta => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${acta.nombre} (${acta.anio})</span>
        <a href="${acta.url}" target="_blank">Ver</a>
        <a href="${acta.url}" download>Descargar</a>
      `;
      ul.appendChild(li);
    });
  }
});
