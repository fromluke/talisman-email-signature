const copyBtn = document.querySelector('button[id="copyButton"]'),
  inputField = document.querySelectorAll('.email_builder_input'),
  phonePart1 = document.getElementById('signaturePhone1'),
  phonePart2 = document.getElementById('signaturePhone2'),
  phonePart3 = document.getElementById('signaturePhone3'),
  phoneNumberRow = document.getElementById('phoneNumber'),
  pronounRow = document.getElementById('pronouns'),
  errorElement = document.querySelector('.error'),
  largeImage = document.getElementById('imgLarge'),
  smallImage = document.getElementById('imgSmall'),
  pronounInput = document.getElementById('signaturePronouns');

let phoneNumber;
let removedElements = {
  large: { element: null, parent: null, nextSibling: null },
  small: { element: null, parent: null, nextSibling: null },
  phone: { element: null, parent: null, nextSibling: null },
  pronouns: { element: null, parent: null, nextSibling: null }
};

// Event listeners for the phone inputs
phonePart1.addEventListener('input', handlePhoneInput);
phonePart2.addEventListener('input', handlePhoneInput);
phonePart3.addEventListener('input', handlePhoneInput);

pronounInput.addEventListener('input', handlePronounInput);

// Mobile check
window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

inputField.forEach(function (input) {

  input.addEventListener('input', function () {
    let updateFieldData = input.getAttribute('data-update'),
      livePreview = document.querySelector('.' + updateFieldData),
      value = input.value;

    switch (input.getAttribute('id')) {
      case 'signatureName':
        livePreview.innerHTML = toTitleCase(value);
        break;
      case 'signatureEmail':
        livePreview.setAttribute('href', 'mailto:' + value.toLowerCase());
        livePreview.innerHTML = value.toLowerCase();
        break;
      case 'signaturePhone1':
        phoneNumber = `+1${phonePart1.value}${phonePart2.value}${phonePart3.value}`;
        livePreview.parentElement.setAttribute('href', 'tel:' + phoneNumber);
        livePreview.innerHTML = value;
        break;
      case 'signaturePhone2':
        phoneNumber = `+1${phonePart1.value}${phonePart2.value}${phonePart3.value}`;
        livePreview.parentElement.setAttribute('href', 'tel:' + phoneNumber);
        livePreview.innerHTML = value;
        break;
      case 'signaturePhone3':
        phoneNumber = `+1${phonePart1.value}${phonePart2.value}${phonePart3.value}`;
        livePreview.parentElement.setAttribute('href', 'tel:' + phoneNumber);
        livePreview.innerHTML = value;
        break;
      case 'signaturePronouns':
        livePreview.innerHTML = "(" + toTitleCase(value) + ")";
        break;
    }

  });
});

// Click listener
copyBtn.addEventListener('click', async function () {

  handleConditionalElementRemoval()

  const emailTemplate = document.getElementById('emailSignature'),
    htmlContent = emailTemplate.outerHTML,
    textContent = emailTemplate.textContent.trim();

  try {
    if (typeof ClipboardItem !== 'undefined') {
      // For modern browsers like Chrome, Safari, Edge 
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([htmlContent], { type: 'text/html' }),
          'text/plain': new Blob([textContent], { type: 'text/plain' })
        })
      ]);
      errorElement.style.display = 'none';
    } else {
      // If ClipboardItem is not supported
      showError("Not supported in this browser. Try using Chrome or Safari.");
      return;
    }

    // Change button label
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
      copyBtn.textContent = 'Copy Email Signature';
      document.activeElement.blur()
    }, 3000);

  } catch (err) {
    console.error('Failed to copy: ', err);
    showError("Something went wrong. Refresh or try again later.");
  }

  restoreRemovedElements();
});

function handlePhoneInput(event) {
  const input = event.target;
  // Only allow numbers
  input.value = input.value.replace(/[^0-9]/g, '');

  // Move focus to the next input after the required number of digits is entered
  if (input.value.length >= input.maxLength) {
    if (input.nextElementSibling) {
      input.nextElementSibling.focus();
    }
  }

  // Show or hide the phone number display
  if (phonePart1.value || phonePart2.value || phonePart3.value) {
    phoneNumberRow.style.display = 'table-row';
  } else {
    phoneNumberRow.style.display = 'none';
  }
}

function handlePronounInput(event) {
  const input = event.target;

  if (input.value) {
    pronounRow.style.display = 'inline';
  } else {
    pronounRow.style.display = 'none';
  }
}


function showError(message) {
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function handleConditionalElementRemoval() {
  // Remove from DOM if phone number is empty
  if (!phonePart1.value && !phonePart2.value && !phonePart3.value) {
    if (phoneNumberRow) {
      removedElements.phone = {
        element: phoneNumberRow,
        parent: phoneNumberRow.parentNode,
        nextSibling: phoneNumberRow.nextElementSibling
      };
      phoneNumberRow.remove();
    }
  }
  // Show/hide pronouns
  if (!pronounInput.value) {
    if (pronounRow) {
      removedElements.pronouns = {
        element: pronounRow,
        parent: pronounRow.parentNode,
        nextSibling: pronounRow.nextElementSibling
      };
      pronounRow.remove();
    }
  }
  // Show the right image
  if (window.mobileCheck()) {
    if (largeImage) {
      removedElements.large = {
        element: largeImage,
        parent: largeImage.parentNode,
        nextSibling: largeImage.nextElementSibling
      };
      largeImage.remove();
    }
  } else {
    if (smallImage) {
      removedElements.small = {
        element: smallImage,
        parent: smallImage.parentNode,
        nextSibling: smallImage.nextElementSibling
      };
      smallImage.remove();
    }
  }
}

function restoreRemovedElements() {
  if (removedElements.large.element) {
    // Reinsert large image back into its original place
    removedElements.large.parent.insertBefore(
      removedElements.large.element,
      removedElements.large.nextSibling
    );
    removedElements.large = { element: null, parent: null, nextSibling: null };
  }

  if (removedElements.small.element) {
    // Reinsert small image back into its original place
    removedElements.small.parent.insertBefore(
      removedElements.small.element,
      removedElements.small.nextSibling
    );
    removedElements.small = { element: null, parent: null, nextSibling: null };
  }

  if (removedElements.phone.element) {
    // Reinsert phone row back into its original place
    removedElements.phone.parent.insertBefore(
      removedElements.phone.element,
      removedElements.phone.nextSibling
    );
    removedElements.phone = { element: null, parent: null, nextSibling: null };
  }

  if (removedElements.pronouns.element) {
    // Reinsert pronoun row back into its original place
    removedElements.pronouns.parent.insertBefore(
      removedElements.pronouns.element,
      removedElements.pronouns.nextSibling
    );
    removedElements.pronouns = { element: null, parent: null, nextSibling: null };
  }
}

function toTitleCase(str) {
  return str.toLowerCase().split(/([\/ ])/).map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}