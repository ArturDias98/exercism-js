// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  let match = command.match(/chatbot/i);
  return match?.index === 0
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let exp = new RegExp(/\bemoji\w*\b/g);
  return message.replace(exp, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const regex = /^\(\+[1-9]{2}\) [0-9]{3}-[0-9]{3}-[0-9]{3}$/;

  return regex.test(number)    
  ? 'Thanks! You can now download me to your phone.'
  : `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const REGEX = /\w+\.\w+/g;
  return userInput.match(REGEX);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const [lastName, firstName] = fullName.split(", ");
  return "Nice to meet you, " + firstName + " " + lastName;
}
