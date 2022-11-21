// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFcatory(id, DNABase){
  return {
    id: id,
    dna: DNABase,
    mutate(){
      const selectedDna = Math.round(Math.random() * 14);
      const currentDna = this.dna[selectedDna];
      do{
        this.dna[selectedDna] = returnRandBase();
      }while(currentDna === this.dna[selectedDna])
    },

    compareDNA(pAequator){
      let counter = 0;
      let i = 0;
      for(let item of pAequator.dna){
        
        if(item === this.dna[i]){
          counter++;
          //console.log(item +" "+ this.dna[i]);

        }
        i++;
      }
      console.log(`specimen #${this.id} and specimen #${pAequator.id} have ${counter}% DNA in common`);
    },

    willLikelySurvive(){
      for(let item of this.dna){
        let counter = 0;
        if(item === 'C' || item === 'G'){
            counter++;
        }
      }
      if(Math.floor((counter/this.dna.length)*100) >=60){
        return true;
      }
      return false;
    }
  }
}

const somePAequators = [];
for(let i = 0; i< 30; i++){
  somePAequators.push(pAequorFcatory(i, mockUpStrand()));
}

somePAequators[0].compareDNA(somePAequators[1])
console.log(somePAequators[0].dna);
console.log(somePAequators[1].dna);
somePAequators[1].mutate();
console.log(somePAequators[1].dna);





