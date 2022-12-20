// Get the container element where the time blocks will be added
const container = document.querySelector('.container-lg');

// Loop through the business hours and create a time block for each hour
for (let hour = 9; hour <=17; hour++) {
  // Create the time block element
  const timeBlock = document.createElement('div');
  timeBlock.classList.add('row', 'time-block');
  timeBlock.id = `hour-${hour}`;

  // Create the time label element
  const timeLabel = document.createElement('div');
  timeLabel.classList.add('col-2', 'time-label');
  timeLabel.innerHTML = `${hour}:00`;

  // Create the event column element
  const eventColumn = document.createElement('div');
  eventColumn.classList.add('col-10', 'event-column');

  // Create the text area element
  const textArea = document.createElement('textarea');
  textArea.classList.add('form-control', 'event-text');

  // Load the saved event for this hour, if it exists
const eventText = localStorage.getItem(`event-${hour}`);
if (eventText) {
  textArea.value = eventText;
}

// Create the save button element
const saveButton = document.createElement('button');
saveButton.classList.add('btn', 'btn-primary', 'save-btn');
saveButton.innerHTML = 'Save';
 
// Set up a click event listener for the save button
saveButton.addEventListener('click', function() {
    const event = textArea.value;
    localStorage.setItem(`event-${hour}`, event);
  });

// Add the time label, text area, and save button to the event column
  eventColumn.appendChild(textArea);
  eventColumn.appendChild(saveButton);

  // Add the time label and event column to the time block
  timeBlock.appendChild(timeLabel);
  timeBlock.appendChild(eventColumn);

  // Add the time block to the container
  container.appendChild(timeBlock);
}

