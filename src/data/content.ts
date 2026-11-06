import { tones } from '../brand/tokens';

export type Tok = { t: string; r: string; g: string };
export type Line = { toks: Tok[]; es?: string };
const L = (s: string): Tok[] =>
  s.split(' — ').map((p) => {
    const [t, r, g] = p.split(' | ');
    return { t: t!, r: r!, g: g! };
  });

export const letter: Line[] = [
  { toks: L('สวัสดี | sà-wàt-dii | hola — จ้ะ | jâ | (cariño) — หลาน | lǎan | nieto — รัก | rák | querido'), es: 'Hola, querido nieto' },
  { toks: L('ยาย | yaai | la abuela — ดีใจ | dii-jai | contenta — มาก | mâak | muy — ที่ | thîi | de que — หลาน | lǎan | tú (nieto) — จะ | jà | vas a — มา | maa | venir — หา | hǎa | a vernos'), es: 'La abuela está muy contenta de que vengas a vernos' },
  { toks: L('ทาง | thaang | el camino — มา | maa | a — บ้าน | bâan | casa — เรา | rao | nuestra — มี | mii | tiene — โค้ง | khóong | curvas — เยอะ | yə́ | muchas — มาก | mâak | muchísimas'), es: 'El camino a casa tiene muchísimas curvas' },
  { toks: L('ขับรถ | khàp-rót | conduce — ช้าๆ | cháa-cháa | despacito — นะ | ná | ¿vale?'), es: 'Conduce despacito, ¿vale?' },
  { toks: L('ที่บ้าน | thîi-bâan | en casa — มี | mii | hay — ข้าวซอย | khâaw-sɔɔi | khao soi — มี | mii | hay — กาแฟ | gaa-fɛɛ | café — ร้อน | rɔ́ɔn | caliente — และ | lɛ́ | y — มี | mii | hay — หมอก | mɔ̀ɔk | niebla — ทุก | thúk | cada — เช้า | cháao | mañana'), es: 'En casa hay khao soi, café caliente y niebla cada mañana' },
  { toks: L('พ่อ | phɔ̂ɔ | papá — กับ | gàp | y — แม่ | mɛ̂ɛ | mamá — รอ | rɔɔ | esperan — อยู่ | yùu | (ahora) — น้อง | nɔ́ɔng | los pequeños — ก็ | gɔ̂ɔ | también — รอ | rɔɔ | esperan — อยู่ | yùu | (ahora)'), es: 'Papá y mamá os esperan, y los pequeños también' },
  { toks: L('มาถึง | maa-thʉ̌ng | llegar — เมื่อไหร่ | mʉ̂a-rài | cuando — ยาย | yaai | la abuela — จะ | jà | va a — ผูกข้อมือ | phùuk-khɔ̂ɔ-mʉʉ | atarte el hilo de la bendición — ให้ | hâi | (para ti)'), es: 'Cuando llegues, la abuela te atará el hilo de la bendición' },
  { toks: L('รักนะ | rák-ná | te quiero'), es: 'Te quiero' },
  { toks: L('ยาย | yaai | Yai'), es: 'Yai' },
];

export const stops = [
  ['Chiang Mai · Puerta Tha Phae', 'saludos y cortesía'],
  ['Mercado de Warorot', 'números, dinero y comida'],
  ['Mae Taeng · el santuario de Noi', 'animales, colores y cuerpo'],
  ['Carretera 1095 · primeras curvas', 'direcciones, viajes y tiempo'],
  ['Pai · el valle', 'gustos, sentimientos y preguntas'],
  ['Cueva Tham Lod', 'el alfabeto'],
  ['Mirador Kiew Lom · mar de niebla', 'clima, naturaleza, días y horas'],
  ['Puente de bambú Su Tong Pae', 'tonos y marcas de tono'],
  ['Mae Hong Son · lago Chong Kham', 'templos, cortesía, pasado y futuro'],
  ['Ban Rak Thai', 'clasificadores, comparar y pedir'],
  ['El pueblo en la niebla', 'la familia y la casa'],
  ['La cocina de Mae', 'sabores, ingredientes y recetas'],
  ['Las historias de Yai', 'narrar, conectores y refranes'],
  ['La ceremonia del hilo blanco', 'sentimientos, registro formal y bendiciones'],
] as const;

/** Temporada 2: un año en el pueblo (mes, mes en thai, título, temas). */
export const moons = [
  ['Abril', 'เมษายน', 'Agua de año nuevo', 'Songkran, Poi Sang Long, respeto a los mayores, ropa y fiesta'],
  ['Mayo', 'พฤษภาคม', 'El mercado de la mañana', 'pagar, pesar, comparar y regatear'],
  ['Junio', 'มิถุนายน', 'Pies en el barro', 'el arrozal, herramientas, animales y tormentas'],
  ['Julio', 'กรกฎาคม', 'Tres meses de luz', 'Khao Phansa: templo, monjes, preceptos y mérito'],
  ['Agosto', 'สิงหาคม', 'Jazmín para Mae', 'familia, carácter, gratitud y pareja'],
  ['Septiembre', 'กันยายน', 'Lluvia sin fin', 'lluvias, averías, peligros y salud'],
  ['Octubre', 'ตุลาคม', 'Luces y caminos', 'Ok Phansa, viajes y la ciudad'],
  ['Noviembre', 'พฤศจิกายน', 'Krathongs y flores amarillas', 'deseos, planes de futuro y condiciones'],
  ['Diciembre', 'ธันวาคม', 'Arroz nuevo, manos juntas', 'la cosecha, el frío y la ayuda entre vecinos'],
  ['Enero', 'มกราคม', 'El mes de los niños', 'escuela, aprender y aconsejar'],
  ['Febrero', 'กุมภาพันธ์', 'Hablar de todo', 'opiniones, noticias y cambios'],
  ['Marzo', 'มีนาคม', 'Humo, calor y un discurso', 'calor, humo, recuerdos y despedida'],
] as const;

export type Game = { n: number; name: string; line: string; trains: string; thai?: string };
export const gameGroups: { id: string; name: string; blurb: string; trains: string; games: Game[] }[] = [
  {
    id: 'palabras', name: 'Palabras', blurb: 'Vocabulario que se pega.', trains: 'vocabulario',
    games: [
      { n: 1, name: 'Parejas', line: 'Une thai y español antes de que se consuma la mecha.', trains: 'Vocabulario y reflejos' },
      { n: 2, name: 'Memoria del templo', line: 'Voltea cartas Lanna y encuentra cada pareja.', trains: 'Memoria visual' },
      { n: 3, name: 'Monzón', line: 'Toca la gota correcta antes de que caiga al arrozal.', trains: 'Reconocimiento rápido' },
      { n: 4, name: '¿Sí o บ่?', line: 'Desliza: ¿la traducción es correcta? บ่ es «no» en el norte.', trains: 'Vocabulario y kham mueang', thai: 'บ่' },
      { n: 5, name: 'Noche de farolillos', line: 'Suelta los farolillos de una categoría.', trains: 'Categorías de palabras' },
    ],
  },
  {
    id: 'oido', name: 'Oído y tonos', blurb: 'Para que te entiendan a la primera.', trains: 'oído',
    games: [
      { n: 6, name: 'Oído de elefante', line: 'Escucha y elige la imagen.', trains: 'Comprensión oral' },
      { n: 7, name: 'Trompa de tonos', line: 'Reconoce el tono que suena.', trains: 'Los 5 tonos' },
      { n: 8, name: '¿Tigre o camisa?', line: 'Pares mínimos: เสือ sʉ̌a tigre / เสื้อ sʉ̂a camisa.', trains: 'Tonos y pares mínimos', thai: 'เสือ' },
      { n: 9, name: 'Eco', line: 'Graba tu voz y compárala.', trains: 'Pronunciación' },
    ],
  },
  {
    id: 'frases', name: 'Frases', blurb: 'De palabras sueltas a conversación.', trains: 'gramática',
    games: [
      { n: 10, name: 'Puente de bambú', line: 'Ordena palabras: cada una es una tabla del puente.', trains: 'Orden de la frase' },
      { n: 11, name: 'La palabra perdida', line: 'Completa la frase.', trains: 'Gramática en contexto' },
      { n: 12, name: 'Cestas del mercado', line: 'Clasificadores ตัว, คน, ใบ, ลูก, อัน.', trains: 'Clasificadores', thai: 'ตัว' },
      { n: 13, name: 'Noi dice', line: 'Toca la parte del cuerpo de Noi que te piden en thai. Su izquierda es tu derecha.', trains: 'Comprensión y cuerpo' },
    ],
  },
  {
    id: 'vida-real', name: 'Vida real', blurb: 'Lo que vas a hacer allí arriba.', trains: 'situaciones',
    games: [
      { n: 14, name: 'Paga justo', line: 'Paga con baht reales: 20 verde, 50 azul, 100 rojo.', trains: 'Dinero y números' },
      { n: 15, name: 'Cena familiar', line: 'Conversa con la familia.', trains: 'Conversación' },
      { n: 16, name: '1.864 curvas', line: 'Juego firma: responde tocando la señal izquierda o derecha para tomar cada curva.', trains: 'Direcciones y reflejos' },
    ],
  },
  {
    id: 'letras', name: 'Letras', blurb: 'El alfabeto, sin miedo.', trains: 'lectura y escritura',
    games: [
      { n: 17, name: 'Cueva de las letras', line: 'Linterna en la cueva Tham Lod.', trains: 'Reconocer consonantes' },
      { n: 18, name: 'Une los puntos', line: 'Traza letras empezando por el bucle.', trains: 'Trazo y escritura' },
      { n: 19, name: 'Bloques de sílabas', line: 'Consonante, vocal y tono.', trains: 'Formar sílabas' },
      { n: 20, name: 'Cuentos de Yai', line: 'Lectura con audio, toca para traducir.', trains: 'Lectura' },
    ],
  },
];
export const featuredGames = [16, 8, 3, 10, 14, 15];
export const allGames = gameGroups.flatMap((g) => g.games);

export const toneRows = [
  { id: 'M', word: 'มา', rom: 'maa', es: 'venir' },
  { id: 'L', word: 'ไก่', rom: 'gài', es: 'pollo' },
  { id: 'F', word: 'ข้าว', rom: 'khâaw', es: 'arroz' },
  { id: 'H', word: 'ม้า', rom: 'máa', es: 'caballo' },
  { id: 'R', word: 'หมา', rom: 'mǎa', es: 'perro' },
] as const;
export const toneDefs = tones;

export const principles = [
  ['Sanuk primero', 'Si no es divertido, no funciona. Sanuk (สนุก) significa «divertido».'],
  ['ไม่เป็นไร', 'Equivocarse no quita vidas. Noi nunca regaña: no pasa nada.'],
  ['Curva a curva', 'Sesiones de 3 a 5 minutos. Cabe en un trayecto de autobús.'],
  ['La niebla se despeja', 'El progreso se ve: cada palabra aclara un poco la carta.'],
  ['Con respeto', 'ครับ y ค่ะ, el wai y el registro: se aprende cómo decirlo, no solo qué.'],
] as const;
