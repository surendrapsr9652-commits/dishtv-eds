export default function decorate(block) {
  const cards = [...block.children];

  cards.forEach((card) => {
    card.classList.add('product-card');
    const cols = [...card.children];

    if (cols.length >= 2) {
      cols[0].classList.add('product-card-info');
      cols[1].classList.add('product-card-features');

      const paragraphs = cols[0].querySelectorAll('p');
      paragraphs.forEach((p) => {
        const text = p.textContent.trim();
        if (text.startsWith('₹') || text.startsWith('Rs')) {
          p.classList.add('product-card-price');
        }
      });

      const firstStrong = cols[0].querySelector('strong');
      if (firstStrong && !firstStrong.closest('a')) {
        const header = document.createElement('div');
        header.classList.add('product-card-header');
        header.textContent = firstStrong.textContent;
        firstStrong.parentElement.replaceWith(header);
      }

      const featuresStrong = cols[1].querySelector('strong');
      if (featuresStrong) {
        featuresStrong.classList.add('features-title');
      }
    }
  });
}
