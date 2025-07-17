const actasPorAnio = {
  "2024": [
    '<a href="docs/acta_2024_01.pdf" target="_blank">Acta 1 - Enero 2024</a>',
    '<a href="docs/acta_2024_02.pdf" target="_blank">Acta 2 - Febrero 2024</a>',
    '<a href="docs/acta_2024_03.pdf" target="_blank">Acta 3 - Marzo 2024</a>'
  ],
  "2023": [
    '<a href="docs/acta_2023_01.pdf" target="_blank">Acta 1 - Marzo 2023</a>',
    '<a href="docs/acta_2023_02.pdf" target="_blank">Acta 2 - Abril 2023</a>'
  ],
  "2022": [
    '<a href="docs/acta_2022_01.pdf" target="_blank">Acta 1 - Mayo 2022</a>'
  ],
  "2021": [],
  "2020": []
  // Agrega aquí más años y actas según necesites
};

function mostrarActas(element, anio) {
  // Quitar selección previa
  document.querySelectorAll('.explorador-anios li').forEach(li => li.classList.remove('selected'));
  // Marcar seleccionado
  element.classList.add('selected');
  // Mostrar actas
  const panel = document.getElementById('panel-actas');
  const actas = actasPorAnio[anio] || [];
  if (actas.length === 0) {
    panel.innerHTML = `<h3>Actas ${anio}</h3><p>No hay actas disponibles para este año.</p>`;
  } else {
    panel.innerHTML = `<h3>Actas ${anio}</h3><ul>` +
      actas.map(a => `<li>${a}</li>`).join('') +
      `</ul>`;
  }
}
