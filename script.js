function showParagraph(clickedButton, index) {
  const titles = document.querySelectorAll('.title');
  titles.forEach(title => title.classList.remove('active')); // Remove active from all buttons
  clickedButton.classList.add('active'); // Add active to clicked button

  const paragraphs = document.querySelectorAll('.paragraph');
  paragraphs.forEach(paragraph => paragraph.classList.remove('active')); // Remove active from all paragraphs
  document.getElementById(`paragraph-${index}`).classList.add('active'); // Show the clicked paragraph
  
  // Remove bold from all buttons and add bold to the clicked button
  titles.forEach(title => title.classList.remove('bold'));
  clickedButton.classList.add('bold');
}

document.addEventListener('DOMContentLoaded', () => {
  showParagraph(document.querySelector('.title'), 0); // By default, show the first paragraph
});
