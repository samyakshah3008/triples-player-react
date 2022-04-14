import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: "LKNHVDPKy7g",
    videoLink: "https://www.youtube.com/watch?v=LKNHVDPKy7g",
    categoryName: "Comedy",
    cardImg: "https://img.youtube.com/vi/LKNHVDPKy7g/hqdefault.jpg",
    cardTitle: "Dhamaal",
    cardOwner: "Samyak Shah",
    description:
      "Dhamaal (English translation: Fun) is a 2007 Indian comedy film directed by Indra Kumar and produced by Ashok Thakeria.",
  },

  {
    _id: "iGfT6rdTS34",
    videoLink: "https://www.youtube.com/watch?v=iGfT6rdTS34",
    categoryName: "Comedy",
    cardImg: "https://img.youtube.com/vi/iGfT6rdTS34/hqdefault.jpg",
    cardTitle: "Welcome",
    cardOwner: "Samyak Shah",
    description:
      "Welcome is an Indian 2007 Hindi-language comedy film directed and co-written by Anees Bazmee with production by Firoz Nadiadwala.",
  },

  {
    _id: "tPXYWRGNl7s",
    videoLink: "https://www.youtube.com/watch?v=tPXYWRGNl7s",
    categoryName: "Comedy",
    cardImg: "https://img.youtube.com/vi/tPXYWRGNl7s/hqdefault.jpg",
    cardTitle: "Ready",
    cardOwner: "Samyak Shah",
    description:
      "Ready is a 2011 Indian Hindi-language action comedy film directed by Anees Bazmee. Produced by T-Series Films, Rawail Grandsons Entertainment",
  },
  {
    _id: "SGwFnnS0iu4",
    videoLink: "https://www.youtube.com/watch?v=SGwFnnS0iu4",
    categoryName: "Comedy",
    cardImg: "https://img.youtube.com/vi/SGwFnnS0iu4/hqdefault.jpg",
    cardTitle: "Housefull 2",
    cardOwner: "Samyak Shah",
    description:
      "Housefull 2 (also known as Housefull 2: The Dirty Dozen) is an 2012 Indian Hindi-language comedy film directed by Sajid Khan",
  },
  {
    _id: "yftMYuacQio",
    videoLink: "https://www.youtube.com/watch?v=yftMYuacQio",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/yftMYuacQio/hqdefault.jpg",
    cardTitle: "The Conjuring",
    cardOwner: "Samyak Shah",
    description:
      "The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes",
  },
  {
    _id: "eAJFVeBPXjQ",
    videoLink: "https://www.youtube.com/watch?v=eAJFVeBPXjQ",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/eAJFVeBPXjQ/hqdefault.jpg",
    cardTitle: "Annabelle comes home",
    cardOwner: "Samyak Shah",
    description:
      "Annabelle Comes Home is a 2019 American supernatural horror film written and directed by Gary Dauberman, in his directorial debut,",
  },
  {
    _id: "VSaEdshUCzA",
    videoLink: "https://www.youtube.com/watch?v=VSaEdshUCzA",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/VSaEdshUCzA/hqdefault.jpg",
    cardTitle: "The Nun",
    cardOwner: "Samyak Shah",
    description:
      "The Nun is a 2018 American gothic supernatural horror film directed by Corin Hardy and written by Gary Dauberman",
  },
  {
    _id: "yrgst6eD-Dk",
    videoLink: "https://www.youtube.com/watch?v=yrgst6eD-Dk",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/yrgst6eD-Dk/hqdefault.jpg",
    cardTitle: "Conjuring summary",
    cardOwner: "Samyak Shah",
    description:
      "The Conjuring is a 2013 American supernatural horror film directed by James Wan and written by Chad Hayes",
  },
  {
    _id: "3gJId-oxtpc",
    videoLink: "https://www.youtube.com/watch?v=3gJId-oxtpc",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/3gJId-oxtpc/hqdefault.jpg",
    cardTitle: "Haunted House",
    cardOwner: "Samyak Shah",
    description:
      "A haunted house, spook house or ghost house in ghostlore is a house or other building often perceived as being inhabited",
  },
  {
    _id: "quNYPP97Yes",
    videoLink: "https://www.youtube.com/watch?v=quNYPP97Yes",
    categoryName: "Horror",
    cardImg: "https://img.youtube.com/vi/quNYPP97Yes/hqdefault.jpg",
    cardTitle: "The 1920 Evil Returns",
    cardOwner: "Samyak Shah",
    description:
      "1920: The Evil Returns is a 2012 Indian horror film written by Vikram Bhatt and directed by Bhushan Patel.",
  },
  {
    _id: "S8ZUtWTuHT4",
    videoLink: "https://www.youtube.com/watch?v=S8ZUtWTuHT4",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/S8ZUtWTuHT4/hqdefault.jpg",
    cardTitle: "Spiderman No way home",
    cardOwner: "Samyak Shah",
    description:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man",
  },
  {
    _id: "DgfsnXSOeZk",
    videoLink: "https://www.youtube.com/watch?v=DgfsnXSOeZk",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/DgfsnXSOeZk/hqdefault.jpg",
    cardTitle: "Krrish 3",
    cardOwner: "Samyak Shah",
    description:
      "Krrish 3 is a 2013 Indian Hindi-language superhero film produced and directed by Rakesh Roshan, and written by Honey Irani and Robin Bhatt",
  },
  {
    _id: "-8p1H4A5jvQ",
    videoLink: "https://www.youtube.com/watch?v=-8p1H4A5jvQ",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/-8p1H4A5jvQ/hqdefault.jpg",
    cardTitle: "Ghajini",
    cardOwner: "Samyak Shah",
    description:
      "Ghajini is a 2008 Indian Hindi-language action thriller film written and directed by A. R. Murugadoss, jointly produced by Allu Aravind,",
  },
  {
    _id: "zBXa6Foq9ZM",
    videoLink: "https://www.youtube.com/watch?v=zBXa6Foq9ZM",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/zBXa6Foq9ZM/hqdefault.jpg",
    cardTitle: "Bang Bang!",
    cardOwner: "Samyak Shah",
    description:
      "Bang Bang! is a 2014 Indian Hindi-language action comedy film directed by Siddharth Anand and written by Abbas Tyrewala, Sujoy Ghosh ",
  },
  {
    _id: "Jr3yUz0jRpg",
    videoLink: "https://www.youtube.com/watch?v=Jr3yUz0jRpg",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/Jr3yUz0jRpg/hqdefault.jpg",
    cardTitle: "Race 2",
    cardOwner: "Samyak Shah",
    description:
      "Race 2 : Betrayal Is Survival (simply Race 2) is a 2013 Indian Hindi-language action crime film directed by Abbas-Mustan and written by Kiran Kotrial ",
  },
  {
    _id: "n8iqixi7lj8",
    videoLink: "https://www.youtube.com/watch?v=n8iqixi7lj8",
    categoryName: "Thrill and action",
    cardImg: "https://img.youtube.com/vi/n8iqixi7lj8/hqdefault.jpg",
    cardTitle: "Dhoom 3",
    cardOwner: "Samyak Shah",
    description:
      "Dhoom 3 (transl. Blast 3) is a 2013 Indian Hindi-language action thriller film written and directed by Vijay Krishna Acharya",
  },
  {
    _id: "E00892hmVZM",
    videoLink: "https://www.youtube.com/watch?v=E00892hmVZM",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/E00892hmVZM/hqdefault.jpg",
    cardTitle: "MS Dhoni: Untold Story",
    cardOwner: "Samyak Shah",
    description:
      "M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey.",
  },
  {
    _id: "RPJP9fFnMoU",
    videoLink: "https://www.youtube.com/watch?v=RPJP9fFnMoU",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/RPJP9fFnMoU/hqdefault.jpg",
    cardTitle: "83 Full Movie",
    cardOwner: "Samyak Shah",
    description:
      "83 is a 2021 Indian Hindi-language sports drama film written and directed by Kabir Khan and produced by Deepika Padukone, Kabir Khan, Vishnu Vardhan Induri, Sajid Nadiadwala",
  },
  {
    _id: "xHfdt5cnrZ8",
    videoLink: "https://www.youtube.com/watch?v=xHfdt5cnrZ8",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/xHfdt5cnrZ8/hqdefault.jpg",
    cardTitle: "Mumbai central",
    cardOwner: "Samyak Shah",
    description:
      "Mumbai Central: Directed by Karan Radhakrishna. With Chetanya Adib, Jhuma Biswas, Alibail Blackburn, Rajshri Deshpande. ",
  },
  {
    _id: "fO1mbR7zyF8",
    videoLink: "https://www.youtube.com/watch?v=fO1mbR7zyF8",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/fO1mbR7zyF8/hqdefault.jpg",
    cardTitle: "Sanju",
    cardOwner: "Samyak Shah",
    description:
      "Sanju is a 2018 Indian Hindi-language biogrophical comedy drama film directed by Rajkumar Hirani and written by Hirani and Abhijat Joshi",
  },
  {
    _id: "WvS9jmc2-kw",
    videoLink: "https://www.youtube.com/watch?v=WvS9jmc2-kw",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/WvS9jmc2-kw/hqdefault.jpg",
    cardTitle: "The Kashmir files",
    cardOwner: "Samyak Shah",
    description:
      "The Kashmir Files is a 2022 Indian Hindi-language drama film written and directed by Vivek Agnihotri. The film presents a fictional storyline centred",
  },
  {
    _id: "LGB61HyL-IQ",
    videoLink: "https://www.youtube.com/watch?v=LGB61HyL-IQ",
    categoryName: "Documentary",
    cardImg: "https://img.youtube.com/vi/LGB61HyL-IQ/hqdefault.jpg",
    cardTitle: "Chakde India",
    cardOwner: "Samyak Shah",
    description:
      "Chak De! India (transl. Let's go! India) is a 2007 Indian Hindi-language sports film directed by Shimit Amin and produced by Aditya Chopra",
  },
];
