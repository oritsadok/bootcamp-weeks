
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newStrand = []

const firstTwo = genes.splice(0, 2)
const lastGene = genes.splice(genes.length - 1)

newStrand.push(...firstTwo)
newStrand.push(...lastGene)
newStrand.push(genes[0]) //remember we spliced the first 2, so now "RLF" is first
newStrand.push(genes[genes.length - 1], genes[genes.length - 1]) //again, since we spliced the last one, "AZIN2" is now last
newStrand.unshift("FXT")

console.log(newStrand)