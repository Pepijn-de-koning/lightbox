const allInfo = document.querySelectorAll('.big');
const allSmall = document.querySelectorAll('.small');

let alleInhoud = [];

for (let i=0; i<allInfo.length; i++) {
  alleInhoud.push(allInfo[i]);
  allInfo[i].remove();
}

function verwijderModaal() {
  document.getElementById('modaal').remove();
}

function maakModaal(num) {
  console.log(alleInhoud[num]);
  let modaal= document.createElement('div');
  modaal.className = 'modaal';
  modaal.id = 'modaal';
  modaal.addEventListener('click', verwijderModaal);

  let sluitknop = document.createElement('i');
  sluitknop.className = 'fas fa-times-circle sluit-knop';
  sluitknop.addEventListener('click', verwijderModaal);

  let modaalInhoud = document.createElement('div');
  modaalInhoud.className = 'modaal-inhoud';
  modaalInhoud.innerHTML =alleInhoud[num].innerHTML;
  modaalInhoud.addEventListener('click', function(e) {
  e.stopPropagation();
  });
  gsap.to(modaalInhoud, {marginTop: 0, duration: 1, ease: "bounce.out"});
  modaalInhoud.prepend(sluitknop);
  modaal.append(modaalInhoud);
  document.body.append(modaal);
}

for(let i=0; i<allSmall.length; i++) {
  allSmall[i].addEventListener('click', function() {
    maakModaal(i)
  })
}
