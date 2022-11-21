# Mystery organism

You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

1. Look over the starter code. There are two helper functions: *returnRandBase()* and *mockUpStrand()*.DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() is called, it will randomly select a base and return the base ('A','T','C', or 'G').mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases. You’ll use these helper functions later to create your objects that represent P. aequor.

2. Since you need to create multiple objects, create a factory function *pAequorFactory()* that has two parameters. *pAequorFactory()* should return an object that contains the properties specimenNum and dna that correspond to the parameters provided. You’ll also add more methods to this returned object in the later steps.

* The first parameter is a number (no two organisms should have the same number).
* The second parameter is an array of 15 DNA bases.

3.  Add the method *.mutate()*. .mutate() is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.

4. You’ll have to add a new method (.compareDNA()) to the returned object of the factory function. *.compareDNA()* has one parameter, another pAequor object. The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations

5. P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases. In the returned object of pAequorFactory(), add another method *.willLikelySurvive()*. .willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.