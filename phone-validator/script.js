const userIn = document.getElementById('user-input'); //user-Input
const checkbtn = document.getElementById('check-btn');
const clrBtn = document.getElementById('clear-btn'); //clear button
const resultDiv =document.getElementById('results-div');

const checkValidNum = input => {
  if (input === ''){
    alert('Please provide a phone number');
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const space_Dashes = '[\\s\\-]?';
  const phone_Number = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phone_Regex = new RegExp(`${countryCode}${areaCode}${space_Dashes}${phone_Number}`);

   const pTag = document.createElement('p');
   pTag.className = 'results-text';
   
  phone_Regex.test(input)
    ? (pTag.style.color = '#fbee1a')
    : (pTag.style.color = '#be081e');
  pTag.appendChild(
    document.createTextNode(`${phone_Regex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`)
  );

  resultDiv.appendChild(pTag);
};

checkbtn.addEventListener('click', () =>{
  checkValidNum(userIn.value);
  userIn.value = '';

});

userIn.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    checkValidNum(userIn.value);
    userIn.value = '';

  }
});

clrBtn.addEventListener('click', ()=>{
  resultDiv.textContent = '';
});