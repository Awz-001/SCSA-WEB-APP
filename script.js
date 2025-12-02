document.getElementById('clickBtn').addEventListener('click', () => {
  const count = localStorage.getItem('count') || 0;
  const newCount = parseInt(count) + 1;
  localStorage.setItem('count', newCount);
  document.getElementById('result').innerText = `你同意了 ${newCount} 次！`;
});