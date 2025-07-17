document.getElementById('buscador').addEventListener('input', function() {
  const filtro = this.value.toLowerCase();
  document.querySelectorAll('li').forEach(li => {
    const texto = li.textContent.toLowerCase();
    li.style.display = texto.includes(filtro) ? '' : 'none';
  });
});
