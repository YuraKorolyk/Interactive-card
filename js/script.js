document.addEventListener("DOMContentLoaded", function () {

   const allInputs = document.querySelectorAll('.input');
   const form = document.querySelector('.info__form');
   const messageContainer = document.querySelectorAll('.info__message');
   const info = document.querySelector('.info');
   const infoBtn = document.querySelector('.info__btn');
   const thank = document.querySelector('.thank');

   infoBtn.addEventListener('click', () => {
      checkInputs();
      if (!form.classList.contains('error-form')) {
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         info.style.display = 'none';
         thank.style.display = 'flex';
         form.reset();
      });
   }
   });
   
   function checkInputs () {
      allInputs.forEach((item, i) => {
         if (item.value == '') {
            item.classList.add('error');
            form.classList.add('error-form');
            if (i == 2 || i == 3) {
               messageContainer[2].innerHTML = 'Cant be blank';
            } else if (i == 4) {
               messageContainer[3].innerHTML = 'Cant be blank';
            } else {
               messageContainer[i].innerHTML = 'Cant be blank';
            }
         }
         // if (i != 0 && isNaN(+item.value)) {
         //    item.classList.add('error');
         //    if (i == 2 || i == 3) {
         //       messageContainer[2].innerHTML = 'Wrong format, numbers only';
         //    } else if (i == 4) {
         //       messageContainer[3].innerHTML = 'Wrong format, numbers only';
         //    } else {
         //       messageContainer[i].innerHTML = 'Wrong format, numbers only';
         //    }
         // }
      });
   }
      const continueBtn = document.querySelector('.thank__bnt');
      continueBtn.addEventListener('click', ()=> {
         info.style.display = 'block';
         thank.style.display = 'none';
         messageContainer.forEach(el => {
            el.innerHTML = '';
            
         });
         allInputs.forEach(el => {
            el.classList.remove('error');
         })

      });

   const cardName = document.querySelector('.card__name');
   const cardNumber = document.querySelector('.card__number');
   const cardMonth = document.querySelector('.card__month');
   const cardYear = document.querySelector('.card__year');
   const cardCVC = document.querySelector('.card__back');

   const nameInput = document.querySelector('.info__name');
   const numberInput = document.querySelector('.info__number');
   const monthInput = document.querySelector('.info__month');
   const yearInput = document.querySelector('.info__year');
   const cvcInput = document.querySelector('.info__cvc');

   nameInput.addEventListener('keyup', () => {
      cardName.innerHTML = nameInput.value;
      if (nameInput.value.length == 0) {
         cardName.innerHTML = 'Jane Appleseed';
      }
   });
   numberInput.addEventListener('keyup', function (e) {

      if (e.keyCode !== 8 && e.key !== 'backspace') {
         let newValue = e.target.value.replace(/\D/g, "");
         newValue = newValue.replace(/(.{4})/g, "$1 ");
         e.target.value = newValue;
      }
      if ((e.keyCode === 8 || e.keyCode === 46) && e.target.value.length % 5 == 0) {
         e.target.value = e.target.value.slice(0, -1);
      }
      cardNumber.innerHTML = numberInput.value;
      if (numberInput.value.length == 0) {
         cardNumber.innerHTML = '0000 0000 0000 0000';
      }

   });




   monthInput.addEventListener('keyup', () => {
      cardMonth.innerHTML = monthInput.value;
      if (monthInput.value.length == 0) {
         cardMonth.innerHTML = '00';
      }
   });
   yearInput.addEventListener('keyup', () => {
      cardYear.innerHTML = yearInput.value;
      if (yearInput.value.length == 0) {
         cardYear.innerHTML = '00';
      }
   });
   cvcInput.addEventListener('keyup', () => {
      cardCVC.innerHTML = cvcInput.value;
      if (cvcInput.value.length == 0) {
         cardCVC.innerHTML = '000';
      }
   });


});



// const blankDiv = document.createElement('div');
// item.classList.add('info__blank');
// blankDiv.textContent = 'Cant be blank';

// if (item.parentElement.classList.contains('info__date') || ) {
//    item.parentElement.append(blankDiv);
// } else {
//    item.parentElement.insertBefore(blankDiv, item.nextElementSibling);
// }