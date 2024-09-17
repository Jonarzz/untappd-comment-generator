const NO_COMMA = {
  aro: "aromacie",
  arom: "aromacie",
  bar: "bardziej",
  bial: "białe",
  cal: "całkiem",
  calos: "całościowo",
  cho: "chociaż",
  dosc: 'dość',
  chyb: "chyba",
  czerw: "czerwone",
  du: "dużo",
  hi: "dużo",
  dluz: "dłuższa",
  faj: "fajnie",
  int: "intensywna",
  jed: "jednak",
  jest: "jest",
  krot: "krótka",
  lek: "lekka",
  leko: "lekko",
  leps: "lepsze",
  nis: "niska",
  nisie: "niskie",
  mal: "mało",
  nad: "nadal",
  niewys: "niewysoka",
  niezb: "niezbyt",
  og: "ogólnie",
  plus: "plus",
  przesz: "przeszkadza",
  przyj: "przyjemnie",
  rac: "raczej",
  racz: "raczej",
  spocz: "spoczko",
  spk: "spoko",
  spr: "sporo",
  sum: "sumie",
  sup: "super",
  smak: "smakuje",
  tego: "tego",
  tr: "trochę",
  troch: "trochę",
  tylk: "tylko",
  wcj: "więcej",
  wie: "więcej",
  wycz: "wyczuwalne",
  wyrz: "wyraźnie",
  wyraz: "wyraźnie",
  wys: "wysoka",
  wysa: "wysoka",
  wysie: "wysokie",
  wyz: "wyższa",
  zal: "zalegająca",
  zalg: "zalegająca",
  zaz: "zaznaczona",
  zazn: "zaznaczona",
  lad: "ładnie"
};

const WITH_COMMA = {
  alb: "albedo",
  alk: "alkoholowe",
  an: "ananas",
  anan: "ananas",
  bal: "balans",
  ban: "banan",
  becz: "beczka",
  brz: "brzoskwinia",
  chm: "chmielowe",
  cia: "ciała",
  cier: "cierpkie",
  ciez: "ciężkie",
  cyt: "cytrus",
  cytr: "cytryna",
  czek: "czekoladowe",
  des: "deserowe",
  dom: "dominuje",
  drew: "drewno",
  dziw: "dziwne",
  estr: "estrowe",
  gl: "gładkie",
  glad: "gładkie",
  gor: "goryczka",
  grej: "grejpfrut",
  grusz: "gruszka",
  gest: "gęste",
  herb: "herbata",
  jab: "jablko",
  karm: "karmelowe",
  kok: "kokos",
  kw: "kwaśne",
  kwas: "kwaśne",
  kwiat: "kwiatowe",
  lim: "limonka",
  mand: "mandarynka",
  man: "mango",
  mar: "marakuja",
  mas: "masło",
  mdl: "mdłe",
  mel: "melon",
  met: "metaliczne",
  miod: "miód",
  mor: "morela",
  myd: "mydlane",
  mecz: "męczace",
  nij: "nijakie",
  ocet: "ocet",
  ole: "oleiste",
  op: "opór",
  orz: "orzechy",
  owo: "owocki",
  pal: "paloność",
  pale: "palone",
  pest: "pestka",
  pel: "pełne",
  piecz: "pieczywo",
  pom: "pomarańcza",
  przes: "przesady",
  plas: "płaskie",
  plask: "płaskie",
  plyt: "płytkie",
  plytk: "płytkie",
  rzes: "rześkie",
  siar: "siarka",
  skor: "skóra",
  socz: "soczyste",
  soj: "sojowy",
  spj: "spójne",
  sym: "sympatyczne",
  szor: "szorstkie",
  szors: "szorstkie",
  szorst: "szorstkie",
  slodk: "slodkie",
  slodw: "słodowe",
  slodow: "słodowe",
  slod: "słodycz",
  utlen: "utlenione",
  wan: "wanilia",
  win: "winogrona",
  wis: "wisnia",
  wod: "wodniste",
  wodn: "wodniste",
  wysusz: "wysusząjace",
  wytr: "wytrawne",
  wedz: "wędzonka",
  zbal: "zbalansowane",
  lod: "łodygowe",
  lyk: "łykach",
  sciag: "ściagąjace",
  ziel: "zielone",
  zyw: "żywiczne"
};

document.getElementById('generate').onclick = () => {
  const input = document.getElementById('input').value;
  let result = input.split(' ').map(word => {
    let stripped = word.toLowerCase().replace(/,$/, '');
    let withDot = false;
    if (word.endsWith('.')) {
      withDot = true;
      stripped = word.replace(/\.$/, '');
    }
    let match = WITH_COMMA[stripped];
    if (match) {
      if (withDot) {
        return match + '.';
      }
      return match + ',';
    }
    match = NO_COMMA[stripped];
    if (match) {
      if (withDot) {
        return match + '.';
      }
      return match;
    }
    return word;
  }).join(' ');
  result = result.charAt(0).toUpperCase() + result.slice(1);
  if (result.endsWith(',')) {
    result = result.slice(0, -1);
  }
  for (let i = 0; i < result.length - 3; i++) {
    if (result.charAt(i) === '.') {
      result = result.slice(0, i + 2)
               + result.charAt(i + 2).toUpperCase()
               + result.slice(i + 3);
    }
  }
  if (!result.endsWith('.')) {
    result += '.';
  }

  document.getElementById('output').value = result;
};

document.getElementById('clear').onclick = () => {
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
};

document.getElementById('copy').onclick = () => {
  document.getElementById('output')
          .select();
  document.execCommand("copy");
};