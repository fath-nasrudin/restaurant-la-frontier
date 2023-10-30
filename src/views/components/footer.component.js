const footerComponent = () => {
  const footer = document.createElement('footer');
  footer.classList.add('main-footer');

  const p = document.createElement('p');
  p.textContent = 'Made with Curiosity';
  footer.appendChild(p);

  return footer;
};

export default footerComponent;