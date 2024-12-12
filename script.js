function showParagraph(index) {
    
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => title.classList.remove('active'));
    titles[index].classList.add('active');

    const paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach(paragraph => paragraph.classList.remove('active'));
    document.getElementById(`paragraph-${index}`).classList.add('active');
  }
    document.addEventListener('DOMContentLoaded', () => {
    showParagraph(0);
  });
  
