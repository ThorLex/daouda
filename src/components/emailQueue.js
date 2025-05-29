// Utilitaires pour la gestion de la pile d'emails dans le localStorage
export const EMAIL_QUEUE_KEY = 'email_queue';

export function addToEmailQueue(emailData) {
  const queue = getEmailQueue();
  queue.push(emailData);
  localStorage.setItem(EMAIL_QUEUE_KEY, JSON.stringify(queue));
}

export function getEmailQueue() {
  const queue = localStorage.getItem(EMAIL_QUEUE_KEY);
  return queue ? JSON.parse(queue) : [];
}

export function clearEmailQueue() {
  localStorage.removeItem(EMAIL_QUEUE_KEY);
}

export function removeFirstFromQueue() {
  const queue = getEmailQueue();
  queue.shift();
  localStorage.setItem(EMAIL_QUEUE_KEY, JSON.stringify(queue));
}
