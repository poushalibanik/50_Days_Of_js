// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with 
// its complement:

// G -> C
// C -> G
// T -> A
// A -> U

//Solution:-

const transcription = (dna) => {
    return dna.replace(/G|C|T|A/g, nucleotide => {
      switch (nucleotide) {
        case 'G': return 'C';
        case 'C': return 'G';
        case 'T': return 'A';
        case 'A': return 'U';
        default: return nucleotide; // Handle unexpected characters
      }
    });
  };
  