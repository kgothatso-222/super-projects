const userInp = document.getElementById('text-input');
const checkerPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input=> {
  const originalInput = input;

  if(input === ''){
    alert('Please input a value');
    return;
  }
 resultDiv.replaceChildren();

 const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

 let resultMsg =`${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

 const pTag = document.createElement('p');
 pTag.className ='user-input';
 pTag.innerHTML = resultMsg;
 resultDiv.appendChild(pTag );

 resultDiv.classList.remove('hidden');

};

checkerPalindromeBtn.addEventListener('click', () =>{
  checkForPalindrome(userInp.value);
  userInp.value= '';
});

userInp.addEventListener('keydown', e => {
  if(e.key ==='Enter'){
    checkForPalindrome(userInp.value);
    userInp.value = '';
  }
});
