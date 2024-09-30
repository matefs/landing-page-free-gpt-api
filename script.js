function toggleDescription(card) {
  const description = card.querySelector('.description');
  if (description.style.display === 'block') {
    description.style.display = 'none'; /* Hide the description */
  } else {
    description.style.display = 'block'; /* Show the description */
  }
}
