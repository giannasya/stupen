/**
 * Instruktur Adiel perlu bantuan sortir nilai para student. Dia ingin mencari ranking para student dan
 * menampilkan nama si juara.
 * Jika ada lebih dari satu juara yang sama, tampilkan semuanya
 *
 * RULES:
 * TIDAK BOLEH MENGGUNAKAN .sort, Set
 *
 * TIPS:
 *   message sang juara bisa menggunakan console.log
 *   score harus di return
 *
 */

 function getChamps(list) {
    // code goes here
  }
  
  var score = [
    ["Vian", 90],
    ["Ari", 100],
    ["Taufik", 85],
    ["Akbar", 95]
  ];
  console.log(getChamps(score));
  /**
   * "Ari adalah juara!"
   * [
   *   ["Ari", 100],
   *   ["Akbar", 95],
   *   ["Vian", 90],
   *   ["Taufik", 85]
   * ]
   */
  
  var score2 = [
    ["Joseph", 100],
    ["Jack", 90],
    ["Beck", 95],
    ["Alfred", 100]
  ];
  console.log(getChamps(score2));
  /**
   * "Joseph dan Alfred sang juara!"
   * [
   *   ["Joseph", 100],
   *   ["Alfred", 100],
   *   ["Beck", 95],
   *   ["Jack", 90]
   * ]
   */
  // console.log(getChamps([]));
  // maaf, tidak ada peserta