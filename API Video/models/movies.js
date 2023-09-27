const movies = [
//Happy videos for dogs
{
  id: 1,
  nome: "Hakuna Matata",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Hakuna%20Matata.mp4?alt=media&token=c9500267-4f28-4d32-9b7c-193289611bce"
},
{
  id: 2,
  nome: "To Howl",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/To%20Howl.mp4?alt=media&token=a514bf0b-c43f-4cfb-9e34-a3f57a81c5a7"
},
{
  id: 3,
  nome: "Dog Fails",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Dogs%20Fails.mp4?alt=media&token=a149be98-db98-4d93-9827-04440e656ac8"
},
{
  id: 4,
  nome: "Let's Take a Bath",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Let's%20Take%20a%20Bath.mp4?alt=media&token=9d0b39d4-50a8-41ff-a66c-58c91dd35b49"
},
{
  id: 5,
  nome: "Sem Floresta",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Sem%20Floresta.mp4?alt=media&token=f541ad34-7674-4536-bfd2-65252a6253a8"
},
{
  id: 6,
  nome: "Cachorro Dançante",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cachorro%20Dan%C3%A7ando!.mp4?alt=media&token=b9c7dc34-77e1-48a0-90cb-73ed078f26f7"
},
//calming videos for dogs
{
  id: 7,
  nome: "Dogs Dreaming",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Dogs%20Dreaming.mp4?alt=media&token=65b02142-416b-41a2-b6ac-e1afc1f2ab5d"
},
{
  id: 8,
  nome: "Sounds That Make Dogs Tilt Their Head",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Sounds%20That%20Make%20Dogs%20Tilt%20Their%20Head.mp4?alt=media&token=bc53f7b6-d46b-42be-8db5-cde6eabffa74"
},
{
  id: 9,
  nome: "How to Calm Down a Dog",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/How%20to%20Calm%20Down%20a%20Dog.mp4?alt=media&token=4969e457-9867-4e7b-80c0-281197d56b72"
},
{
  id: 10,
  nome: "Cute Dog",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cute%20Dogs.mp4?alt=media&token=7bfc7c9b-0659-4b8e-b198-75d455fa0f8d"
},
{
  id: 11,
  nome: "Marley e Eu",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Marley%20e%20Eu.mp4?alt=media&token=85cea423-07da-4757-b2b8-69b6a2c21db6"
},
{
  id: 12,
  nome: "Quatro Vidas De Um Cachorro",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Quatro%20Vidas%20De%20Um%20Cachorro.mp4?alt=media&token=213ed491-0854-49e6-b9ee-be8f1cafdb59"
},
//Happy videos for cats
{
  id: 13,
  nome: "Cats with threatening aura",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cats%20with%20threatening%20aura.mp4?alt=media&token=57226778-9ac1-4925-8970-cf101fbc554e"
},
{
  id: 14,
  nome: "Oh Long Johnson",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Talking%20cat%20says%20Oh%20Long%20Johnson.mp4?alt=media&token=2796034d-178d-4ea2-8989-24a7efc8a865"
},
{
  id: 15,
  nome: "Garfield Live Action",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/GarfieldLiveAction.mp4?alt=media&token=91d3564f-196c-451f-b70b-b1983a80d093&_gl=1*18i8i95*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDYyMS4xMS4wLjA."
},
{
  id: 16,
  nome: "Cat Vs Dogs",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/CatXdog.mp4?alt=media&token=d93fcccd-0cf1-44c9-a06b-56c487fdbd6f&_gl=1*j4n69v*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDc0Ny4yMy4wLjA."
},
{
  id: 17,
  nome: "Drawing Cats",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/CatDraws.mp4?alt=media&token=b43d24e4-1ac4-4b8a-b5b0-971dc681393b&_gl=1*e9er6y*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDgxMC42MC4wLjA."
},
{
  id: 18,
  nome: "Garfield Cartoon",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/GarfieldCartoon.mp4?alt=media&token=b41d6173-3279-44ee-9167-1dd81d75f463&_gl=1*1qwvngl*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDcxMC42MC4wLjA."
},
//calming videos for cats
{
  id: 19,
  nome: "Relaxing Videos for Cats 2",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/RelaxingCatVideo2.mp4?alt=media&token=d0c23ac2-1ce5-497c-8a33-a873018d29e4&_gl=1*3nakkp*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDkyMy4zNi4wLjA."
},
{
  id: 20,
  nome: "Relaxing Videos for Cats",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/RelaxingCatVideo.mp4?alt=media&token=1849fef1-1de2-4363-bcaa-c255ef16a860&_gl=1*sy0noc*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDkwMS41OC4wLjA."
},
{
  id: 21,
  nome: "Cat Routine When Everyone Is Sleeping",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/catNightRoutine.mp4?alt=media&token=92248c68-09dd-496e-a596-200fc79715ca&_gl=1*u3cxiu*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNjMyNi41OS4wLjA."
},
{
  id: 22,
  nome: "Cat Purring ",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/catPurring.mp4?alt=media&token=ab64500c-2f02-4e42-ab65-e42c021340d3&_gl=1*8a5gfa*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNjM4MC41LjAuMA.."
},
{
  id: 23,
  nome: "Becoming Friend of a Cat",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/BeingCatFriend.mp4?alt=media&token=071f2743-1449-4846-8702-d2f0d7471773&_gl=1*1e93v0n*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNDk3NS42MC4wLjA."
},
{
  id: 24,
  nome: "Cat Noise",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/catNoise.mp4?alt=media&token=23d91f44-9e80-44df-9385-380a6aaf6186&_gl=1*1sopswz*_ga*MTMyMjIwMjE3Ni4xNjk1MzE0ODQ2*_ga_CW55HF8NVT*MTY5NTgzNDQyNi45LjEuMTY5NTgzNjQxMi42MC4wLjA."
},];
module.exports = movies



// app.get("/video/:id", (req, res) => {
//   const filmes = [
//     //Happy videos for dogs
//     {
//       id: 1,
//       nome: "Hakuna Matata",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Hakuna%20Matata.mp4?alt=media&token=c9500267-4f28-4d32-9b7c-193289611bce"
//     },
//     {
//       id: 2,
//       nome: "To Howl",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/To%20Howl.mp4?alt=media&token=a514bf0b-c43f-4cfb-9e34-a3f57a81c5a7"
//     },
//     {
//       id: 3,
//       nome: "Dog Fails",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Dogs%20Fails.mp4?alt=media&token=a149be98-db98-4d93-9827-04440e656ac8"
//     },
//     {
//       id: 4,
//       nome: "Let's Take a Bath",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Let's%20Take%20a%20Bath.mp4?alt=media&token=9d0b39d4-50a8-41ff-a66c-58c91dd35b49"
//     },
//     {
//       id: 5,
//       nome: "Sem Floresta",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Sem%20Floresta.mp4?alt=media&token=f541ad34-7674-4536-bfd2-65252a6253a8"
//     },
//     {
//       id: 6,
//       nome: "Cachorro Dançante",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cachorro%20Dan%C3%A7ando!.mp4?alt=media&token=b9c7dc34-77e1-48a0-90cb-73ed078f26f7"
//     },
//     //calming videos for dogs
//     {
//       id: 7,
//       nome: "Dogs Dreaming",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Dogs%20Dreaming.mp4?alt=media&token=65b02142-416b-41a2-b6ac-e1afc1f2ab5d"
//     },
//     {
//       id: 8,
//       nome: "Sounds That Make Dogs Tilt Their Head",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Sounds%20That%20Make%20Dogs%20Tilt%20Their%20Head.mp4?alt=media&token=bc53f7b6-d46b-42be-8db5-cde6eabffa74"
//     },
//     {
//       id: 9,
//       nome: "How to Calm Down a Dog",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/How%20to%20Calm%20Down%20a%20Dog.mp4?alt=media&token=4969e457-9867-4e7b-80c0-281197d56b72"
//     },
//     {
//       id: 10,
//       nome: "Cute Dog",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cute%20Dogs.mp4?alt=media&token=7bfc7c9b-0659-4b8e-b198-75d455fa0f8d"
//     },
//     {
//       id: 11,
//       nome: "Marley e Eu",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Marley%20e%20Eu.mp4?alt=media&token=85cea423-07da-4757-b2b8-69b6a2c21db6"
//     },
//     {
//       id: 12,
//       nome: "Quatro Vidas De Um Cachorro",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Quatro%20Vidas%20De%20Um%20Cachorro.mp4?alt=media&token=213ed491-0854-49e6-b9ee-be8f1cafdb59"
//     },
//     //Happy videos for cats
//     {
//       id: 13,
//       nome: "Cats with threatening aura",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Cats%20with%20threatening%20aura.mp4?alt=media&token=57226778-9ac1-4925-8970-cf101fbc554e"
//     },
//     {
//       id: 14,
//       nome: "Oh Long Johnson",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Talking%20cat%20says%20Oh%20Long%20Johnson.mp4?alt=media&token=2796034d-178d-4ea2-8989-24a7efc8a865"
//     },
//     {
//       id: 15,
//       nome: "",
//       url: ""
//     },
//     {
//       id: 16,
//       nome: "",
//       url: ""
//     },
//     {
//       id: 17,
//       nome: "",
//       url: ""
//     },
//     {
//       id: 18,
//       nome: "",
//       url: ""
//     },
//     //calming videos for cats
//     {
//       id: 19,
//       nome: "Quatro Vidas De Um Cachorro",
//       url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Quatro%20Vidas%20De%20Um%20Cachorro.mp4?alt=media&token=213ed491-0854-49e6-b9ee-be8f1cafdb59"
//     },
//   ];

//   const id = parseInt(req.params.id);
//   const movie = filmes.find((item) => item.id === id);

//   if (movie) {
//     res.status(200).json(movie);
//   } else {
//     res.status(404).json({ message: "Movie not found" });
//   }
// });