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
  nome: "",
  url: ""
},
{
  id: 16,
  nome: "",
  url: ""
},
{
  id: 17,
  nome: "",
  url: ""
},
{
  id: 18,
  nome: "",
  url: ""
},
//calming videos for cats
{
  id: 19,
  nome: "Quatro Vidas De Um Cachorro",
  url: "https://firebasestorage.googleapis.com/v0/b/petflix-839d0.appspot.com/o/Quatro%20Vidas%20De%20Um%20Cachorro.mp4?alt=media&token=213ed491-0854-49e6-b9ee-be8f1cafdb59"
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